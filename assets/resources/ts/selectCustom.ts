namespace Components {
    export class Select {
        public $sourceSelect                    : JQuery;
        public $sourceOptions                   : JQuery;

        private readonly $header                : JQuery;
        private $list                           : JQuery;

        private isOpen                          : boolean;  // флаг, состояние: открыт или закрыт селект
        private isSelect                        : boolean;  // флаг, состояние: выбрано что-то или нет
        private readonly duration               : number;   // анимация

        public constructor($sourceSelect: JQuery) {
            this.isSelect = false;
            this.isOpen = false;
            this.duration = 450;

            this.$sourceSelect = $sourceSelect;
            this.$sourceOptions = $sourceSelect.children('option');

            $sourceSelect.hide();

            /* Create Elements */
            const $wrap = $('<div/>', {class: 'select-wrap'});
            this.$header = $('<div>', {
                class: 'new-select',
                text: this.$sourceOptions.filter(':selected').text()
            });

            this.$list = $('<div>', {
                class: 'new-select-list'
            });

            /* Building DOM */
            $wrap.append(
                this.$header,
                this.$list.append(
                    this.getOptions()
                )
            );

            /* Events */
            this.$header.on('click', () => { this.switchSelect(); });

            $sourceSelect.after($wrap);

            this.$list.slideUp(0);
        }

        public static factory($sourceSelect: JQuery): Select[] {
            let $out: Select[] = [];
            for (let i: number = 0; i < $sourceSelect.length; i++) {
                let select: Select = new Select($sourceSelect.eq(Number(i)));
                $out.push(select);
            }
            return $out;
        }

        private getOptions(): JQuery[] {
            let $options: JQuery[]= [];
            for (let i: number = 1; i < this.$sourceSelect.children('option').length; i++) {
                $options.push(this.getOption(this.$sourceOptions.eq(i)));
            }
            return $options;
        }

        private getOption($sourceOption: JQuery): JQuery {
            let text: string = $sourceOption.text();

            let $option: JQuery<HTMLElement> = $('<div>', {
                class: 'new-select-list-item',
                html: $('<span>', {
                    text: text
                }),
            });

            $option.on('click', (): void => {
                this.$sourceOptions.filter(':selected').removeAttr('selected');
                $sourceOption.attr('selected', 'selected');
                this.isSelect = true;
                $sourceOption.trigger('change');
                this.$header.text(text);

                this.close();
            });

            return $option;
        }

        private switchSelect(): void {
            this.isOpen ? this.close() : this.open();
        }

        private open(): void {
            this.isOpen = true;
            this.$header.addClass('on');
            this.$list.slideDown(this.duration);
        }

        private close(): void {
            this.isOpen = false;
            this.$header.removeClass('on');
            this.$list.slideUp(this.duration);
        }

        public getIsSelect(): boolean {
            return this.isSelect;
        }

        /* Навешивание события: при изменении селекта срабатывает переданная процедура */
        public on(event: string, func: Function, data: {[key: string]: any} = {}): void {
            switch (event) {
                case 'change': this.$sourceSelect.on('change', () => { func(this.$sourceSelect, data); }); break;
                default: console.warn('Event not found'); break;
            }
        }
    }
}