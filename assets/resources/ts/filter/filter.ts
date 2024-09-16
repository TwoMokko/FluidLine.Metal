namespace Components {
    import Event = JQuery.Event;

    export class Filter {
        private typeEndFirst                : Select;
        private typeEndSecond               : Select;
        private sizeRadioFirst              : GroupRadio;
        private sizeRadioSecond             : GroupRadio;
        private analog                      : boolean;
        pathData                            : string = '/assets/base/snippets/api/api.php?task=getProducts';
        // pathData                            : string = '/pdata.php';

        private dataOptions                 : filterOptions;
        private sendData                    : sendData;

        private callBeforeSend              : Function;
        private callAfterSend               : Function;

        private $form                       : JQuery;
        private $mrkBtn                     : JQuery;
        private $rvdBtn                     : JQuery;

        private $analogBtn                  : JQuery;
        private $oxygenBtn                  : JQuery;
        private $notOxygenBtn               : JQuery;
        private $sizeBtn                    : JQuery;
        private $cableBtn                   : JQuery;

        constructor(callBeforeSend: Function, callAfterSend: Function, dataOptions: filterOptions) {
            this.analog                     = true;
            this.callBeforeSend             = callBeforeSend;
            this.callAfterSend              = callAfterSend;
            this.dataOptions                = dataOptions;

            this.createElements();

            // новый код
            URI.init();
            let dataURI = URI.getParams();
            let data = this.prepareFilterData(dataURI);
            window.onpopstate = (event: any) => { this.popStateEvent(event); }
            // разделила везде препар сенд дата и сенд дата, надо ли
            // вставлять ли разные данные при вызове сенд дата?
            // до сюда

            this.typeEndFirst               = new Select($('.select[name="zakontsovka-1"]'));
            this.typeEndSecond              = new Select($('.select[name="zakontsovka-2"]'));

            this.restructureSelects();

            if (dataURI.length) {
                this.$mrkBtn.prop('checked', data.mrk_show);
                this.$rvdBtn.prop('checked', data.rvd_show);
                this.setAnalog(data.analog);
            }
            this.typeEndFirst.setValue(data.type1_end.toUpperCase(), false);
            // проверить аналог, добавить в сенд дата аналог
            this.sizeRadioFirst            = new GroupRadio($('#size1'), this.dataOptions.types[this.typeEndFirst.getValue()].sizes, {name: 'size1'});
            this.sizeRadioSecond           = new GroupRadio($('#size2'), this.dataOptions.types[this.typeEndSecond.getValue()].sizes, {name: 'size2'});

            this.typeEndSecond.addDisabled();
            this.sizeRadioSecond.addDisabled();

            // выбрать кнопку размера
            if (dataURI.length && data.type1_size) this.sizeRadioFirst.setValue(data.type1_size.toString(), false);
            if (dataURI.length && data.type2_size) this.sizeRadioSecond.setValue(data.type2_size.toString(), false);

            if (this.analog) {
                this.useAnalog();
            } else {
                this.typeEndSecond.setValue(data.type2_end.toUpperCase(), false);
                this.$analogBtn.prop('checked', false);
                this.typeEndSecond.removeDisabled();
                this.sizeRadioSecond.removeDisabled();
            }

            // перенести в проверку if (dataURI.length)
            this.$sizeBtn.val(data.length);
            this.$cableBtn.prop('checked', data.cable);
            this.$oxygenBtn.prop('checked', data.oxygen_compatibility);
            this.$notOxygenBtn.prop('checked', !data.oxygen_compatibility);

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
            this.$analogBtn.on('change', (e: JQuery.ChangeEvent) => {
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

                    this.sendData = this.getFilterData();
                    const uri = URI.toString(this.sendData);
                    history.pushState({}, '', uri);
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
                rvd_show: this.$rvdBtn.is(':checked'),
                type1_end: this.typeEndFirst.getValue(),
                type2_end: this.typeEndSecond.getValue(),
                analog: this.analog
            }
        }

        private send(): void {
            $.ajax({
                type: 'POST',
                url: this.pathData,
                data: JSON.stringify(this.sendData),
                dataType: 'json',
                success: (dataProducts: dataProducts): void => {
                    this.callAfterSend(dataProducts);

                    console.log('SUCCESS:');
                },
                error: (jqXHR, textStatus, errorThrown): void => {
                    console.log('ERROR: ' + textStatus + ", " + errorThrown);
                    console.log(jqXHR);
                }
            });
        }

        private prepareSendData(pushState: boolean = true): void {
            this.callBeforeSend();
            this.sendData = this.getFilterData();

            const uri = URI.toString(this.sendData);
            if (pushState) history.pushState({}, '', uri);
        }



        private createElements(): void {
            this.$form = $('<form/>', { class: 'prod-filter hide' });

            $('.filter-head').after(this.$form);

            this.createButtons();
            const $switcher = this.createSwitcher();

            const $wrap = $('<div/>', { class: 'prod-filter-wrap' });
            $wrap.append(
                this.createSelectEndGroupRadio('первой', 'zakontsovka-1', 'size1', false),
                this.createSelectEndGroupRadio('второй', 'zakontsovka-2', 'size2', true),
            );

            this.$form.append(
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

            this.$oxygenBtn                  = $('<input/>', { id: 'oxygen', type: 'radio', name: 'oxygen', value: 'on' });
            this.$notOxygenBtn               = $('<input/>', { id: 'notOxygen', type: 'radio', name: 'oxygen', value: 'off' });
            this.$sizeBtn                    = $('<input/>', { id: 'size', type: 'number', name: 'length', min: '50', max: '100000', step: 'any', value: '1000' });
            this.$cableBtn                   = $('<input/>', { id: 'cable', type: 'checkbox', name: 'cable' });
        }

        public getSymbols(): typeDataSymbols {
            return {
                symbolLeft: this.typeEndFirst.getValue(),
                textLeft: this.typeEndFirst.getText().split(' - ')[1],
                symbolRight: this.typeEndSecond.getValue(),
                textRight: this.typeEndSecond.getText().split(' - ')[1],
            };
        }

        public showFilter(): void {
            this.$form.removeClass('hide');
        }

        public check(selector: string): boolean {
            return $(selector).is(':checked');
        }

        // новый код
        public prepareFilterData(data: {[key: string]: string}): sendData {
            let type1_end = data.type1_end ?? 'A';
            let type2_end = data.type2_end ?? 'A';

            return {
                cable: data.cable === '2' ? '2' : null,
                length: data.length ?? '1000',
                type1_size: [data.type1_size] ?? Object.keys(this.dataOptions.types[type1_end].sizes),
                type2_size: [data.type2_size] ?? Object.keys(this.dataOptions.types[type2_end].sizes),
                oxygen_compatibility: data.oxygen_compatibility === '2' ? '2' : null,
                mrk_show: data.mrk_show === 'true' ? true : null,
                rvd_show: data.rvd_show === 'true' ? true : null,
                type1_end: type1_end,
                type2_end: type2_end,
                analog: data.analog === 'true'
            }
        }

        public popStateEvent(event: Event): void {
            URI.init();
            let dataURI = URI.getParams();
            let data = this.prepareFilterData(dataURI);

            this.restructureSelects();

            if (dataURI.length) {
                this.$mrkBtn.prop('checked', data.mrk_show);
                this.$rvdBtn.prop('checked', data.rvd_show);
                this.setAnalog(data.analog);
            }
            this.typeEndFirst.setValue(data.type1_end.toUpperCase(), false);
            // проверить аналог, добавить в сенд дата аналог

            this.sizeRadioFirst.restructure(this.dataOptions.types[this.typeEndFirst.getValue()].sizes);
            this.sizeRadioSecond.restructure(this.dataOptions.types[this.typeEndSecond.getValue()].sizes);

            this.typeEndSecond.addDisabled();
            this.sizeRadioSecond.addDisabled();

            // выбрать кнопку размера
            if (dataURI.length && data.type1_size) this.sizeRadioFirst.setValue(data.type1_size.toString(), false);
            if (dataURI.length && data.type2_size) this.sizeRadioSecond.setValue(data.type2_size.toString(), false);

            if (this.analog) {
                this.useAnalog();
            } else {
                this.typeEndSecond.setValue(data.type2_end.toUpperCase(), false);
                this.$analogBtn.prop('checked', false);
                this.typeEndSecond.removeDisabled();
                this.sizeRadioSecond.removeDisabled();
            }

            // перенести в проверку if (dataURI.length)
            this.$sizeBtn.val(data.length);
            this.$cableBtn.prop('checked', data.cable);
            this.$oxygenBtn.prop('checked', data.oxygen_compatibility);
            this.$notOxygenBtn.prop('checked', !data.oxygen_compatibility);

            this.prepareSendData(false);
            this.send();
            // const uri = URI.toString(this.sendData);
            // URI.update();
            // history.pushState({}, '', uri);
        }
    }
}