namespace Components {
    class FilterManager {
        dataOptions                 : filterOptions;
        dataProducts                : dataProducts;
        constructor() {
            new Filter(this.redraw);
            new Table();
            new Table();
            new NotFound();
        }

        private redraw(dataProducts: dataProducts) {
            //рендер, условия в зависимости какие пришли данные
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
                    this.hideLoader();
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

        private sendData(sendData: any) {
            $.ajax({
                type: 'POST',
                url: "/assets/base/snippets/api/api.php?task=getProducts",
                data: sendData,
                dataType: "json",
                success: (dataProducts: dataProducts): void => {
                    console.log("SUCCESS:");
                    this.dataProducts = dataProducts;
                    this.prepareDrawTable();
                },
                error: (jqXHR, textStatus, errorThrown): void => {
                    console.log("ERROR: " + textStatus + ", " + errorThrown);
                    console.log(jqXHR);
                }
            });
        }
    }
}