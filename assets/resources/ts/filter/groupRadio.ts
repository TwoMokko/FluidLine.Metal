namespace Components {

    type GroupRadioOptions      = {name: string};
    type GroupRadioData         = {[key: string]: string};

    export class GroupRadio {
        private options         : GroupRadioOptions;
        private data            : GroupRadioData;
        private disabled        : boolean;

        private  $container     : JQuery;
        private  $wrap          : JQuery;

        constructor($container: JQuery, data: GroupRadioData, options: GroupRadioOptions) {
            this.$container     = $container;
            this.options        = options;
            this.$wrap          = $('<div/>', {class: 'component GroupRadio'});

            this.restructure(data);

            this.$container.append(this.$wrap);

            this.$wrap.on('click', 'input', () => { if (this.disabled) return false; });
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
            this.disabled = true;
            this.$wrap.addClass('disabled');
        }
        public removeDisabled(): void {
            this.disabled = false;
            this.$wrap.removeClass('disabled');
        }

        public on(event: string, func: Function, data: {[key: string]: any} = {}): void {
            switch (event) {
                case 'change': this.$wrap.on('change', 'input', (event) => {
                    func(event.target, data);
                }); break;
                default: console.warn('Event not found'); break;
            }
        }

    }
}