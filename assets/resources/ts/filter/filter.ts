namespace Components {
    export class Filter {
        typeEndFirst                        : Select;
        typeEndSecond                       : Select;
        sizeRadioFirst                      : GroupRadio;
        sizeRadioSecond                     : GroupRadio;
        analog                              : boolean;

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
            this.analog                     = true;
            this.createElements();
            this.callback = callback;

            this.dataOptions                = dataOptions;

            this.typeEndFirst               = new Select($('.select[name="zakontsovka-1"]'));
            this.typeEndSecond              = new Select($('.select[name="zakontsovka-2"]'));

            this.restructureSelects();

            this.sizeRadioFirst            = new GroupRadio($('#size1'), this.dataOptions.types[this.typeEndFirst.getValue()].sizes, {name: 'size1'});
            this.sizeRadioSecond           = new GroupRadio($('#size2'), this.dataOptions.types[this.typeEndSecond.getValue()].sizes, {name: 'size2'});

            this.typeEndSecond.addDisabled();
            this.sizeRadioSecond.addDisabled();

            this.prepareSendData();

            this.typeEndFirst.on('change', () => {
                this.sizeRadioFirst.restructure(this.dataOptions.types[this.typeEndFirst.getValue()].sizes);
                if (this.analog) {
                    this.useAnalog();
                }
                this.prepareSendData();
            });
            this.typeEndSecond.on('change', () => {
                this.sizeRadioSecond.restructure(this.dataOptions.types[this.typeEndSecond.getValue()].sizes);
                this.prepareSendData();
            });
            this.$analogBtn.on('change', (e: JQuery.ChangeEvent) => {
                this.setAnalog(e.target.checked);
                if (this.analog) {
                    this.useAnalog();
                    this.prepareSendData();
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
            });
            this.sizeRadioSecond.on('change', () => { this.prepareSendData(); });

            this.$mrkBtn.on('change', () => { this.prepareSendData(); });
            this.$rvdBtn.on('change', () => { this.prepareSendData(); });
            this.$oxygenBtn.on('change', () => { this.prepareSendData(); });
            this.$notOxygenBtn.on('change', () => { this.prepareSendData(); });
            this.$sizeBtn.on('change', () => { this.prepareSendData(); });
            this.$cableBtn.on('change', () => { this.prepareSendData(); });
        }

        private restructureSelects(): void {
            let data = {};
            for (const i in this.dataOptions.types) {
                data[i] = `${i} - ${this.dataOptions.types[i].description}`;
            }
            this.typeEndFirst.restructure(data);
            this.typeEndSecond.restructure(data);
        }

        private setAnalog(state: boolean): void {
            this.analog = state;
        }

        private useAnalog(): void {
            let valueEndFirst = this.typeEndFirst.getValue();
            console.log('valueEndFirst: ', valueEndFirst);
            this.typeEndSecond.setValue(valueEndFirst, false);

            this.useAnalogForGroupRadio();
        }

        private useAnalogForGroupRadio(): void {
            this.sizeRadioSecond.restructure(this.dataOptions.types[this.typeEndSecond.getValue()].sizes);
            let valueSizeRadioFirst = this.sizeRadioFirst.getValue();
            this.sizeRadioSecond.setValue(valueSizeRadioFirst, false);
        }

        private getFilterData(): sendData {
            let type1_size = [this.sizeRadioFirst.getValue()];
            if (type1_size[0] === null) type1_size = this.sizeRadioFirst.getValuesFromData();

            let type2_size = [this.sizeRadioSecond.getValue()];
            if (type2_size[0] === null) type2_size = this.sizeRadioSecond.getValuesFromData();

            return {
                cable: this.$cableBtn.is(':checked') ? this.dataOptions.cable_value : null,
                length: this.$sizeBtn.val(),
                type1_size: type1_size,
                type2_size: type2_size,
                oxygen_compatibility: this.$oxygenBtn.is(':checked') ? this.dataOptions.oxygen_compatibility_value : null,
                mrk_show: this.$mrkBtn.is(':checked'),
                rvd_show: this.$rvdBtn.is(':checked')
            }
        }

        private sendData(sendData: any): void {
            $.ajax({
                type: 'POST',
                url: '/assets/base/snippets/api/api.php?task=getProducts',
                data: JSON.stringify(sendData),
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

        private prepareSendData(): void {
            const sendData: sendData = this.getFilterData();
            console.log('send');
            this.sendData(sendData);
            // заменить url (история добавлять или подменять) и new URL и в конструкторе брать URL и делать запрос с новыми данными
        }



        private createElements(): void {
            const $form: JQuery = $('<form/>', { class: 'prod-filter container' });
            $('.filter-head').after($form);

            this.createButtons();
            const $switcher = this.createSwitcher();

            const $wrap = $('<div/>', { class: 'prod-filter-wrap' });
            $wrap.append(
                this.createSelectEndGroupRadio('первой', 'zakontsovka-1', 'size1', false),
                this.createSelectEndGroupRadio('второй', 'zakontsovka-2', 'size2', true),
            );

            $form.append(
                $switcher,
                $wrap,
                this.createOxygenLengthCable()
            );
        }

        private createSwitcher(): JQuery {
            return  $('<div/>', { class: 'prod-filter-switcher' }).append(
                $('<label/>', { class: 'prod-filter-checkbox' }).append(
                    this.$mrkBtn,
                    $('<label/>', { for: 'mrk', text: 'Металлорукав' })
                ),
                $('<label/>', { class: 'prod-filter-checkbox' }).append(
                    this.$rvdBtn,
                    $('<label/>', { for: 'rvd', text: 'Рукав высокого давления' })
                )
            );
        }

        private createSelectEndGroupRadio(text: string, selectName: string, radioId: string, analog: boolean): JQuery {

            const $elem: JQuery =  $('<div/>', { class: 'prod-filter-wrap-item' }).append(
                $('<div/>').append(
                    $('<div/>', { class: 'prod-filter-wrap-item-head' }).append(
                        $('<div/>', { text: `Тип ${text} законцовки` })
                    ),
                    $('<select/>', { class: 'select hide', name: selectName })
                ),
                $('<div/>', { class: 'prod-filter-radio' }).append(
                    $('<div/>', { text: `Размер ${text} законцовки` }),
                    $('<div/>', { class: 'panel', id: radioId }),
                    $('<div/>', { class: 'forload hide', text: `Выберите тип ${text} законцовки` }),
                )
            );

            if (analog) {
                const $analog: JQuery = $('<div/>', { class: 'filter-analog' }).append(
                    $('<label/>', { class: 'prod-filter-checkbox' }).append(
                        this.$analogBtn,
                        $('<label/>', { for: 'analog', text: 'Аналогично первой' })
                    )
                );
                $elem.find('.prod-filter-wrap-item-head').append($analog);
            }

            return $elem;
        }

        private createOxygenLengthCable(): JQuery {
            return $('<div/>', { class: 'prod-filter-buttons' }).append(
                $('<div/>', { class: 'prod-filter-radio' }).append(
                    $('<div/>', { text: 'Газовая среда' }),
                    $('<div/>').append(
                        $('<label/>').append(
                            this.$oxygenBtn,
                            $('<span/>', { text: 'Кислород' })
                        ),
                        $('<label/>').append(
                            this.$notOxygenBtn,
                            $('<span/>', { text: 'Не кислород' })
                        )
                    ),
                ),
                $('<div/>', { class: 'prod-filter-length' }).append(
                    $('<div/>', { text: 'Длина (L)' }),
                    $('<div/>').append(
                        $('<label/>').append(
                            this.$sizeBtn,
                            $('<span/>', { text: 'мм' })
                        ),
                        $('<label/>', { class: 'prod-filter-checkbox' }).append(
                            this.$cableBtn,
                            $('<label/>', { for: 'cable', text: 'Трос' })
                        )
                    ),
                ),
            )
        }

        private createButtons(): void {
            this.$mrkBtn                     = $('<input/>', { id: 'mrk', type: 'checkbox', name: 'mrk' })
                .prop('checked', true);
            this.$rvdBtn                     = $('<input/>', { id: 'rvd', type: 'checkbox', name: 'rvd' })
                .prop('checked', true);
            this.$analogBtn                  = $('<input/>', { id: 'analog', type: 'checkbox', name: 'analog' })
                .prop('checked', true);

            this.$oxygenBtn                  = $('<input/>', { id: 'oxygen', type: 'radio', name: 'oxygen', value: 'on' }).prop('checked', true);
            this.$notOxygenBtn               = $('<input/>', { id: 'notOxygen', type: 'radio', name: 'oxygen', value: 'off' });
            this.$sizeBtn                    = $('<input/>', { id: 'size', type: 'number', name: 'length', min: '50', max: '100000', step: 'any', value: '1000' });
            this.$cableBtn                   = $('<input/>', { id: 'cable', type: 'checkbox', name: 'cable' });
        }
    }
}