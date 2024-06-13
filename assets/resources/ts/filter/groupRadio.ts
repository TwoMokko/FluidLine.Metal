namespace Components {

    type GroupRadioOptions      = {name: string};
    type GroupRadioData         = {[key: string]: string};

    export class GroupRadio {
        private options         : GroupRadioOptions;
        private data            : GroupRadioData;

        private  $container     : JQuery;
        private  $wrap          : JQuery;

        constructor($container: JQuery, data: GroupRadioData, options: GroupRadioOptions) {
            this.$container     = $container;
            this.options        = options;
            this.$wrap          = $('<div/>', {class: 'component GroupRadio'});

            this.restructure(data);

            this.$container.append(this.$wrap);
        }

        public restructure(data: GroupRadioData): void {
            this.data = data;

            this.$wrap.empty();
            this.$wrap.append(
                this.getInputs()
            );
        }

        private getInputs(): JQuery[] {
            let $inputs = [];
            for (const key in this.data) {
                $inputs.push(this.getInput(key, this.data[key]));
            }

            return $inputs;
        }

        private getInput(value: string, text: string): JQuery {
            let $label = $('<label/>')
            let $input = $('<input/>', {type: 'radio', value: value, name: this.options.name});

            $label.append(
                $input,
                $('<span/>').text(text)
            );

            return $label;
        }

        public getValue(): string | null {
            let val = this.$wrap.find('input:checked').val() as string;
            return (val !== undefined) ? val : null;
        }

        public setValue(value: string | null, event: boolean = true): void {
            if (!event) {
                // console.log(this.$wrap.find(`[value=${value}]`));
                this.$wrap.find(`[value=${value}]`).attr('checked', 'checked')
                return;
            }
            this.$wrap.find(`[value=${value}]`).trigger('click');
        }

        public getValuesFromData() {
            let out = [];
            for (const key in this.data) {
                out.push(key);
            }
            return out;
        }

        public addDisabled(): void {
            this.$wrap.find('span').addClass('disabled');
        }
        public removeDisabled(): void {
            this.$wrap.find('span').removeClass('disabled');
        }

        public on(event: string, func: Function, data: {[key: string]: any} = {}): void {
            switch (event) {
                case 'change': this.$wrap.on('change', 'input', (event) => {
                    if (event.target.hasClass('disabled')) {
                        return;
                    }
                    func(event.target, data);
                }); break;
                default: console.warn('Event not found'); break;
            }
        }


        // public redraw = ($select: JQuery, data: {id: string, type: string, name: string}): void => {
        //     // const $wrap = $('.prod-filter-radio');
        //     const $notFound: JQuery<HTMLElement> = $('.prod-not-found');
        //     if (!$notFound.hasClass('hide')) $notFound.addClass('hide');
        //     const select2 = $('.select[name="zakontsovka-2"] + .select-wrap').find('.new-select');
        //     if (select2.hasClass('not-active')) select2.removeClass('not-active');
        //
        //     const $wrapBtn: JQuery<HTMLElement> = this.$wrap.find('#' + data.name);
        //     // const name: string = $select.val() + '';
        //     // const sizes = this.dataOptions.types[name].sizes;
        //
        //     const $forLoad = $wrapBtn.find('+ .forload');
        //
        //     // let sizesId = [];
        //     for (let key of Object.keys(this.sizes)) {
        //         this.typeSize.push(key)
        //     }
        //
        //     // switch (data.name) {
        //     //     case 'size1': this.typeSizeFirst = sizesId; break;
        //     //     case 'size2': this.typeSizeSecond = sizesId; break;
        //     //     default: this.typeSizeFirst = []; this.typeSizeSecond = []; break;
        //     // }
        //
        //     $wrapBtn.empty();
        //     // $forLoad.addClass('hide');
        //     Loader.hide();
        //
        //     for (let i in this.sizes) {
        //         let id: string = data.id + i;
        //         $wrapBtn.append(
        //             $('<div/>').append(
        //                 $('<input/>', {id: id, type: data.type, name: data.name})
        //                     .on('change', (event) => {
        //                         this.typeSize = () ? [i] : this.sizes;
        //                         // switch (data.name) {
        //                         //     case 'size1': this.typeSizeFirst = [i]; break;
        //                         //     case 'size2': this.typeSizeSecond = [i]; break;
        //                         //     default: this.typeSizeFirst = this.sizes; this.typeSizeSecond = this.sizes; break;
        //                         // }
        //
        //                         this.prepareSendData();
        //                     }),
        //                 $('<label/>', {
        //                     for: id,
        //                     text: this.sizes[i]
        //                 })
        //             )
        //         )
        //     }
        //
        //     this.prepareSendData();
        // }
    }
}