interface itemFilterOptions {
    id                                  : number,
    description                         : string,
    img_href                            : string,
    sizes                               : {[key: string]: string}
}

type filterOptions = {
    types                               : {[key: string]: itemFilterOptions},
    oxygen_compatibility_value          : string,
    cable_value                         : string,
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

namespace Components {
    export class Filter {
        $loaderFilter               : JQuery;

        dataOptions                 : filterOptions;
        dataProducts                : any;
        isLoad                      : boolean;

        select1                     : Select;
        select2                     : Select;

        typeSize1                   : object = [];
        typeSize2                   : object = [];

        constructor() {
            this.$loaderFilter = $('.loader-filter');
            this.isLoad = true;

            this.setFilterOption();
            this.addEvent();
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

        private showLoader(): void {
            this.isLoad = true;
            this.$loaderFilter.removeClass('hide');
        }
        private hideLoader(): void {
            this.isLoad = false;
            this.$loaderFilter.addClass('hide');
        }

        private fillSelectSource(): void {
            for (const i in this.dataOptions.types) {
                const value = i + ' - ' + this.dataOptions.types[i].description;

                $('.select[name="zakontsovka-1"]').append(
                    $('<option/>').text(value).attr('value', i)
                );

                $('.select[name="zakontsovka-2"]').append(
                    $('<option/>').text(value).attr('value', i)
                );
            }
        }

        private fillSelectCustom(): void {
            this.select1 = new Select($('.select[name="zakontsovka-1"]'));
            this.select2 = new Select($('.select[name="zakontsovka-2"]'));

            $('.select[name="zakontsovka-2"] + .select-wrap').find('.new-select').addClass('not-active');

            this.select1.on('change', this.drawButtonsSize, { id: 'sz1-', type: 'radio', name: 'size1' });
            this.select2.on('change', this.drawButtonsSize, { id: 'sz2-', type: 'radio', name: 'size2' });
        }


        private drawButtonsSize = ($select: JQuery, data: {id: string, type: string, name: string}): void => {
            const select2 = $('.select[name="zakontsovka-2"] + .select-wrap').find('.new-select');
            if (select2.hasClass('not-active')) select2.removeClass('not-active');

            const $wrapBtn: JQuery<HTMLElement> = $('.prod-filter-radio').find('#' + data.name);
            const name: string = $select.val() + '';
            const sizes = this.dataOptions.types[name].sizes;

            let sizesId = [];
            for (let key of Object.keys(this.dataOptions.types[name].sizes)) {
                sizesId.push(key)
            }

            switch (data.name) {
                case 'size1': this.typeSize1 = sizesId; break;
                case 'size2': this.typeSize2 = sizesId; break;
                default: this.typeSize1 = []; this.typeSize2 = []; break;
            }

            $wrapBtn.empty();

            for (let i in sizes) {
                let id: string = data.id + i;
                $wrapBtn.append(
                    $('<div/>').append(
                        $('<input/>', {id: id, type: data.type, name: data.name})
                            .on('change', (event) => {
                            switch (data.name) {
                                case 'size1': this.typeSize1 = [i]; break;
                                case 'size2': this.typeSize2 = [i]; break;
                                default: this.typeSize1 = sizes; this.typeSize2 = sizes; break;
                            }

                            this.collectData();
                        }),
                        $('<label/>', {
                            for: id,
                            text: sizes[i]
                        })
                    )
                )
            }

            this.collectData();
        }


        private collectData(): void {
            if ((!this.select1.getIsSelect() && !$('#analog').is(':checked'))
                || (!this.select1.getIsSelect() && !this.select2.getIsSelect()) ) console.log('размеры законцовки не выбраны');

            const sendData = {
                cable: $('#tros').is(':checked') ? this.dataOptions.cable_value : null,
                length: $('#size').val(),
                type1_size: this.typeSize1,
                type2_size: this.typeSize2,
                oxygen_compatibility: $('#o21').is(':checked') ? this.dataOptions.oxygen_compatibility_value : null,
                mrk_show: $('#mrk').is(':checked'),
                rvd_show: $('#rvd').is(':checked')

            }

            $('.prod-result').addClass('hide');
            $('.loader-table').removeClass('hide');
            this.sendData(JSON.stringify(sendData));
        }

        private drawTable(): void {
            const products = this.dataProducts['mrk'].products;
            const headList: JQuery<HTMLElement> = $('.prettyPagetitle');
            const prodList: JQuery<HTMLElement> = $('.prodList');

            headList.empty();
            prodList.empty();

            for (const key in products) {
                headList.append(
                    $('<tr/>').append(
                        $('<td/>').text(products[key].prettyPagetitle)
                    )
                );

                prodList.append(
                    $('<tr/>').append(
                        $('<td/>').text(products[key].numberOfBraids),
                        $('<td/>').text(products[key]._length),
                        $('<td/>').text(products[key].max_pressure),
                        $('<td/>').text(products[key].dn),
                        $('<td/>').text(products[key].ending1),
                        $('<td/>').text(products[key].ending2),
                        $('<td/>').text(products[key].protectiveSpiral),
                        $('<td/>').text(products[key].os_compatibility),
                        $('<td/>').text(products[key].cable),
                        $('<td/>').text(products[key].thermalInsulation),
                        $('<td/>').text(products[key].price),
                    )
                );
            }

            $('.loader-table').addClass('hide');
            $('.prod-result').removeClass('hide');

        }

        private addEvent(): void {
            $('#tros').on('click', () => { this.collectData(); })
            $('#size').on('change', () => { this.collectData(); })
            $('#mrk').on('click', () => { this.collectData(); })
            $('#rvd').on('click', () => { this.collectData(); })
            $('#o21').on('click', () => { this.collectData(); })
            $('#o21_2').on('click', () => { this.collectData(); })
            $('#analog').on('click', () => {
                console.log('новые данные для второй законцовки')
                this.collectData();
            })
        }


        private sendData(sendData: any) {
            $.ajax({
                type: 'POST',
                url: "/assets/base/snippets/api/api.php?task=getProducts",
                data: sendData,
                dataType: "json",
                success: (dataProducts: dataProducts): void => {
                    console.log("SUCCESS:");
                    this.dataProducts = dataProducts;
                    this.drawTable();
                },
                error: (jqXHR, textStatus, errorThrown): void => {
                    console.log("ERROR: " + textStatus + ", " + errorThrown);
                    console.log(jqXHR);
                }
            });
        }
    }
}