namespace Components {
    class Filter {
        typeEndFirst                        : Select;
        typeEndSecond                       : Select;
        groupRadioFirst                     : Select;
        groupRadioSecond                    : Select;
        constructor() {
            this.typeEndFirst               = new Select($('.select[name="zakontsovka-1"]'));
            this.typeEndSecond              = new Select($('.select[name="zakontsovka-2"]'));

            this.groupRadioFirst            = new GroupRadio(this.dataOptions.types[this.typeEndFirst.getVal()].sizes);
            this.groupRadioSecond           = new GroupRadio();
        }

        private redraw(): void {

        }

        private fillSelectCustom(): void {
            this.select1 = new Select($('.select[name="zakontsovka-1"]'));
            this.select2 = new Select($('.select[name="zakontsovka-2"]'));

            // пока не выбран первый селект, второй не активен
            $('.select[name="zakontsovka-2"] + .select-wrap').find('.new-select').addClass('not-active');

            // навешивание событий на кастомный селект
            this.select1.on('change', this.drawButtonsSize, { id: 'sz1-', type: 'radio', name: 'size1' });
            this.select2.on('change', this.drawButtonsSize, { id: 'sz2-', type: 'radio', name: 'size2' });
        }

        private addEvent(): void {
            $('#tros').on('click', () => { this.prepareSendData(); })
            $('#size').on('change', () => { this.prepareSendData(); })
            $('#mrk').on('click', () => { this.prepareSendData(); })
            $('#rvd').on('click', () => { this.prepareSendData(); })
            $('#o21').on('click', () => { this.prepareSendData(); })
            $('#o21_2').on('click', () => { this.prepareSendData(); })
            $('#analog').on('click', () => {

                // for (const key in this.select2.$sourceOptions) {
                //
                //     if (this.select2.$sourceOptions[key].innerText === this.select1.$header[0].textContent) {
                //         this.select2.$header.text(this.select1.$header[0].textContent);
                //         let a = $(this.select2.$sourceOptions[key]);
                //         console.log(a);
                //         // $(this.select2.$sourceOptions[key]).trigger('click');
                //         // $(this.select2).trigger('change');
                //     }
                // }

                // this.select2.$sourceOption.trigger('change');
                // this.select2.$header.text(this.select1.$header[0].textContent);
                console.log('новые данные для второй законцовки')
                if ($('#analog').is(':checked')) this.prepareSendData();
            })
        }
    }
}