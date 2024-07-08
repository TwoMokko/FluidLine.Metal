"use strict";
var Components;
(function (Components) {
    class Carousel {
        $source;
        $wrap;
        $elements;
        $scroll;
        $content;
        $arrows;
        $left;
        $right;
        countDisplayElems;
        countScrollElems;
        lastElement;
        countElements;
        scrolling;
        constructor($source) {
            this.$source = $source;
            this.$elements = $source.children();
            this.$source.hide();
            /* Create elements */
            this.$wrap = $('<div/>', { class: 'inner' }); //components carousel
            this.$scroll = $('<div/>', { class: 'carousel-inner' }); //scroll
            this.$content = $('<div/>', { class: 'images animated' }); //content
            this.$arrows = $('<div/>', { class: 'arrows' });
            this.$left = $('<div/>', { class: 'control left' });
            this.$right = $('<div/>', { class: 'control right' });
            /* Building DOM */
            this.$wrap.append(this.$scroll.append(this.$content), this.$arrows.append(this.$left, this.$right));
            this.init($source);
            /* Events */
            this.$right.on('click', () => this.toRight());
            this.$source.after(this.$wrap);
        }
        init($source) {
            this.countDisplayElems = 6;
            this.countScrollElems = 3;
            this.lastElement = null;
            this.countElements = this.$elements.length;
            this.scrolling = false;
            let num = this.lastElement;
            for (let i = 1; i <= this.countDisplayElems; i++) {
                num = this.getNext(num);
                this.append(num);
            }
            this.lastElement = num;
        }
        getNext(current) {
            if (current === null)
                return 0;
            if (current === this.countElements - 1)
                return 0;
            return current + 1;
        }
        append(num) {
            this.$content.append($(this.$elements[num]).clone());
        }
        toRight() {
            console.log(this);
            if (this.scrolling)
                return;
            this.scrolling = true;
            let num = this.lastElement;
            for (let i = 1; i <= this.countDisplayElems; i++) {
                num = this.getNext(num);
                this.append(num);
            }
            this.scrolling = false;
        }
    }
    Components.Carousel = Carousel;
})(Components || (Components = {}));
// (function($){
//     $.fn.choiceBoard=function(param){
//         var data='';
//         var ipath='/assets/images/';
//         var opt={
//             url:'/choiceAjax',
//             data:'',
//             dataType:'json',
//             ajax:true,      // false - get data offline
//             active:0,
//             sections:0,
//             serie:'',
//             serieCode:'',
//             extOptArr:[],
//             early:''
//         };
//         if(opt.ajax==true){
//             opt=$.extend(opt, param);
//             $.ajax({
//                 url:opt.url,
//                 data:opt.data,
//                 dataType:opt.dataType,
//                 success:function(d,textStatus){
//                     data=$.extend(d);
//                     init();
//                 }
//             });
//         }else{
//             data=jQuery.parseJSON($('#arrayData').text());
//             init();
//         }
//         $('.section').live('mouseover',function(){
//             var sect=$('.section').index(this);
//             if(opt.active!=sect){
//                 opt.active=sect;
//                 onMouseOverSelect();
//             }
//         });
//         $('.section').live('change',function(){
//             $('option',this).each(function(i){
//                 if($(this)[0].selected==true)
//                     onChangeRadio($(this)[0].index);
//             });
//         });
//         $('.OptionsTable input').live('change',function(){
//             onChangeRadio($('.OptionsTable input').index(this));
//         });
//         $('.ExtraOptionsTable').live('change',function(){
//             onChangeRadioExtra($('.ExtraOptionsTable').index(this),$('input:checked',this).val());
//         });
//
//         function init(){
//             data.PresTempArray=data.PresTempArray[0];
//             data.first=0;
//             $('#panel div').removeClass('loading');
//             var urls=document.location.pathname.split('/');
//             opt.serie=urls[1];
//             opt.serieCode=urls[2];
//             buildHeader();
//             opt.sections=$('.section').size();
//             for(var i=0;i<data.SelectMainPartNum;i++)
//                 CheckSelectInProducts(i);
//
//             for(var z=data.SelectMainPartNum+1;z<=opt.sections;z++)
//                 remakeSelects(z-1,data.SelectTableArray[z]);
//
//             if(data.SelectExtraOptionsArray)
//                 firstExtOpt();
//
//             onChangeSelect();
//             onMouseOverSelect();
//             opt.active=0;
//         }
//
//         function firstExtOpt(){
//             $.each(data.SelectExtraOptionsArray,function(i){
//                 opt.extOptArr[i-1]=this[0].title;
//             });
//         }
//
//         function SelectResult(){
//             var array=SelectResultArray();
//             var str=array[0];
//             for(var i=1;i<array.length;i++)
//                 str += "-"+array[i];
//
//             return str;
//         }
//
//         function buildHeader(){
//             var hTop='';
//             var hBottom='';
//             $.each(data.DynPartNamesArray,function(i,val){
//                 if(data.SelectTypesArray[i]=='ExtraOptions')
//                     hTop+='<td align="center"><div class="section"><img id="image_'+i+'" src="'+ipath+'circle.jpg" width="70" height="40">'+
//                         '<div class="CircleSelect"><div class="CircleSelectExtraOptions" id="CircleSelectExtraOptions"></div></div></div></td>';
//                 else
//                     hTop+='<td align="center"><div class="section"><img id="image_'+i+'" src="'+ipath+'circle.jpg" width="70" height="40">'+
//                         '<div class="CircleSelect"><select id="select_'+i+'"></select></div></div></td>';
//                 hBottom+='<td id="SelectName'+i+'" style="background-color: rgb(255, 255, 255)">'+
//                     '<table width="100%" cellpadding="0" cellspacing="0"><tr>'+
//                     '<td id="SelectName'+i+'Left" rowspan="2" width="5"></td><td id="SelectName'+i+'Center" align="center">'+val+'</td><td id="SelectName'+i+'Right" rowspan="2" width="5"></td>'+
//                     '</tr></table>'+
//                     '</td>';
//             });
//             $("#hTop").html(hTop);
//             $("#hBottom").html(hBottom);
//         }
//
//         function SelectResultArray(){
//             var array=new Array();
//             var j=0;
//             for(var i=0;i<opt.sections;i++){
//                 var sel=$('#select_'+i);
//                 if(!sel.size())
//                     break;
//
//                 str=sel.val();
//                 if(str=='-')
//                     continue;
//                 array[j++]=str;
//             }
//
//             if(opt.extOptArr)
//                 for(var s=0;s<opt.extOptArr.length;s++){
//                     strExtra=opt.extOptArr[s];
//                     if(strExtra && strExtra!="-")
//                         array[j++]=strExtra;
//                 }
//             return array;
//         }
//
//         function MainSelectResult(MaxSelect){
//             var stres="";
//             var j=0;
//             var MaxNum=opt.sections;
//             if(typeof MaxSelect!='undefined')
//                 MaxNum=Math.min(MaxSelect,MaxNum);
//             for(var i=0;i<MaxNum;i++){
//                 var strOpt=$('#select_'+i).val();
//                 if(strOpt=='-')
//                     continue;
//                 j++;
//                 if(j>data.MainSelectsNum)
//                     return stres;
//                 if(i>0)
//                     stres+='-'+strOpt;
//                 else
//                     stres+=strOpt;
//             }
//             return stres;
//         }
//
//         function MainSelectResultPlusPrice(BWithOutPlus){
//             BWithOutPlus=BWithOutPlus|false;
//             var stres='';
//             var j=0;
//             var MaxNum=data.SelectMainPartNum;
//             $.each(data.SelectTableArray,function(i,val){
//                 i--;
//                 BSelectInPrice=false;
//                 if(!BWithOutPlus)
//                     if(data.SelectsInPriceArray)
//                         $.each(data.SelectsInPriceArray,function(k,v){
//                             if(v==i)
//                                 BSelectInPrice=true;
//                         });
//                 if(i>=MaxNum&&!BSelectInPrice)
//                     return true;
//
//                 var strOpt=$('#select_'+i).val();
//                 if(strOpt=='-')
//                     return true;
//
//                 j++;
//                 if(j>data.MainSelectsNum)
//                     return stres;
//
//                 if(i>0)
//                     stres+='-'+strOpt;
//                 else
//                     stres+=strOpt;
//             });
//             return stres;
//         }
//
//         function CheckSelectInProducts(select){
//             var stPrev='';
//             if(select>0)
//                 stPrev=MainSelectResult(select);
//
//             var arrSelOpt=new Array();
//             var j=0;
//             var d=data.SelectTableArray[select+1];
//             for(var i=0;i<d.length;i++){
//                 strOpt=d[i]['title'];
//                 if(strOpt!='-')
//                     stProductName=(select==0)?strOpt:stPrev+'-'+strOpt;
//                 else{
//                     arrSelOpt[j++]="-";
//                     continue;
//                 }
//                 $.each(data.ProductsArray,function(k,val){
//                     if((val.pagetitle+'-').indexOf(stProductName+'-')>=0){
//                         arrSelOpt[j++]=d[i]['title'];
//                         return false;
//                     }
//                 });
//             }
//             remakeSelects(select,arrSelOpt);
//         }
//
//         function remakeSelects(select,array){
//             var sel=$('#select_'+select);
//             if(sel.length>0){
//                 var val=sel.val();
//                 $('option',sel).remove();
//                 $.each(array,function(i,v){
//                     if(typeof v=='object')
//                         v=v['title'];
//                     sel.append('<option value="'+v+'">'+v+'</option>');
//                     if (val==$('option',sel)[i].value)
//                         sel.selectedIndex=i;
//                 });
//                 val=sel.val();
//                 if(val.length>3)
//                     $('#image_'+select).attr('width', 90);
//             }
//         }
//
//         function PaintExtraOption(pos){
//             var arr=data.SelectExtraOptionsArray[pos];
//             var str='<table class="ExtraOptionsTable">';
//             str+='<tr><td>';
//             str+='<b>'+data.SelectExtraOptionsNamesArray[pos-1]+':</B> ';
//             str+='</td></tr><td>';
//             for (var j=0;j<arr.length;j++){
//                 var check=(opt.extOptArr[pos-1]==arr[j]['title'])?'checked="checked"':'';
//                 str+='<input type="radio" name="ExtraOption'+pos+'" value="'+arr[j]['title']+'" '+check+'><b>'+arr[j]['title']+'</b>; ';
//                 str+=arr[j]['desc']+'<br>';
//             }
//             return str+"</td></tr></table>";
//         }
//
//         function PaintDynPartExtraOptions(){
//             var str='<table width="100%"><tr>';
//             $.each(data.SelectExtraOptionsArray,function(i){
//                 str+='<td valign="top">'+PaintExtraOption(i)+'</td>';
//             });
//             $("#DynPart").html(str+'</tr></table>');
//         }
//
//         function PaintDynPart(){
//             if(data.SelectTypesArray[opt.active]=="ExtraOptions"){
//                 PaintDynPartExtraOptions();
//                 return;
//             }
//             var sel=$('#select_'+opt.active);
//             var sumColl=$('option',sel).size();
//             var arrSelectOptions=new Array();
//             for(var i=0;i<sumColl;i++)
//                 arrSelectOptions[i]=$('option',sel)[i].value;
//
//             var twoColl=false;
//             if(data.SelectTypesArray[opt.active]=="Sizes"&&arrSelectOptions.length>=6)
//                 twoColl=true;
//
//             if(data.SelectTypesArray[opt.active]=="CrackingPressure"&&arrSelectOptions.length>=6)
//                 twoColl=true;
//
//             if(arrSelectOptions.length>=6)
//                 twoColl=true;
//
//             var ColumnLength=Math.round(sumColl/2-0.1);
//             var str='<table class="OptionsTable" width="100%" ><tr><td>';
//             $.each(arrSelectOptions,function(i,value){
//                 if(twoColl&&i==ColumnLength)
//                     str+='</td><td>';
//                 checked=(value==sel.val())?' checked="checked" ':'';
//                 str+='<input type="radio" name="SelectRadio" value="'+value+'"'+checked+'><b>'+value+'</b>; ';
//                 if(data.SelectTableArray)
//                     $.each(data.SelectTableArray[opt.active+1],function(j,val){
//                         if (val['title']==value)
//                             str+=val['desc'];
//                     });
//                 str+='<br>';
//             });
//             $("#DynPart").html(str+'test</td></tr></table>');
//         }
//
//         function createExtraCode(){
//             var str="";
//             for(var i=0;i<opt.extOptArr.length;i++)
//                 if(opt.extOptArr[i]!="-"){
//                     if(i!=0&&str!="")
//                         str+="-";
//
//                     str+=opt.extOptArr[i];
//                 }
//             $('#CircleSelectExtraOptions').html(str);
//         }
//
//         function onChangeRadioExtra(key,value){
//             opt.extOptArr[key]=value;
//             createExtraCode();
//             onChangeSelect();
//         }
//
//         function onChangeRadio(select){
//             var sel=$('#select_'+opt.active);
//             $('option',sel).each(function(i,val){
//                 if(i==select){
//                     if(val.selected==true)
//                         val.selected=false;
//                     $('option',sel)[select].selected=true;
//                     sel.selectedIndex=select;
//                     onChangeSelect();
//                 }
//             });
//         }
//
//         function selectOfUrl(){
//             data.first=1;
//             for(var s=1;s<data.SelectMainPartNum;s++){
//                 var stPrev='';
//                 if(s>0)
//                     stPrev=MainSelectResult(s);
//
//                 var arrSelOpt=new Array();
//                 var j=0;
//                 var d=data.SelectTableArray[s+1];
//                 for(var i=0;i<d.length;i++){
//                     strOpt=d[i]['title'];
//                     if (strOpt!='-')
//                         stProductName=stPrev+'-'+strOpt;
//                     else{
//                         arrSelOpt[j++]="-";
//                         continue;
//                     }
//                     $.each(data.ProductsArray,function(k,val){
//                         if ((val.pagetitle+'-').indexOf(stProductName+'-')>=0){
//                             arrSelOpt[j++]=d[i]['title'];
//                             return false;
//                         }
//                     });
//                 }
//                 var array=opt.serieCode.split('-');
//                 var sel=$('#select_0');
//                 $('option',sel).each(function(z){
//                     if(array[0]==this.value){
//                         this.selected=true;
//                         sel.selectedIndex=z;
//                     }
//                 });
//                 sel=$('#select_'+s);
//
//                 $('option',sel).remove();
//                 $.each(arrSelOpt,function(i,v){
//                     sel.append('<option value="'+v+'">'+v+'</option>');
//                     if(array[s]==v){
//                         sel.selectedIndex=i;
//                         $('option',sel)[i].selected=true;
//                     }
//                 });
//                 $.each(array,function(z,val){
//                     for(var g=4;g<opt.sections-1;g++){
//                         sel=$('#select_'+g);
//                         $('option',sel).each(function(z){
//                             if(val==this.value){
//                                 this.selected=true;
//                                 sel.selectedIndex=z;
//                             }
//                         });
//                     }
//                     for(k=1;k<4;k++)
//                         $.each(data.SelectExtraOptionsArray[k],function(z,v){
//                             if(val==v['title'])
//                                 opt.extOptArr[k-1]=val;
//                         });
//                 });
//                 createExtraCode();
//             }
//         }
//
//         function onChangeSelect(){
//             if(opt.active>=0){
//                 if(data.SelectMainPartNum)
//                     for(var i=opt.active+1;i<data.SelectMainPartNum;i++)
//                         CheckSelectInProducts(i);
//
//                 if(data.first==0&&opt.serieCode)
//                     selectOfUrl();
//
//                 PaintDynPart();
//             }
//             var Product,Price='';
//             var iProduct=-1;
//             ProdName=MainSelectResultPlusPrice();
//             $.each(data.ProductsArray,function(i,val){
//                 if(val.pagetitle==ProdName){
//                     Product=val.pagetitle;
//                     iProduct=i;
//                 }
//             });
//
//             if(Product==''){
//                 ProdName=MainSelectResultPlusPrice(true);
//                 $.each(data.ProductsArray,function(i,val){
//                     if(val.pagetitle==ProdName){
//                         Product=val.pagetitle;
//                         iProduct=i;
//                     }
//                 });
//             }
//             pitem=data.ProductsArray[iProduct];
//             expl=pitem.pagetitle.split('-');
//             ConnectionsType=expl[1];
//             var str='<table style="width:100%;font-size:10;text-align:left;"><tr><td>';
//             str+='<img src="/'+pitem.image_item+'"></td><td width="100%" valign="top">';
//             var price=0;
//             var mater=0;
//             var sMater='';
//             $.each(data.SelectTableArray,function(j){
//                 j--;
//                 if(data.SelectTypesArray[j]=="Material"){
//                     sMater=$('#select_'+j).val();
//                     return true;
//                 }
//             });
//             $.each(pitem.fields.split('||'),function(s,val){
//                 if(sMater){
//                     if(mater[0]==sMater)
//                         price=mater[1];
//                 }else{
//                     price=mater[1];
//                 }
//             });
//             arrProdName=SelectResultArray();
//             var iPresTempNum=-1;
//             $.each(data.PresTempArray,function(i,val){
//                 if(val[1]==opt.serie){
//                     BNotFound=false;
//                     var arr=data.PresTempArray[i][0].split('-');
//                     for(var j=0;j<arr.length;j++){
//                         BContinue=false;
//                         for(var k=0;k<arrProdName.length;k++)
//                             if(arrProdName[k]==arr[j]){
//                                 BContinue=true;
//                                 break;
//                             }
//                         if(BContinue)
//                             continue;
//
//                         BNotFound=true;
//                         break;
//                     }
//
//                     if(!BNotFound)
//                         if(iPresTempNum==-1||data.PresTempArray[iPresTempNum][1].length<data.PresTempArray[i][1].length)
//                             iPresTempNum=i;
//                 }
//             });
//             if(iPresTempNum!=-1){
//                 str+='Р Р°Р±. РґР°РІР»РµРЅРёРµ:<BR><div style="text-align:right"><b> РґРѕ '+data.PresTempArray[iPresTempNum][2]+'Р±Р°СЂ</b></div>'
//                     +'Р Р°Р±. С‚РµРјРїРµСЂР°С‚СѓСЂР°:<BR><div style="text-align:right"><b> РѕС‚ '+data.PresTempArray[iPresTempNum][3]+'В°C<BR> '
//                     +'РґРѕ +'+data.PresTempArray[iPresTempNum][4]+'В°C</b></div>'+
//                     +'<table style="width:100%;text-align:left">';
//                 if(pitem.cv!='')
//                     str+='<tr><td>Cv:</td><td style="text-align:right"><b>'+pitem.cv+'</b></td></tr>';
//                 if(pitem.dy!='')
//                     str+='<tr><td>Р”РЈ:</td><td style="text-align:right"><b>'+pitem.dy+'РјРј</b></td></tr>';
//                 str+='</table>';
//             }
//             str+='</td></tr></table>';
//             str+='<b>'+SelectResult()+'</b>';
//             if (data.showPrice)
//                 str+='<br>Р¦РµРЅР°:$'+price;
//
//             $("#ProductParametrs").html(str);
//         }
//
//         function widthCircle(){
//             for(var i=0;i<opt.sections;i++){
//                 var str=$('#select_'+i+' option').val();
//                 if(str)
//                     if(str.length>3)
//                         $('#image_'+i).attr('width',90);
//             }
//         }
//
//         function onMouseOverSelect(){
//             $('#image_'+opt.active).attr('src',ipath+'circleover.jpg');
//             var sel=$('#select_'+opt.active);
//             if(sel)
//                 sel.css('background','#ed8222');
//
//             $('#SelectName'+opt.active).css('background','#eead72');
//             $("#SelectName"+opt.active+"Left").css('background','url('+ipath+'NameLeft.jpg)');
//             $("#SelectName"+opt.active+"Right").css('background','url('+ipath+'NameRight.jpg)');
//
//             if(opt.early!=opt.active)
//                 onMouseOutSelect();
//
//             opt.early=opt.active;
//             PaintDynPart();
//         }
//
//         function onMouseOutSelect(){
//             $('#select_'+opt.early).css('background','#00ADEF');
//             $('#image_'+opt.early).attr('src',ipath+'circle.jpg');
//             $('#SelectName'+opt.early).removeAttr('style');
//             $("#SelectName"+opt.early+"Left").removeAttr('style');
//             $("#SelectName"+opt.early+"Right").removeAttr('style');
//         }
//     }
// })(jQuery);
//
// function WindowResize(){
//     if(getClientWidth()<=1024)MainWindowStyleMarginleft=0;elseMainWindowStyleMarginleft=(getClientWidth()-1024)/2;BIG.style.marginLeft=MainWindowStyleMarginleft;
// }
// function getClientWidth(){ return document.compatMode=='CSS1Compat'&&!window.opera?document.documentElement.clientWidth:document.body.clientWidth;}
// function flashVersion(){
//     var ua=navigator.userAgent.toLowerCase();
//     var isIE=(ua.indexOf("msie")!=-1&&ua.indexOf("opera")==-1&&ua.indexOf("webtv")==-1);
//     var version=0;
//     var lastVersion=10;
//     var i;
//     if(isIE){
//         try{
//             for(i=3;i<=lastVersion;i++)
//                 if(eval('new ActiveXObject("ShockwaveFlash.ShockwaveFlash.'+i+'")'))
//                     version=i;
//         }catch(e){}
//     }else{
//         for(i=0;i<navigator.plugins.length;i++)
//             if(navigator.plugins[i].name.indexOf('Flash')>-1)
//                 version=(parseInt(navigator.plugins[i].description.charAt(16))>version)?parseInt(navigator.plugins[i].description.charAt(16)):version;
//     }
//     return version;
// }
// $(() => {
//     new Components.FilterManager($('main'));
// })
document.addEventListener("DOMContentLoaded", () => {
});
function createElement(tagName, className, textContent, container) {
    let elem = document.createElement(tagName);
    if (className)
        elem.className = className;
    if (textContent)
        elem.textContent = textContent;
    if (textContent)
        elem.textContent = textContent;
    if (container)
        container.append(elem);
    return elem;
}
function showForm(url = '', method = '', title = '', from, countProductCode) {
    let form = createElement('form', null, null, null);
    // form.action = action;
    form.method = method;
    switch (from) {
        case 'offer':
            // createInputsProducts(countProductCode, form);
            break;
        case 'letter':
            createInputsMessage(form);
            break;
    }
    createInputsPhoneAndEmail(form);
    let btn = createElement('div', 'btn', 'Отправить', form);
    let wind = Common.Window.create(title, form);
    btn.addEventListener('click', () => {
        Common.Request.sendFormXHRnoAction(form, url, () => { console.log('ok'); wind.close(); });
        return false;
    });
}
function createInputsMessage(form) {
    let textMessageWrap = createElement('div', 'text-wrap', null, form);
    let textMessage = createElement('textarea', null, null, textMessageWrap);
    textMessage.placeholder = 'Сообщение';
    textMessage.name = 'message';
}
function createInputsPhoneAndEmail(form) {
    let inputContactsWrap = createElement('div', 'input-wrap contacts', null, form);
    let inputPhone = createElement('input', null, null, inputContactsWrap);
    inputPhone.placeholder = 'Телефон';
    inputPhone.name = 'phone';
    let inputEmail = createElement('input', null, null, inputContactsWrap);
    inputEmail.placeholder = 'E-mail';
    inputEmail.name = 'email';
}
function showBurger(open) {
    if (!open) {
        document.querySelector('.burger-space').classList.remove('hide');
        document.querySelector('body').style.overflow = 'hidden';
        return;
    }
    document.querySelector('.burger-space').classList.add('hide');
    document.querySelector('body').style.overflow = 'revert';
}
var Common;
(function (Common) {
    /**
     * Менеджер работы с окнами
     */
    class Window {
        static windows = {};
        static iter = 0;
        static windowsHTML = null;
        static content = null;
        // public static showMessage(text: string): Instance {
        //     return Window.create(null, text);
        // }
        static create(title = null, content) {
            document.querySelector('body').style.overflow = 'hidden';
            if (!Window.windowsHTML) {
                Window.windowsHTML = document.createElement('div');
                this.windowsHTML.className = 'windows';
                document.querySelector('main').append(Window.windowsHTML);
            }
            let id = ++Window.iter;
            let wind = new Instance(id, title, content);
            Window.windows[id] = wind;
            return wind;
        }
        static remove(id) {
            document.querySelector('body').style.overflow = 'revert';
            delete Window.windows[id];
        }
    }
    Common.Window = Window;
    /**
     * Работа с окнами
     */
    class Instance {
        id;
        instance;
        constructor(id, title, content) {
            this.id = id;
            this.instance = document.createElement('div');
            let space = document.createElement('div');
            let window = document.createElement('div');
            let header = document.createElement('div');
            let titleHTML = document.createElement('div');
            let closeHTML = document.createElement('div');
            let container = document.createElement('div');
            this.instance.className = 'instance';
            space.className = 'space';
            window.className = 'window';
            titleHTML.className = 'title';
            closeHTML.className = 'close';
            (title !== null) ? header.className = 'head-popup' : header.className = 'head_null_title';
            (title !== null) ? container.className = 'container-popup' : container.className = 'container_null_title';
            this.instance.append(space);
            this.instance.append(window);
            window.append(header);
            if (title !== null) {
                header.append(titleHTML);
                titleHTML.append(title);
            }
            header.append(closeHTML);
            window.append(container);
            container.append(content);
            space.addEventListener('click', this.close.bind(this));
            closeHTML.addEventListener('click', this.close.bind(this));
            Window.windowsHTML.append(this.instance);
        }
        close() {
            this.instance.remove();
            this.remove();
        }
        remove() {
            Window.remove(this.id);
        }
    }
})(Common || (Common = {}));
var Common;
(function (Common) {
    class Request {
        static sendXHR(formData, url, func) {
            let xhr = new XMLHttpRequest();
            xhr.open('POST', url);
            // xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
            xhr.send(formData);
            xhr.onload = () => {
                if (xhr.status != 200) {
                    alert('Ошибка' + xhr.status);
                    return;
                }
                func();
            };
        }
        static send(formData, url, func) {
            fetch(url, {
                method: 'POST',
                body: formData
            })
                .then(async (response) => {
                let json = await response.json();
                Request.response(json, func);
            })
                .catch(response => { console.log('request failed: ' + url); console.log(response); });
        }
        // public static sendJson(url: string, jsonData: sendDataJson, func?: Function): void {
        //     fetch(url, {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json;charset=utf-8'
        //         },
        //         body: JSON.stringify(jsonData)
        //     })
        //         .then(async response => {
        //             let json = await response.json();
        //             Request.response(json, func);
        //         })
        //         .catch(response => { console.log('request failed: ' + url); console.log(response); });
        //
        //
        //     // let xhr = new XMLHttpRequest();
        //     // xhr.open('POST', url);
        //     // xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
        //     // xhr.send(JSON.stringify(jsonData));
        //     // xhr.onload =  ()=> {
        //     //     if (xhr.status != 200) {
        //     //         alert('Ошибка' + xhr.status);
        //     //         return;
        //     //     }
        //     // }
        // }
        static response(response, func) {
            switch (response.state) {
                case 'ok':
                    if (func)
                        func(response.body);
                    break;
                case 'error':
                    alert(response.body.message);
                    break;
            }
        }
        // public static send(formData: FormData, url: string, func?: Function): void {
        //     $.ajax({
        //         url				: url,
        //         method			: 'POST',
        //         dataType		: 'json',
        //         data 			: formData,
        //         contentType		: false,
        //         processData		: false,
        //         cache			: false,
        //         // beforeSend: function() { if (funcBeforeSend) funcBeforeSend(); },
        //         // complete: function() { if (funcComplete) funcComplete(); },
        //         success			: (response) => { if (func) func() },
        //         error			: (response) => { console.log('request failed: ' + url); console.log(response); }
        //     });
        // }
        // public static send(formData: FormData, url: string, func?: Function): void {
        //     let xhr = new XMLHttpRequest();
        //     xhr.open('POST', url);
        //     xhr.send(formData);
        //     xhr.onload = () => func();
        //     xhr.onerror = () => alert('Ошибка соединения');
        // }
        static sendFormXHR(form, func) {
            let url = form.getAttribute('action');
            let formData = new FormData(form);
            Request.sendXHR(formData, url, func);
        }
        static sendFormXHRnoAction(form, url, func) {
            let formData = new FormData(form);
            Request.sendXHR(formData, url, func);
        }
        static sendForm(form, func) {
            let url = form.getAttribute('action');
            let formData = new FormData(form);
            Request.send(formData, url, func);
        }
        static sendFormNoAction(form, url, func) {
            let formData = new FormData(form);
            Request.send(formData, url, func);
        }
        static sendData(data, url, func) {
            let formData = new FormData();
            for (const key in data) {
                formData.append(key, data[key].toString());
            }
            Request.send(formData, url, func);
        }
        static sendJQ(url, func) {
            $.post(url, function (data) {
                // $( ".result" ).html( data );
                console.log(data);
            }).done(function () {
                console.log("second success");
            })
                .fail(function () {
                console.log("error");
            })
                .always(function () {
                console.log("finished");
            });
        }
    }
    Common.Request = Request;
})(Common || (Common = {}));
var Components;
(function (Components) {
    class URI {
        static url;
        static sendData;
        static init( /*sendData: sendData*/) {
            this.url = new URL(window.location.href);
        }
        // public static addHistory(): void {
        //     history.pushState({}, '', this.url.href);
        // }
        static getParams() {
            let out = {};
            for (const [key, value] of this.url.searchParams.entries()) {
                out[key] = value;
            }
            return out;
        }
        static checkState() {
            console.log('params check state: ', this.url.searchParams);
            return true;
            // return this.url.searchParams['size'];
        }
        static toString(newFilterData) {
            const uri = 'uri-test';
            this.update(uri);
            return uri;
        }
        static update(uri) {
            this.url.href = uri;
        }
    }
    Components.URI = URI;
})(Components || (Components = {}));
var Components;
(function (Components) {
    class Filter {
        typeEndFirst;
        typeEndSecond;
        sizeRadioFirst;
        sizeRadioSecond;
        analog;
        pathData = '/assets/base/snippets/api/api.php?task=getProducts';
        // pathData                            : string = '/pdata.php';
        dataOptions;
        sendData;
        callBeforeSend;
        callAfterSend;
        $form;
        $mrkBtn;
        $rvdBtn;
        $analogBtn;
        $oxygenBtn;
        $notOxygenBtn;
        $sizeBtn;
        $cableBtn;
        constructor(callBeforeSend, callAfterSend, dataOptions) {
            this.analog = true;
            this.callBeforeSend = callBeforeSend;
            this.callAfterSend = callAfterSend;
            this.dataOptions = dataOptions;
            this.createElements();
            // новый код
            Components.URI.init();
            let dataURI = Components.URI.getParams();
            let data = this.prepareFilterData(dataURI);
            // window.onpopstate = (event: any) => { console.log('popStateEvent(func)', event); }
            // разделила везде препар сенд дата и сенд дата, надо ли
            // вставлять ли разные данные при вызове сенд дата?
            // до сюда
            this.typeEndFirst = new Components.Select($('.select[name="zakontsovka-1"]'));
            this.typeEndSecond = new Components.Select($('.select[name="zakontsovka-2"]'));
            this.restructureSelects();
            this.setAnalog(data.analog);
            this.typeEndFirst.setValue(data.type1_end.toUpperCase(), false);
            // проверить аналог, добавить в сенд дата аналог
            this.sizeRadioFirst = new Components.GroupRadio($('#size1'), this.dataOptions.types[this.typeEndFirst.getValue()].sizes, { name: 'size1' });
            this.sizeRadioSecond = new Components.GroupRadio($('#size2'), this.dataOptions.types[this.typeEndSecond.getValue()].sizes, { name: 'size2' });
            this.typeEndSecond.addDisabled();
            this.sizeRadioSecond.addDisabled();
            if (this.analog) {
                this.useAnalog();
            }
            else {
                this.typeEndSecond.setValue(data.type2_end.toUpperCase(), false);
                this.$analogBtn.prop('checked', false);
                this.typeEndSecond.removeDisabled();
                this.sizeRadioSecond.removeDisabled();
            }
            // TODO: переписать условие на null
            this.$sizeBtn.val(data.length);
            this.$cableBtn.prop('checked', data.cable);
            this.prepareSendData();
            this.send();
            this.typeEndFirst.on('change', () => {
                this.sizeRadioFirst.restructure(this.dataOptions.types[this.typeEndFirst.getValue()].sizes);
                if (this.analog) {
                    this.useAnalog();
                }
                this.prepareSendData();
                this.send();
            });
            this.typeEndSecond.on('change', () => {
                this.sizeRadioSecond.restructure(this.dataOptions.types[this.typeEndSecond.getValue()].sizes);
                this.prepareSendData();
                this.send();
            });
            this.$analogBtn.on('change', (e) => {
                this.setAnalog(e.target.checked);
                if (this.analog) {
                    this.useAnalog();
                    this.prepareSendData();
                    this.send();
                    this.typeEndSecond.addDisabled();
                    this.sizeRadioSecond.addDisabled();
                }
                else {
                    this.typeEndSecond.removeDisabled();
                    this.sizeRadioSecond.removeDisabled();
                }
            });
            this.sizeRadioFirst.on('change', () => {
                if (this.analog) {
                    this.useAnalogForGroupRadio();
                }
                this.prepareSendData();
                this.send();
            });
            this.sizeRadioSecond.on('change', () => { this.prepareSendData(); this.send(); });
            this.$mrkBtn.on('change', () => { this.prepareSendData(); this.send(); });
            this.$rvdBtn.on('change', () => { this.prepareSendData(); this.send(); });
            this.$oxygenBtn.on('change', () => { this.prepareSendData(); this.send(); });
            this.$notOxygenBtn.on('change', () => { this.prepareSendData(); this.send(); });
            this.$sizeBtn.on('change', () => { this.prepareSendData(); this.send(); });
            this.$cableBtn.on('change', () => { this.prepareSendData(); this.send(); });
        }
        restructureSelects() {
            let data = {};
            for (const i in this.dataOptions.types) {
                data[i] = `${i} - ${this.dataOptions.types[i].description}`;
            }
            this.typeEndFirst.restructure(data);
            this.typeEndSecond.restructure(data);
        }
        setAnalog(state) {
            this.analog = state;
        }
        useAnalog() {
            let valueEndFirst = this.typeEndFirst.getValue();
            this.typeEndSecond.setValue(valueEndFirst, false);
            this.useAnalogForGroupRadio();
        }
        useAnalogForGroupRadio() {
            this.sizeRadioSecond.restructure(this.dataOptions.types[this.typeEndSecond.getValue()].sizes);
            let valueSizeRadioFirst = this.sizeRadioFirst.getValue();
            this.sizeRadioSecond.setValue(valueSizeRadioFirst, false);
        }
        getFilterData() {
            let type1_size = [this.sizeRadioFirst.getValue()];
            if (type1_size[0] === null)
                type1_size = this.sizeRadioFirst.getValuesFromData();
            let type2_size = [this.sizeRadioSecond.getValue()];
            if (type2_size[0] === null)
                type2_size = this.sizeRadioSecond.getValuesFromData();
            return {
                cable: this.$cableBtn.is(':checked') ? this.dataOptions.cable_value : null,
                length: this.$sizeBtn.val(),
                type1_size: type1_size,
                type2_size: type2_size,
                oxygen_compatibility: this.$oxygenBtn.is(':checked') ? this.dataOptions.oxygen_compatibility_value : null,
                mrk_show: this.$mrkBtn.is(':checked'),
                rvd_show: this.$rvdBtn.is(':checked'),
                type1_end: this.typeEndFirst.getValue(),
                type2_end: this.typeEndSecond.getValue(),
                analog: this.analog
            };
        }
        send() {
            $.ajax({
                type: 'POST',
                url: this.pathData,
                data: JSON.stringify(this.sendData),
                dataType: 'json',
                success: (dataProducts) => {
                    console.log(this.sendData);
                    this.callAfterSend(dataProducts);
                    console.log('SUCCESS:');
                },
                error: (jqXHR, textStatus, errorThrown) => {
                    console.log('ERROR: ' + textStatus + ", " + errorThrown);
                    console.log(jqXHR);
                }
            });
        }
        prepareSendData() {
            this.callBeforeSend();
            console.log('edit sendData from URI');
            this.sendData = this.getFilterData();
        }
        createElements() {
            this.$form = $('<form/>', { class: 'prod-filter hide' });
            $('.filter-head').after(this.$form);
            this.createButtons();
            const $switcher = this.createSwitcher();
            const $wrap = $('<div/>', { class: 'prod-filter-wrap' });
            $wrap.append(this.createSelectEndGroupRadio('первой', 'zakontsovka-1', 'size1', false), this.createSelectEndGroupRadio('второй', 'zakontsovka-2', 'size2', true));
            this.$form.append($switcher, $wrap, this.createOxygenLengthCable());
        }
        createSwitcher() {
            return $('<div/>', { class: 'prod-filter-switcher' }).append($('<label/>', { class: 'prod-filter-checkbox' }).append(this.$mrkBtn, $('<label/>', { for: 'mrk', text: 'Металлорукав' })), $('<label/>', { class: 'prod-filter-checkbox' }).append(this.$rvdBtn, $('<label/>', { for: 'rvd', text: 'Рукав высокого давления' })));
        }
        createSelectEndGroupRadio(text, selectName, radioId, analog) {
            const $elem = $('<div/>', { class: 'prod-filter-wrap-item' }).append($('<div/>').append($('<div/>', { class: 'prod-filter-wrap-item-head' }).append($('<div/>', { text: `Тип ${text} законцовки` })), $('<select/>', { class: 'select hide', name: selectName })), $('<div/>', { class: 'prod-filter-radio' }).append($('<div/>', { text: `Размер ${text} законцовки` }), $('<div/>', { class: 'panel', id: radioId }), $('<div/>', { class: 'forload hide', text: `Выберите тип ${text} законцовки` })));
            if (analog) {
                const $analog = $('<div/>', { class: 'filter-analog' }).append($('<label/>', { class: 'prod-filter-checkbox' }).append(this.$analogBtn, $('<label/>', { for: 'analog', text: 'Аналогично первой' })));
                $elem.find('.prod-filter-wrap-item-head').append($analog);
            }
            return $elem;
        }
        createOxygenLengthCable() {
            return $('<div/>', { class: 'prod-filter-buttons' }).append($('<div/>', { class: 'prod-filter-radio' }).append($('<div/>', { text: 'Газовая среда' }), $('<div/>').append($('<label/>').append(this.$oxygenBtn, $('<span/>', { text: 'Кислород' })), $('<label/>').append(this.$notOxygenBtn, $('<span/>', { text: 'Не кислород' })))), $('<div/>', { class: 'prod-filter-length' }).append($('<div/>', { text: 'Длина (L)' }), $('<div/>').append($('<label/>').append(this.$sizeBtn, $('<span/>', { text: 'мм' })), $('<label/>', { class: 'prod-filter-checkbox' }).append(this.$cableBtn, $('<label/>', { for: 'cable', text: 'Трос' })))));
        }
        createButtons() {
            this.$mrkBtn = $('<input/>', { id: 'mrk', type: 'checkbox', name: 'mrk' })
                .prop('checked', true);
            this.$rvdBtn = $('<input/>', { id: 'rvd', type: 'checkbox', name: 'rvd' })
                .prop('checked', true);
            this.$analogBtn = $('<input/>', { id: 'analog', type: 'checkbox', name: 'analog' })
                .prop('checked', true);
            this.$oxygenBtn = $('<input/>', { id: 'oxygen', type: 'radio', name: 'oxygen', value: 'on' }).prop('checked', true);
            this.$notOxygenBtn = $('<input/>', { id: 'notOxygen', type: 'radio', name: 'oxygen', value: 'off' });
            this.$sizeBtn = $('<input/>', { id: 'size', type: 'number', name: 'length', min: '50', max: '100000', step: 'any', value: '1000' });
            this.$cableBtn = $('<input/>', { id: 'cable', type: 'checkbox', name: 'cable' });
        }
        getSymbols() {
            return {
                symbolLeft: this.typeEndFirst.getValue(),
                textLeft: this.typeEndFirst.getText().split(' - ')[1],
                symbolRight: this.typeEndSecond.getValue(),
                textRight: this.typeEndSecond.getText().split(' - ')[1],
            };
        }
        showFilter() {
            this.$form.removeClass('hide');
        }
        check(selector) {
            return $(selector).is(':checked');
        }
        // новый код
        prepareFilterData(data) {
            let type1_end = data.type1_end ?? 'A';
            let type2_end = data.type2_end ?? 'A';
            return {
                // TODO: переписать условие на null
                cable: data.cable ?? null,
                length: data.length ?? '',
                type1_size: [data.type1_size] ?? Object.keys(this.dataOptions.types[type1_end].sizes),
                type2_size: [data.type2_size] ?? Object.keys(this.dataOptions.types[type2_end].sizes),
                oxygen_compatibility: data.oxygen_compatibility ?? null,
                mrk_show: true,
                rvd_show: true,
                type1_end: type1_end,
                type2_end: type2_end,
                analog: (data.analog !== 'null')
            };
        }
        popStateEvent() {
            this.prepareSendData();
            this.send();
            const uri = Components.URI.toString(this.sendData);
            // URI.update();
            history.pushState({}, '', uri);
        }
    }
    Components.Filter = Filter;
})(Components || (Components = {}));
var Components;
(function (Components) {
    class FilterManager {
        dataOptions;
        dataProducts;
        filter;
        notFound;
        productsMrk;
        productsRvd;
        // private loaderFilter                : Loader;
        pathData = '/assets/base/snippets/api/api.php?task=filterOptions';
        // private pathData                    : string = '/data.php';
        loaderProducts;
        $wrapProducts;
        constructor($container) {
            // TODO: переписать это
            $('.filter-head').addClass('hide');
            $('.prod-text').addClass('hide');
            $('.carousel').addClass('hide');
            $('.carousel-head').addClass('hide');
            this.loaderProducts = new Components.Loader($container, 'loader-wrap loader-table', false);
            this.loaderProducts.show();
            // this.loaderFilter               = new Loader($container, 'loader-wrap loader-table');
            this.getFilterOption().then((data) => {
                this.init($container, data);
                // this.loaderFilter.hide();
            });
        }
        init($container, data) {
            this.dataOptions = data;
            this.$wrapProducts = $('<div/>', { class: 'prod-result-wrap' });
            // this.loaderProducts             = new Loader($container, 'loader-wrap loader-table', false);
            this.filter = new Components.Filter(() => {
                this.$wrapProducts.addClass('hide');
                this.loaderProducts.show();
            }, (dataProducts) => {
                this.$wrapProducts.removeClass('hide');
                this.loaderProducts.hide();
                // TODO: переписать это
                $('.filter-head').removeClass('hide');
                $('.prod-text').removeClass('hide');
                $('.carousel').removeClass('hide');
                $('.carousel-head').removeClass('hide');
                this.filter.showFilter();
                this.redraw(dataProducts);
            }, this.dataOptions);
            this.productsMrk = new Components.Products(this.$wrapProducts, 'Металлорукав', 'https://fluid-line.ru/assets/snippets/product/rkv/img/mr_main.png');
            this.productsRvd = new Components.Products(this.$wrapProducts, 'Рукав высокого давления', 'https://fluid-line.ru/assets/snippets/product/rkv/img/rkv_main.png');
            this.notFound = new Components.NotFound(this.$wrapProducts);
            $container.append(this.$wrapProducts);
        }
        redraw(dataProducts) {
            dataProducts['mrk'].products.length || dataProducts['rkv'].products.length ? this.showProducts(dataProducts) : this.hideProducts();
        }
        showProducts(dataProducts) {
            this.notFound.hide();
            this.productsMrk.hideUndefined();
            this.productsRvd.hideUndefined();
            this.productsMrk.hide();
            this.productsRvd.hide();
            const dataSymbols = this.filter.getSymbols();
            console.log(dataProducts);
            if (dataProducts['mrk'].products.length) {
                console.log('mrk');
                this.productsMrk.redraw(dataProducts['mrk'].products, dataSymbols);
                this.productsMrk.show();
            }
            if (dataProducts['rkv'].products.length) {
                console.log('rvd');
                this.productsRvd.redraw(dataProducts['rkv'].products, dataSymbols);
                this.productsRvd.show();
            }
            if (this.filter.check('#mrk') && !dataProducts['mrk'].products.length) {
                console.log('mrk here');
                this.productsMrk.showUndefined();
            }
            if (this.filter.check('#rvd') && !dataProducts['rkv'].products.length) {
                console.log('rvd here');
                this.productsRvd.showUndefined();
            }
        }
        hideProducts() {
            this.productsMrk.hideUndefined();
            this.productsRvd.hideUndefined();
            this.productsMrk.hide();
            this.productsRvd.hide();
            this.notFound.show();
        }
        async getFilterOption() {
            let response = await fetch(this.pathData);
            return await response.json();
        }
    }
    Components.FilterManager = FilterManager;
})(Components || (Components = {}));
var Components;
(function (Components) {
    class GroupRadio {
        options;
        data;
        disabled;
        $container;
        $wrap;
        constructor($container, data, options) {
            this.$container = $container;
            this.options = options;
            this.$wrap = $('<div/>', { class: 'component GroupRadio' });
            this.restructure(data);
            this.$container.append(this.$wrap);
            this.$wrap.on('click', 'input', () => { if (this.disabled)
                return false; });
        }
        restructure(data) {
            this.data = data;
            this.$wrap.empty();
            this.$wrap.append(this.getInputs());
        }
        getInputs() {
            let $inputs = [];
            for (const key in this.data) {
                $inputs.push(this.getInput(key, this.data[key]));
            }
            return $inputs;
        }
        getInput(value, text) {
            let $label = $('<label/>');
            let $input = $('<input/>', { type: 'radio', value: value, name: this.options.name });
            $label.append($input, $('<span/>').text(text));
            return $label;
        }
        getValue() {
            let val = this.$wrap.find('input:checked').val();
            return (val !== undefined) ? val : null;
        }
        setValue(value, event = true) {
            if (!event) {
                this.$wrap.find(`[value=${value}]`).attr('checked', 'checked');
                return;
            }
            this.$wrap.find(`[value=${value}]`).trigger('click');
        }
        getValuesFromData() {
            let out = [];
            for (const key in this.data) {
                out.push(key);
            }
            return out;
        }
        addDisabled() {
            this.disabled = true;
            this.$wrap.addClass('disabled');
        }
        removeDisabled() {
            this.disabled = false;
            this.$wrap.removeClass('disabled');
        }
        on(event, func, data = {}) {
            switch (event) {
                case 'change':
                    this.$wrap.on('change', 'input', (event) => {
                        func(event.target, data);
                    });
                    break;
                default:
                    console.warn('Event not found');
                    break;
            }
        }
    }
    Components.GroupRadio = GroupRadio;
})(Components || (Components = {}));
var Components;
(function (Components) {
    class Loader {
        $loaderFilter;
        constructor($loaderWrap, className, show = true) {
            this.$loaderFilter = $('<div/>', { class: className }).append($('<div/>', { class: 'loader' }), $('<div/>', { class: 'loader-text', text: 'Загрузка...' }));
            if (!show)
                this.hide();
            $loaderWrap.append(this.$loaderFilter);
        }
        show() {
            // console.log('s')
            this.$loaderFilter.removeClass('hide');
        }
        hide() {
            // console.log('h')
            this.$loaderFilter.addClass('hide');
        }
    }
    Components.Loader = Loader;
})(Components || (Components = {}));
var Components;
(function (Components) {
    class NotFound {
        notFound;
        constructor($wrap) {
            this.notFound = $('<div/>', { class: 'prod-not-found hide', text: 'ТОВАРОВ ПО ДАННОМУ ЗАПРОСУ НЕ НАЙДЕНО' });
            $wrap.append(this.notFound);
        }
        show() {
            // проверка
            this.notFound.removeClass('hide');
        }
        hide() {
            // проверка
            this.notFound.addClass('hide');
        }
    }
    Components.NotFound = NotFound;
})(Components || (Components = {}));
var Components;
(function (Components) {
    class Products {
        path = 'https://fluid-line.ru/assets/snippets/product/rkv/img/';
        $wrap;
        $head;
        $imgLeftCut;
        $imgLeftBig;
        $imgRightCut;
        $imgRightBig;
        $imgLeft;
        $imgRight;
        $symbolLeft;
        $textLeft;
        $symbolRight;
        $textRight;
        $headList;
        $prodList;
        $undefined;
        constructor($container, title, hoseImage) {
            this.$wrap = $('<div/>', { class: 'prod-result' });
            this.$undefined = $('<div/>', { class: 'prod-not-found hide', text: title + ': не найдено' });
            $container.append(this.$undefined);
            this.initImage($container, title, hoseImage);
            this.initTables();
        }
        initImage($container, title, hoseImage) {
            this.$head = $('<div/>', { class: 'prod-result-head', text: title });
            this.$imgLeftCut = $('<img/>');
            this.$imgLeftBig = $('<img/>');
            this.$imgRightCut = $('<img/>');
            this.$imgRightBig = $('<img/>');
            this.$imgLeft = $('<img/>', { class: 'zk' });
            this.$imgRight = $('<img/>', { class: 'zk' });
            this.$symbolLeft = $('<span/>', { class: 'big_txt big_txt_left' });
            this.$textLeft = $('<span/>', { class: 'large_text large_text_left' });
            this.$symbolRight = $('<span/>', { class: 'big_txt big_txt_right' });
            this.$textRight = $('<span/>', { class: 'large_text large_text_right' });
            $container.append(this.$wrap.append(this.$head, $('<div/>', { class: 'prod-images' }).append($('<div/>', { class: 'topw' }).append($('<div/>', { class: 'platform platform-left' }).append($('<div/>', { class: 'cutimg' }).append(this.$imgLeftCut), $('<div/>', { class: 'bigimg' }).append(this.$imgLeftBig)), $('<div/>', { class: 'cv_cns c' }).append($('<div/>', { class: 'cccc' }).append(this.$imgLeft, $('<img/>', { class: 'imgbc', src: hoseImage }), this.$imgRight)), $('<div/>', { class: 'platform platform-right' }).append($('<div/>', { class: 'cutimg' }).append(this.$imgRightCut), $('<div/>', { class: 'bigimg' }).append(this.$imgRightBig))), $('<div/>', { class: 'topw2' }).append($('<div/>').append(this.$symbolLeft, this.$textLeft), $('<div/>').append(this.$symbolRight, this.$textRight)))));
        }
        initTables() {
            this.$headList = $('<tbody/>', { class: 'product-list head prettyPagetitle' });
            this.$prodList = $('<tbody/>', { class: 'product-list body prodList' });
            this.$wrap.append($('<div/>', { class: 'prod-table' }).append($('<table/>', { class: 'table' }).append($('<thead/>').append($('<tr/>', { class: 'table-head' }).append($('<th/>', { text: 'Кодировка' }))), this.$headList), $('<div/>').append($('<table/>', { class: 'table' }).append($('<thead/>').append($('<tr/>', { class: 'table-head' }).append($('<th/>', { text: 'Количество оплеток' }), $('<th/>', { text: 'Длина L' }), $('<th/>', { text: 'Давление' }), $('<th/>', { text: 'ДУ' }), $('<th/>', { colspan: 2 }).append($('<div/>', { text: 'Подсоединение' }), $('<div/>', { class: 'table-colspan' }).append($('<div/>', { text: '1' }), $('<div/>', { text: '2' }))), $('<th/>', { text: 'Спиральная защитная' }), $('<th/>', { text: 'Совместимость с кислородом' }), $('<th/>', { text: 'Трос' }), $('<th/>', { text: 'Тепло-изоляция' }), $('<th/>', { text: 'Цена' }))), this.$prodList))));
        }
        redraw(data, dataSymbols) {
            this.redrawTable(data);
            this.redrawImage(dataSymbols);
        }
        redrawImage(data) {
            this.$imgLeftCut.attr('src', `${this.path}${data.symbolLeft}_left_cut.png`);
            this.$imgLeftBig.attr('src', `${this.path}big/${data.symbolLeft}_left_cut.png`);
            this.$imgRightCut.attr('src', `${this.path}${data.symbolRight}_right_cut.png`);
            this.$imgRightBig.attr('src', `${this.path}big/${data.symbolRight}_right_cut.png`);
            this.$imgLeft.attr('src', `${this.path}${data.symbolLeft}_left.png`);
            this.$imgRight.attr('src', `${this.path}${data.symbolRight}_right.png`);
            this.$symbolLeft.text(data.symbolLeft);
            this.$textLeft.text(data.textLeft);
            this.$symbolRight.text(data.symbolRight);
            this.$textRight.text(data.textRight);
            // const $wrapImg: JQuery = $('<div/>', { class: 'prod-images' });
            // this.$wrap1.append($wrapImg);
            //
            // const selectLeft: string = this.select1.$sourceSelect.find('option:checked').attr('value');
            // const textLeft: string = this.select1.$sourceSelect.find('option:checked').attr('text');
            // const selectRight: string = this.select2.$sourceSelect.find('option:checked').attr('value') ? this.select2.$sourceSelect.find('option:checked').attr('value') : '';
            // const textRight: string = this.select2.$sourceSelect.find('option:checked').attr('value') ? this.select2.$sourceSelect.find('option:checked').attr('text') : '';
            // const $platformLeft: JQuery<HTMLElement> = $wrapImg.find('.platform-left');
            // const $platformRight: JQuery<HTMLElement> = $wrapImg.find('.platform-right');
            //
            // const path = 'https://fluid-line.ru/assets/snippets/product/rkv/img/';
            //
            // const cutimgLeft: string = path + selectLeft + '_left_cut.png';
            // const bigimgLeft: string = path + 'big/' + selectLeft + '_left_cut.png';
            // const cutimgRight: string = path + selectRight + '_right_cut.png';
            // const bigimgRight: string = path + 'big/' + selectRight + '_right_cut.png';
            // const imgCenter = $wrapImg.find('.cccc');
            //
            // $platformLeft.find('.cutimg > img').attr('src',cutimgLeft);
            // $platformLeft.find('.bigimg > img').attr('src',bigimgLeft);
            // $platformRight.find('.cutimg > img').attr('src',cutimgRight);
            // $platformRight.find('.bigimg > img').attr('src',bigimgRight);
            //
            // imgCenter.find('> img:nth-child(1)').attr('src',path + selectLeft + '_left.png');
            // imgCenter.find('> img:nth-child(3)').attr('src',path + selectRight + '_right.png');
            //
            //
            // console.log(selectLeft, textLeft, selectRight, textRight);
            // $('.big_txt_left').text(selectLeft);
            // $('.large_text_left').text(textLeft);
            // $('.big_txt_right').text(selectRight);
            // $('.large_text_right').text(textRight);
        }
        redrawTable(data) {
            this.$headList.empty();
            this.$prodList.empty();
            for (const key in data) {
                const prod = data[key];
                this.$headList.append($('<tr/>').append($('<td/>').text(prod.prettyPagetitle)));
                this.$prodList.append($('<tr/>').append($('<td/>').text(prod.numberOfBraids), $('<td/>').text(prod._length), $('<td/>').text(prod.max_pressure), $('<td/>').text(prod.dn), $('<td/>').text(prod.ending1), $('<td/>').text(prod.ending2), $('<td/>').text(prod.protectiveSpiral), $('<td/>').text(prod.os_compatibility), $('<td/>').text(prod.cable), $('<td/>').text(prod.thermalInsulation), $('<td/>').text(prod.price)));
            }
        }
        hide() {
            this.$wrap.addClass('hide');
        }
        show() {
            this.$wrap.removeClass('hide');
        }
        hideUndefined() {
            this.$undefined.addClass('hide');
        }
        showUndefined() {
            this.$undefined.removeClass('hide');
        }
    }
    Components.Products = Products;
})(Components || (Components = {}));
var Components;
(function (Components) {
    class Select {
        $sourceSelect;
        $sourceOptions;
        $header;
        $list;
        isOpen; // флаг, состояние: открыт или закрыт селект
        isSelect; // флаг, состояние: выбрано что-то или нет
        duration; // анимация
        constructor($sourceSelect) {
            this.isSelect = false;
            this.isOpen = false;
            this.duration = 450;
            this.$sourceSelect = $sourceSelect;
            this.$sourceOptions = $sourceSelect.children('option');
            // $sourceSelect.hide();
            /* Create Elements */
            const $wrap = $('<div/>', { class: 'select-wrap' });
            this.$header = $('<div>', {
                class: 'new-select',
                text: this.$sourceOptions.filter(':selected').text()
            });
            this.$list = $('<div>', {
                class: 'new-select-list'
            });
            /* Building DOM */
            $wrap.append(this.$header, this.$list.append(this.getOptions()));
            /* Events */
            this.$header.on('click', () => {
                if (this.$header.hasClass('disabled')) {
                    return;
                }
                this.switchSelect();
            });
            $sourceSelect.after($wrap);
            this.$list.slideUp(0);
        }
        static factory($sourceSelect) {
            let $out = [];
            for (let i = 0; i < $sourceSelect.length; i++) {
                let select = new Select($sourceSelect.eq(Number(i)));
                $out.push(select);
            }
            return $out;
        }
        getOptions() {
            let $options = [];
            let sourceOptions = this.$sourceSelect.children('option');
            for (let i = 0; i < sourceOptions.length; i++) {
                $options.push(this.getOption($(sourceOptions[i])));
            }
            return $options;
        }
        getOption($sourceOption) {
            let text = $sourceOption.text();
            let value = $sourceOption.val();
            let $option = $('<div>', {
                class: 'new-select-list-item',
                html: $('<span>', {
                    text: text
                }),
                'data-value': value
            });
            $option.on('click', () => {
                this.$sourceOptions.filter(':selected').removeAttr('selected');
                $sourceOption.attr('selected', 'selected');
                this.isSelect = true;
                $sourceOption.trigger('change');
                this.$header.text(text);
                this.close();
            });
            return $option;
        }
        switchSelect() {
            this.isOpen ? this.close() : this.open();
        }
        open() {
            this.isOpen = true;
            this.$header.addClass('on');
            this.$list.slideDown(this.duration);
        }
        close() {
            this.isOpen = false;
            this.$header.removeClass('on');
            this.$list.slideUp(this.duration);
        }
        getIsSelect() {
            return this.isSelect;
        }
        getValue() {
            return this.$sourceOptions.filter(':selected').val();
        }
        getText() {
            return this.$sourceOptions.filter(':selected').text();
        }
        setValue(value, event = true) {
            console.log('val: ', value);
            console.log(typeof value);
            if (!event) {
                this.$sourceOptions.filter(':selected').removeAttr('selected');
                let $option = this.$sourceOptions.filter(`[value=${value}]`);
                $option.attr('selected', 'selected');
                console.log('opt: ', $option);
                this.$header.text($option.text());
                return;
            }
            this.$list.children(`[data-value=${value}]`).trigger('click');
        }
        restructure(data) {
            this.$list.slideUp(0);
            this.$sourceSelect.empty();
            for (const i in data) {
                this.$sourceSelect.append($('<option/>').text(data[i]).val(i));
            }
            this.$sourceOptions = this.$sourceSelect.children('option');
            this.$header.text(this.$sourceOptions.filter(':selected').text());
            this.$list.append(this.getOptions());
        }
        addDisabled() {
            this.$header.addClass('disabled');
        }
        removeDisabled() {
            this.$header.removeClass('disabled');
        }
        /* Навешивание события: при изменении селекта срабатывает переданная процедура */
        on(event, func, data = {}) {
            switch (event) {
                case 'change':
                    this.$sourceSelect.on('change', () => { func(this.$sourceSelect, data); });
                    break;
                default:
                    console.warn('Event not found');
                    break;
            }
        }
    }
    Components.Select = Select;
})(Components || (Components = {}));
//# sourceMappingURL=main.js.map