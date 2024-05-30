interface itemFilterOptions {
    id: number,
    description: string,
    img_href: string,
    sizes: {[key: string]: string}
}

type filterOptions = {
    types: {[key: string]: itemFilterOptions},
    oxygen_compatibility_value: string,
    cable_value: string,
}

namespace Components {
    export class Filter {
        $loader         : JQuery;

        data            : filterOptions;
        isLoad          : boolean;

        select1         : Select;
        select2         : Select;

        typeSize1       : object = [];
        typeSize2       : object = [];

        constructor() {
            this.$loader = $('.loader-wrap');
            this.isLoad = true;

            this.setFilterOption();
        }

        private setFilterOption(): void {
            $.post("/assets/base/snippets/api/api.php?task=filterOptions", (data: filterOptions): void => {
                // $( ".result" ).html( data );
                this.data = data;
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
            this.$loader.removeClass('hide');
        }
        private hideLoader(): void {
            this.isLoad = false;
            this.$loader.addClass('hide');
        }

        private fillSelectSource(): void {
            for (const i in this.data.types) {
                const value = i + ' - ' + this.data.types[i].description;

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

            this.select1.on('change', this.drawButtonsSize, { id: 'sz1-', type: 'radio', name: 'size1' });
            this.select2.on('change', this.drawButtonsSize, { id: 'sz2-', type: 'radio', name: 'size2' });
        }


        private drawButtonsSize = ($select: JQuery, data: {id: string, type: string, name: string}): void => {
            const name: string = $select.val() + '';
            const sizes: object = this.data.types[name].sizes;
            const $wrapBtn: JQuery<HTMLElement> = $('.prod-filter-radio').find('#' + data.name);

            this.typeSize1 = sizes;
            this.typeSize2 = sizes;

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
        }


        private collectData(): void {

            const sendData = {
                cable: $('#tros').is(':checked') ? this.data.cable_value : null,
                length: $('#size').val(),
                type1_size: this.typeSize1,
                type2_size: this.typeSize2,
                // oxygen_compatibility:
                // mrk_show: true | false
                // rvd_show: true | false

            }

            console.log(sendData);
        }

        private changeTypeSize(): void {

        }
        // $.post( "/assets/base/snippets/api/api.php?task=getProducts", ( data: filterOptions ): void => {
        //     // $( ".result" ).html( data );
        //
        // })
        //     //     .done(() => {
        //     //     console.log( "second success" );
        //     // })
        //     //     .fail(() => {
        //     //         console.log( "error" );
        //     //     })
        //     .always(() => {
        //
        //     });
    }
}