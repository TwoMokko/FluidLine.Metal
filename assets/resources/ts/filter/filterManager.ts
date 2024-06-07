namespace Components {
    class FilterManager {
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
            this.$wrapProducts              = $();
            this.loaderFilter               = new Loader($('.wrap-filter'), 'loader-wrap loader-filter');
            this.loaderProducts             = new Loader($('.wrap-prod'), 'loader-wrap loader-table');
            this.filter                     = new Filter(this.redraw);
            this.productsMrk                = new Products();
            this.productsRvd                = new Products();
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

        private setFilterOption(): void {
            $.post("/assets/base/snippets/api/api.php?task=filterOptions", (dataOptions: filterOptions): void => {
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
                    this.loader.hide();
                });
        }

        private fillSelectSource(): void {
            for (const i in this.dataOptions.types) {
                const value = i + ' - ' + this.dataOptions.types[i].description;

                $('.select[name="zakontsovka-1"]').append(
                    $('<option/>').text(value).attr('value', i).attr('text', this.dataOptions.types[i].description),
                );

                $('.select[name="zakontsovka-2"]').append(
                    $('<option/>').text(value).attr('value', i).attr('text', this.dataOptions.types[i].description)
                );
            }
        }

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