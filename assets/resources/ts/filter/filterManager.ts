interface itemFilterOptions {
    id                                  : number,
    description                         : string,
    img_href                            : string,
    sizes                               : {[key: string]: string}
}

type filterOptions = {
    types                               : typesFilterOptions,
    oxygen_compatibility_value          : string,
    cable_value                         : string,
}

type typesFilterOptions =  {
    [key: string]: itemFilterOptions
}

interface itemProducts {
    pagetitle                           : string,
    price                               : string,
    stock_count                         : string,
    ending1                             : string,
    ending2                             : string,
    numberOfBraids                      : string,
    dn                                  : string,
    cable                               : string,
    protectiveSpiral                    : string,
    thermalInsulation                   : string,
    degreasing                          : string,
    outerCoating                        : string,
    bending_radius                      : string,
    max_pressure                        : string,
    os_compatibility                    : string,
    _length                             : string,
    prettyPagetitle                     : string,
}

interface itemDataProducts {
    products                            : itemProducts[],
    count_all                           : number,
    table_id                            : number
}

type dataProducts = { [key: string]: itemDataProducts }

type sendData = {
    cable: string,
    length: string | number | string[],
    type1_size: string[],
    type2_size: string[],
    oxygen_compatibility: string,
    mrk_show: boolean,
    rvd_show: boolean
}

namespace Components {
    export class FilterManager {
        private dataOptions                 : filterOptions;
        private dataProducts                : dataProducts;

        private filter                      : Filter;
        private notFound                    : NotFound;
        private productsMrk                 : Products;
        private productsRvd                 : Products;
        private loaderFilter                : Loader;
        private loaderProducts              : Loader;

        private $wrapProducts               : JQuery;

        constructor() {
            this.loaderFilter               = new Loader($('.prod-filter'), 'loader-wrap loader-filter');
            // loader on
            this.getFilterOption().then((data: filterOptions) => {
                this.init(data);
                this.loaderFilter.hide();
                // loader off
            })
        }

        private init(data: filterOptions): void {
            this.dataOptions                = data;

            this.$wrapProducts              = $('.prod-result-wrap');
            // this.loaderFilter               = new Loader($('.wrap-filter'), 'loader-wrap loader-filter');
            this.loaderProducts             = new Loader(this.$wrapProducts, 'loader-wrap loader-table');
            this.filter                     = new Filter(this.redraw, this.dataOptions);
            // this.productsMrk                = new Products();
            // this.productsRvd                = new Products();
            this.notFound                   = new NotFound(this.$wrapProducts);
        }

        private redraw(dataProducts: dataProducts) {
            //рендер, условия в зависимости какие пришли данные
            this.notFound.hide();

            if (!dataProducts['mrk'].products && !dataProducts['rkv'].products) {
                this.notFound.show();
                return;
            }
            if (dataProducts['mrk'].products) this.productsMrk.drawProducts(dataProducts['mrk'].products, this.$wrapProducts, 'Металлорукава');
            if (dataProducts['rkv'].products) this.productsRvd.drawProducts(dataProducts['mrk'].products, this.$wrapProducts, 'Рукава высокого давления');
        }

        private async getFilterOption(): Promise<filterOptions> {
            let response = await fetch('/assets/base/snippets/api/api.php?task=filterOptions');
            return await response.json();
            //     $.post("/assets/base/snippets/api/api.php?task=filterOptions", (dataOptions: filterOptions): void => {
            // //         // $( ".result" ).html( data );
            // //         this.dataOptions = dataOptions;
            // //         this.fillSelectSource();
            // //         this.fillSelectCustom();
            // //     })
            // //         //     .done(() => {
            // //         //     console.log( "second success" );
            // //         // })
            // //         //     .fa1il(() => {
            // //         //         console.log( "error" );
            // //         //     })
            // //         .always(() => {
            // //             this.loader.hide();
            //         });
        }

        // private fillSelectSource(): void {
        //     for (const i in this.dataOptions.types) {
        //         const value = i + ' - ' + this.dataOptions.types[i].description;
        //
        //         $('.select[name="zakontsovka-1"]').append(
        //             $('<option/>').text(value).attr('value', i).attr('text', this.dataOptions.types[i].description),
        //         );
        //
        //         $('.select[name="zakontsovka-2"]').append(
        //             $('<option/>').text(value).attr('value', i).attr('text', this.dataOptions.types[i].description)
        //         );
        //     }
        // }

        // private prepareSendData(): void {
        //     if ((!this.select1.getIsSelect() && !$('#analog').is(':checked'))
        //         || (!this.select1.getIsSelect() && !this.select2.getIsSelect()) ) console.log('размеры законцовки не выбраны');
        //
        //     const sendData = {
        //         cable: $('#tros').is(':checked') ? this.dataOptions.cable_value : null,
        //         length: $('#size').val(),
        //         type1_size: this.typeSize1,
        //         type2_size: this.typeSize2,
        //         oxygen_compatibility: $('#o21').is(':checked') ? this.dataOptions.oxygen_compatibility_value : null,
        //         mrk_show: $('#mrk').is(':checked'),
        //         rvd_show: $('#rvd').is(':checked')
        //
        //     }
        //
        //
        //
        //     $('.prod-result').addClass('hide');
        //     $('.loader-table').removeClass('hide');
        //     this.sendData(JSON.stringify(sendData));
        // }

        // private sendData(sendData: any) {
        //     $.ajax({
        //         type: 'POST',
        //         url: "/assets/base/snippets/api/api.php?task=getProducts",
        //         data: sendData,
        //         dataType: "json",
        //         success: (dataProducts: dataProducts): void => {
        //             console.log("SUCCESS:");
        //             this.dataProducts = dataProducts;
        //             this.prepareDrawTable();
        //         },
        //         error: (jqXHR, textStatus, errorThrown): void => {
        //             console.log("ERROR: " + textStatus + ", " + errorThrown);
        //             console.log(jqXHR);
        //         }
        //     });
        // }
    }
}