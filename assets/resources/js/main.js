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
$(() => {
    new Components.Filter();
});
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
            (title !== null) ? header.className = 'head' : header.className = 'head_null_title';
            (title !== null) ? container.className = 'container' : container.className = 'container_null_title';
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
// $(() => {
//
// })
//
// function selectCustom(): void {
//     $('.select').each(function() {
//         const _this = $(this),
//             selectOption = _this.find('option'),
//             selectOptionLength = selectOption.length,
//             selectedOption = selectOption.filter(':selected'),
//             duration = 450; // длительность анимации
//
//         _this.hide();
//         _this.wrap('<div class="select-wrap"></div>');
//         $('<div>', {
//             class: 'new-select',
//             text: _this.children('option:disabled').text()
//         }).insertAfter(_this);
//
//         const selectHead = _this.next('.new-select');
//         $('<div>', {
//             class: 'new-select-list'
//         }).insertAfter(selectHead);
//
//         const selectList = selectHead.next('.new-select-list');
//         for (let i = 1; i < selectOptionLength; i++) {
//             $('<div>', {
//                 class: 'new-select-list-item',
//                 html: $('<span>', {
//                     text: selectOption.eq(i).text()
//                 })
//             })
//                 .attr('data-value', selectOption.eq(i).val())
//                 .appendTo(selectList);
//         }
//
//         const selectItem = selectList.find('.new-select-list-item');
//         selectList.slideUp(0);
//         selectHead.on('click', function() {
//             if ( !$(this).hasClass('on') ) {
//                 $(this).addClass('on');
//                 selectList.slideDown(duration);
//
//                 selectItem.on('click', function() {
//                     let chooseItem = $(this).data('value');
//
//                     _this.val(chooseItem).attr('selected', 'selected');
//                     // $('select').val(chooseItem).attr('selected', 'selected');
//                     selectHead.text( $(this).find('span').text() );
//
//                     selectList.slideUp(duration);
//                     selectHead.removeClass('on');
//                 });
//
//             } else {
//                 $(this).removeClass('on');
//                 selectList.slideUp(duration);
//             }
//         });
//     });
// }
//
// function getFilterOption(): object {
//     let dataOption: object;
//
//     $.post( "/assets/base/snippets/api/api.php?task=filterOptions", function( data: object ) {
//         // $( ".result" ).html( data );
//         dataOption = data;
//         // console.log(dataOption);
//
//     }) .done(function() {
//         console.log( "second success" );
//     })
//         .fail(function() {
//             console.log( "error" );
//         })
//         .always(function() {
//             console.log( "finished" );
//             return dataOption;
//         });
//
//
// }
//
// function fillFilterData(): void {
//     console.log('fill filter')
// }
var Components;
(function (Components) {
    class Filter {
        data;
        load;
        selectArray;
        constructor() {
            this.selectArray = {
                '1': {
                    'select': $('select[name="zakontsovka-1"]'),
                },
                '2': {
                    'select': $('select[name="zakontsovka-2"]'),
                },
            };
            this.load = false;
            this.setFilterOption();
        }
        setFilterOption() {
            $.post("/assets/base/snippets/api/api.php?task=filterOptions", (data) => {
                // $( ".result" ).html( data );
                this.data = data;
                console.log('data1', this.data);
                this.fillFilterData();
                this.selectCustom();
                this.drawSizeBtn('A');
                $('.loader-wrap').addClass('hide');
            })
                //     .done(() => {
                //     console.log( "second success" );
                //     console.log('data1', this.data);
                // })
                //     .fail(() => {
                //         console.log( "error" );
                //     })
                .always(() => {
                this.load = true;
            });
        }
        fillFilterData() {
            for (const i in this.data.types) {
                const value = i + ' - ' + this.data.types[i].description;
                this.selectArray['1'].select.append($('<option/>').text(value).attr('data-option', i));
                this.selectArray['2'].select.append($('<option/>').text(value));
            }
        }
        drawSizeBtn(name) {
            for (let i in this.data.types[name].sizes) {
                $('.prod-filter-radio').find('#size1').append($('<div/>').append($('<input/>', { id: 'sz1-' + this.data.types[name].sizes[i], type: 'radio', name: 'size1' }), $('<label/>', { for: 'sz1-' + this.data.types[name].sizes[i], text: this.data.types[name].sizes[i] })));
            }
            // $.post( "/assets/base/snippets/api/api.php?task=getProducts", ( data: filterOptions ): void => {
            //     // $( ".result" ).html( data );
            //
            // })
            //     //     .done(() => {
            //     //     console.log( "second success" );
            //     //     console.log('data1', this.data);
            //     // })
            //     //     .fail(() => {
            //     //         console.log( "error" );
            //     //     })
            //     .always(() => {
            //
            //     });
        }
        // private selectCustom(): void {
        //     const duration: number = 450; // длительность анимации
        //     for(let i in this.selectArray) {
        //         console.log('sel: ', i);
        //         console.log('proverka: ', this.selectArray[i].select);
        //
        //
        //         this.selectArray[i]['selectOption'] = this.selectArray[i].select.find('option');
        //         const selectOptionLength: number = this.selectArray[i]['selectOption'].length;
        //         const selectedOption: JQuery<HTMLElement> = this.selectArray[i]['selectOption'].filter(':selected');
        //
        //         this.selectArray[i].select.hide();
        //         this.selectArray[i].select.wrap('<div class="select-wrap"></div>');
        //
        //         $('<div>', {
        //             class: 'new-select',
        //             text: this.selectArray[i].select.children('option:disabled').text()
        //         }).insertAfter(this.selectArray[i].select);
        //
        //         this.selectArray[i]['selectHead'] = this.selectArray[i].select.next('.new-select');
        //         $('<div>', {
        //             class: 'new-select-list'
        //         }).insertAfter(this.selectArray[i]['selectHead']);
        //
        //         this.selectArray[i]['selectList'] = this.selectArray[i]['selectHead'].next('.new-select-list');
        //
        //         for (let j = 1; j < selectOptionLength; j++) {
        //             $('<div>', {
        //                 class: 'new-select-list-item',
        //                 html: $('<span>', {
        //                     text: this.selectArray[i]['selectOption'].eq(j).text()
        //                 })
        //             })
        //                 .attr('data-value', this.selectArray[i]['selectOption'].eq(j).val())
        //                 .attr('data-option', this.selectArray[i]['selectOption'].eq(j).data('option'))
        //                 .appendTo(this.selectArray[i]['selectList']);
        //
        //
        //
        //             this.selectArray[i]['selectItem'] = this.selectArray[i]['selectList'].find('.new-select-list-item');
        //             this.selectArray[i]['selectList'].slideUp(0);
        //             this.selectArray[i]['selectHead'].on('click', () => {
        //                 if ( !this.selectArray[i].select.hasClass('on') ) {
        //                     this.selectArray[i].select.addClass('on');
        //                     this.selectArray[i]['selectList'].slideDown(duration);
        //
        //                     this.selectArray[i]['selectItem'].on('click', () => {
        //                         let chooseItem = this.selectArray[i].select.data('value');
        //
        //                         this.selectArray[i].select.val(chooseItem).attr('selected', 'selected');
        //                         // $('select').val(chooseItem).attr('selected', 'selected');
        //                         this.selectArray[i]['selectHead'].text( this.selectArray[i].select.find('span').text() );
        //
        //                         this.selectArray[i]['selectList'].slideUp(duration);
        //                         this.selectArray[i]['selectHead'].removeClass('on');
        //                     });
        //
        //                 } else {
        //                     this.selectArray[i].select.removeClass('on');
        //                     this.selectArray[i]['selectList'].slideUp(duration);
        //                 }
        //             });
        //         }
        //     }
        // }
        selectCustom() {
            $('.select').each(function () {
                const _this = $(this), selectOption = _this.find('option'), selectOptionLength = selectOption.length, selectedOption = selectOption.filter(':selected'), duration = 450; // длительность анимации
                _this.hide();
                _this.wrap('<div class="select-wrap"></div>');
                $('<div>', {
                    class: 'new-select',
                    text: _this.children('option:disabled').text()
                }).insertAfter(_this);
                const selectHead = _this.next('.new-select');
                $('<div>', {
                    class: 'new-select-list'
                }).insertAfter(selectHead);
                const selectList = selectHead.next('.new-select-list');
                for (let i = 1; i < selectOptionLength; i++) {
                    $('<div>', {
                        class: 'new-select-list-item',
                        html: $('<span>', {
                            text: selectOption.eq(i).text()
                        })
                    })
                        .attr('data-value', selectOption.eq(i).val())
                        .attr('data-option', selectOption.eq(i).data('option'))
                        .appendTo(selectList);
                }
                const selectItem = selectList.find('.new-select-list-item');
                selectList.slideUp(0);
                selectHead.on('click', function () {
                    if (!$(this).hasClass('on')) {
                        $(this).addClass('on');
                        selectList.slideDown(duration);
                        selectItem.on('click', function () {
                            let chooseItem = $(this).data('value');
                            _this.val(chooseItem).attr('selected', 'selected');
                            // $('select').val(chooseItem).attr('selected', 'selected');
                            selectHead.text($(this).find('span').text());
                            /* ПЕРЕПИСАТЬ! */
                            selectList.slideUp(duration);
                            selectHead.removeClass('on');
                        });
                    }
                    else {
                        $(this).removeClass('on');
                        selectList.slideUp(duration);
                    }
                });
            });
        }
    }
    Components.Filter = Filter;
})(Components || (Components = {}));
//# sourceMappingURL=main.js.map