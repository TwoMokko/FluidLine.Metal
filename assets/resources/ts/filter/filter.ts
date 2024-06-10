namespace Components {
    export class Filter {
        typeEndFirst                        : Select;
        typeEndSecond                       : Select;
        sizeRadioFirst                      : GroupRadio;
        sizeRadioSecond                     : GroupRadio;

        dataOptions                         : filterOptions;

        callback                            : Function;

        $mrkBtn                             : JQuery;
        $rvdBtn                             : JQuery;
        $analogBtn                          : JQuery;
        $oxygenBtn                          : JQuery;
        $notOxygenBtn                       : JQuery;
        $sizeBtn                            : JQuery;
        $cableBtn                           : JQuery;

        constructor(callback: Function, dataOptions: filterOptions) {
            this.initButtons();
            this.callback = callback;

            this.dataOptions                = dataOptions;

            this.typeEndFirst               = new Select($('.select[name="zakontsovka-1"]'));
            this.typeEndSecond              = new Select($('.select[name="zakontsovka-2"]'));

            this.restructureSelects();

            this.sizeRadioFirst            = new GroupRadio($('#size1'), this.dataOptions.types[this.typeEndFirst.getValue()].sizes, {name: 'size1'});
            this.sizeRadioSecond           = new GroupRadio($('#size2'), this.dataOptions.types[this.typeEndSecond.getValue()].sizes, {name: 'size2'});

            this.typeEndFirst.on('change', () => { this.sizeRadioFirst.restructure(this.dataOptions.types[this.typeEndFirst.getValue()].sizes) });
            this.typeEndSecond.on('change', () => { this.sizeRadioSecond.restructure(this.dataOptions.types[this.typeEndSecond.getValue()].sizes) });
        }

        private restructureSelects(): void {
            let data = {};
            for (const i in this.dataOptions.types) {
                data[i] = `${i} - ${this.dataOptions.types[i].description}`;
            }
            this.typeEndFirst.restructure(data);
            this.typeEndSecond.restructure(data);
        }

        private initButtons(): void {
            this.$mrkBtn                     = $('#mrk');
            this.$rvdBtn                     = $('#rvd');
            this.$analogBtn                  = $('#analog');
            this.$oxygenBtn                  = $('#o21');
            this.$notOxygenBtn               = $('#o21_2');
            this.$sizeBtn                    = $('#size');
            this.$cableBtn                   = $('#tros');
        }

        private getFilterData(): sendData {
            let type1_size = [this.sizeRadioFirst.getValue()];
            if (type1_size[0] === null) type1_size = this.sizeRadioFirst.getValuesFromData();

            let type2_size = [this.sizeRadioSecond.getValue()];
            if (type2_size[0] === null) type2_size = this.sizeRadioSecond.getValuesFromData();

            return {
                cable: $('#tros').is(':checked') ? this.dataOptions.cable_value : null,
                length: $('#size').val(),
                type1_size: type1_size,
                type2_size: type2_size,
                oxygen_compatibility: $('#o21').is(':checked') ? this.dataOptions.oxygen_compatibility_value : null,
                mrk_show: $('#mrk').is(':checked'),
                rvd_show: $('#rvd').is(':checked')
            }
        }

        private sendData(sendData: any): void {
            $.ajax({
                type: 'POST',
                url: '/assets/base/snippets/api/api.php?task=getProducts',
                data: sendData,
                dataType: 'json',
                success: (dataProducts: dataProducts): void => {
                    this.callback(dataProducts);

                    console.log('SUCCESS:');
                },
                error: (jqXHR, textStatus, errorThrown): void => {
                    console.log('ERROR: ' + textStatus + ", " + errorThrown);
                    console.log(jqXHR);
                }
            });
        }

        // private fillSelectCustom(): void {
        //     // this.select1 = new Select($('.select[name="zakontsovka-1"]'));
        //     // this.select2 = new Select($('.select[name="zakontsovka-2"]'));
        //
        //     // пока не выбран первый селект, второй не активен
        //     // $('.select[name="zakontsovka-2"] + .select-wrap').find('.new-select').addClass('not-active');
        //
        //     // навешивание событий на кастомный селект
        //     this.typeEndFirst.on('change', this.drawButtonsSize, { id: 'sz1-', type: 'radio', name: 'size1' });
        //     this.typeEndSecond.on('change', this.drawButtonsSize, { id: 'sz2-', type: 'radio', name: 'size2' });
        // }

        // private addEvent(): void {
        //     this.typeEndFirst.on('change', (select: Select) => {
        //         this.sizeRadioFirst.restructure(this.dataOptions.types[select.getValue()].sizes);
        //         this.prepareSendData();
        //     })
        //
        //     $('#tros').on('click', () => { this.prepareSendData(); })
        //     $('#size').on('change', () => { this.prepareSendData(); })
        //     $('#mrk').on('click', () => { this.prepareSendData(); })
        //     $('#rvd').on('click', () => { this.prepareSendData(); })
        //     $('#o21').on('click', () => { this.prepareSendData(); })
        //     $('#o21_2').on('click', () => { this.prepareSendData(); })
        //     $('#analog').on('click', () => {
        //
        //         // for (const key in this.select2.$sourceOptions) {
        //         //
        //         //     if (this.select2.$sourceOptions[key].innerText === this.select1.$header[0].textContent) {
        //         //         this.select2.$header.text(this.select1.$header[0].textContent);
        //         //         let a = $(this.select2.$sourceOptions[key]);
        //         //         console.log(a);
        //         //         // $(this.select2.$sourceOptions[key]).trigger('click');
        //         //         // $(this.select2).trigger('change');
        //         //     }
        //         // }
        //
        //         // this.select2.$sourceOption.trigger('change');
        //         // this.select2.$header.text(this.select1.$header[0].textContent);
        //         console.log('новые данные для второй законцовки')
        //         if ($('#analog').is(':checked')) this.prepareSendData();
        //     })
        // }

        // private prepareSendData(): void {
        //
        // //     if ((!this.select1.getIsSelect() && !$('#analog').is(':checked'))
        // //         || (!this.select1.getIsSelect() && !this.select2.getIsSelect()) ) console.log('размеры законцовки не выбраны');
        // //
        //     let type1_size = [this.sizeRadioFirst.getValue()];
        //     if (type1_size[0] === null) type1_size = this.sizeRadioFirst.getValuesFromData();
        //
        //     let type2_size = [this.sizeRadioSecond.getValue()];
        //     if (type2_size[0] === null) type2_size = this.sizeRadioSecond.getValuesFromData();
        //
        //
        //     const sendData = {
        //         cable: $('#tros').is(':checked') ? this.dataOptions.cable_value : null,
        //         length: $('#size').val(),
        //         type1_size: type1_size,
        //         type2_size: type2_size,
        //         oxygen_compatibility: $('#o21').is(':checked') ? this.dataOptions.oxygen_compatibility_value : null,
        //         mrk_show: $('#mrk').is(':checked'),
        //         rvd_show: $('#rvd').is(':checked')
        //
        //     }
        // //
        // //
        // //
        // //     $('.prod-result').addClass('hide');
        // //     $('.loader-table').removeClass('hide');
        //     this.sendData(JSON.stringify(sendData));
        // }

        // private sendData(sendData: any) {
        //     $.ajax({
        //         type: 'POST',
        //         url: "/assets/base/snippets/api/api.php?task=getProducts",
        //         data: sendData,
        //         dataType: "json",
        //         success: (dataProducts: dataProducts): void => {
        //             this.callback(dataProducts);
        //
        //             console.log("SUCCESS:");
        //         },
        //         error: (jqXHR, textStatus, errorThrown): void => {
        //             console.log("ERROR: " + textStatus + ", " + errorThrown);
        //             console.log(jqXHR);
        //         }
        //     });
        // }

    }
}