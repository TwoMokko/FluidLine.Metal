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
var Components;
(function (Components) {
    class Filter {
        $loaderFilter;
        dataOptions;
        dataProducts;
        isLoad;
        select1;
        select2;
        typeSize1 = [];
        typeSize2 = [];
        constructor() {
            this.$loaderFilter = $('.loader-filter');
            this.isLoad = true;
            this.setFilterOption();
            this.addEvent();
        }
        setFilterOption() {
            $.post("/assets/base/snippets/api/api.php?task=filterOptions", (dataOptions) => {
                // $( ".result" ).html( data );
                this.dataOptions = dataOptions;
                this.fillSelectSource();
                this.fillSelectCustom();
            })
                //     .done(() => {
                //     console.log( "second success" );
                // })
                //     .fail(() => {
                //         console.log( "error" );
                //     })
                .always(() => {
                this.hideLoader();
            });
        }
        showLoader() {
            this.isLoad = true;
            this.$loaderFilter.removeClass('hide');
        }
        hideLoader() {
            this.isLoad = false;
            this.$loaderFilter.addClass('hide');
        }
        fillSelectSource() {
            for (const i in this.dataOptions.types) {
                const value = i + ' - ' + this.dataOptions.types[i].description;
                $('.select[name="zakontsovka-1"]').append($('<option/>').text(value).attr('value', i).attr('text', this.dataOptions.types[i].description));
                $('.select[name="zakontsovka-2"]').append($('<option/>').text(value).attr('value', i).attr('text', this.dataOptions.types[i].description));
            }
        }
        fillSelectCustom() {
            this.select1 = new Components.Select($('.select[name="zakontsovka-1"]'));
            this.select2 = new Components.Select($('.select[name="zakontsovka-2"]'));
            $('.select[name="zakontsovka-2"] + .select-wrap').find('.new-select').addClass('not-active');
            this.select1.on('change', this.drawButtonsSize, { id: 'sz1-', type: 'radio', name: 'size1' });
            this.select2.on('change', this.drawButtonsSize, { id: 'sz2-', type: 'radio', name: 'size2' });
        }
        drawButtonsSize = ($select, data) => {
            const $wrap = $('.prod-filter-radio');
            const $notFound = $('.prod-not-found');
            if (!$notFound.hasClass('hide'))
                $notFound.addClass('hide');
            const select2 = $('.select[name="zakontsovka-2"] + .select-wrap').find('.new-select');
            if (select2.hasClass('not-active'))
                select2.removeClass('not-active');
            const $wrapBtn = $wrap.find('#' + data.name);
            const name = $select.val() + '';
            const sizes = this.dataOptions.types[name].sizes;
            const $forLoad = $wrapBtn.find('+ .forload');
            let sizesId = [];
            for (let key of Object.keys(this.dataOptions.types[name].sizes)) {
                sizesId.push(key);
            }
            switch (data.name) {
                case 'size1':
                    this.typeSize1 = sizesId;
                    break;
                case 'size2':
                    this.typeSize2 = sizesId;
                    break;
                default:
                    this.typeSize1 = [];
                    this.typeSize2 = [];
                    break;
            }
            $wrapBtn.empty();
            $forLoad.addClass('hide');
            for (let i in sizes) {
                let id = data.id + i;
                $wrapBtn.append($('<div/>').append($('<input/>', { id: id, type: data.type, name: data.name })
                    .on('change', (event) => {
                    switch (data.name) {
                        case 'size1':
                            this.typeSize1 = [i];
                            break;
                        case 'size2':
                            this.typeSize2 = [i];
                            break;
                        default:
                            this.typeSize1 = sizes;
                            this.typeSize2 = sizes;
                            break;
                    }
                    this.collectData();
                }), $('<label/>', {
                    for: id,
                    text: sizes[i]
                })));
            }
            this.collectData();
        };
        collectData() {
            if ((!this.select1.getIsSelect() && !$('#analog').is(':checked'))
                || (!this.select1.getIsSelect() && !this.select2.getIsSelect()))
                console.log('размеры законцовки не выбраны');
            const sendData = {
                cable: $('#tros').is(':checked') ? this.dataOptions.cable_value : null,
                length: $('#size').val(),
                type1_size: this.typeSize1,
                type2_size: this.typeSize2,
                oxygen_compatibility: $('#o21').is(':checked') ? this.dataOptions.oxygen_compatibility_value : null,
                mrk_show: $('#mrk').is(':checked'),
                rvd_show: $('#rvd').is(':checked')
            };
            $('.prod-result').addClass('hide');
            $('.loader-table').removeClass('hide');
            this.sendData(JSON.stringify(sendData));
        }
        prepareDrawTable() {
            const $notFound = $('.prod-not-found');
            const productsMrk = this.dataProducts['mrk'].products;
            const productsRvd = this.dataProducts['rkv'].products;
            $('.loader-table').addClass('hide');
            if (productsMrk.length === 0 && productsRvd.length === 0) {
                $notFound.removeClass('hide');
            }
            if (productsMrk.length > 0 && $('#mrk').is(':checked')) {
                const $resultMrk = $('#result_mrk');
                this.drawImage($resultMrk);
                this.drawTable(productsMrk, $resultMrk);
            }
            if (productsRvd.length > 0 && $('#rvd').is(':checked')) {
                const $resultRvd = $('#result_rvd');
                this.drawImage($resultRvd);
                this.drawTable(productsRvd, $resultRvd);
            }
        }
        drawTable(products, $resultWrap) {
            const $headList = $resultWrap.find('.prettyPagetitle');
            const $prodList = $resultWrap.find('.prodList');
            $headList.empty();
            $prodList.empty();
            for (const key in products) {
                $headList.append($('<tr/>').append($('<td/>').text(products[key].prettyPagetitle)));
                $prodList.append($('<tr/>').append($('<td/>').text(products[key].numberOfBraids), $('<td/>').text(products[key]._length), $('<td/>').text(products[key].max_pressure), $('<td/>').text(products[key].dn), $('<td/>').text(products[key].ending1), $('<td/>').text(products[key].ending2), $('<td/>').text(products[key].protectiveSpiral), $('<td/>').text(products[key].os_compatibility), $('<td/>').text(products[key].cable), $('<td/>').text(products[key].thermalInsulation), $('<td/>').text(products[key].price)));
            }
            $resultWrap.removeClass('hide');
        }
        drawImage($wrapImg) {
            const selectLeft = this.select1.$sourceSelect.find('option:checked').attr('value');
            const textLeft = this.select1.$sourceSelect.find('option:checked').attr('text');
            const selectRight = this.select2.$sourceSelect.find('option:checked').attr('value') ? this.select2.$sourceSelect.find('option:checked').attr('value') : '';
            const textRight = this.select2.$sourceSelect.find('option:checked').attr('value') ? this.select2.$sourceSelect.find('option:checked').attr('text') : '';
            const $platformLeft = $wrapImg.find('.platform-left');
            const $platformRight = $wrapImg.find('.platform-right');
            const path = 'https://fluid-line.ru/assets/snippets/product/rkv/img/';
            const cutimgLeft = path + selectLeft + '_left_cut.png';
            const bigimgLeft = path + 'big/' + selectLeft + '_left_cut.png';
            const cutimgRight = path + selectRight + '_right_cut.png';
            const bigimgRight = path + 'big/' + selectRight + '_right_cut.png';
            const imgCenter = $wrapImg.find('.cccc');
            $platformLeft.find('.cutimg > img').attr('src', cutimgLeft);
            $platformLeft.find('.bigimg > img').attr('src', bigimgLeft);
            $platformRight.find('.cutimg > img').attr('src', cutimgRight);
            $platformRight.find('.bigimg > img').attr('src', bigimgRight);
            imgCenter.find('> img:nth-child(1)').attr('src', path + selectLeft + '_left.png');
            imgCenter.find('> img:nth-child(3)').attr('src', path + selectRight + '_right.png');
            console.log(selectLeft, textLeft, selectRight, textRight);
            $('.big_txt_left').text(selectLeft);
            $('.large_text_left').text(textLeft);
            $('.big_txt_right').text(selectRight);
            $('.large_text_right').text(textRight);
        }
        addEvent() {
            $('#tros').on('click', () => { this.collectData(); });
            $('#size').on('change', () => { this.collectData(); });
            $('#mrk').on('click', () => { this.collectData(); });
            $('#rvd').on('click', () => { this.collectData(); });
            $('#o21').on('click', () => { this.collectData(); });
            $('#o21_2').on('click', () => { this.collectData(); });
            $('#analog').on('click', () => {
                // for (const key in this.select2.$sourceOptions) {
                //
                //     if (this.select2.$sourceOptions[key].innerText === this.select1.$header[0].textContent) {
                //         this.select2.$header.text(this.select1.$header[0].textContent);
                //         let a = $(this.select2.$sourceOptions[key]);
                //         console.log(a);
                //         // $(this.select2.$sourceOptions[key]).trigger('click');
                //         // $(this.select2).trigger('change');
                //     }
                // }
                // this.select2.$sourceOption.trigger('change');
                // this.select2.$header.text(this.select1.$header[0].textContent);
                console.log('новые данные для второй законцовки');
                if ($('#analog').is(':checked'))
                    this.collectData();
            });
        }
        sendData(sendData) {
            $.ajax({
                type: 'POST',
                url: "/assets/base/snippets/api/api.php?task=getProducts",
                data: sendData,
                dataType: "json",
                success: (dataProducts) => {
                    console.log("SUCCESS:");
                    this.dataProducts = dataProducts;
                    this.prepareDrawTable();
                },
                error: (jqXHR, textStatus, errorThrown) => {
                    console.log("ERROR: " + textStatus + ", " + errorThrown);
                    console.log(jqXHR);
                }
            });
        }
    }
    Components.Filter = Filter;
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
            $sourceSelect.hide();
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
            this.$header.on('click', () => { this.switchSelect(); });
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
            for (let i = 1; i < this.$sourceSelect.children('option').length; i++) {
                $options.push(this.getOption(this.$sourceOptions.eq(i)));
            }
            return $options;
        }
        getOption($sourceOption) {
            let text = $sourceOption.text();
            let $option = $('<div>', {
                class: 'new-select-list-item',
                html: $('<span>', {
                    text: text
                }),
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