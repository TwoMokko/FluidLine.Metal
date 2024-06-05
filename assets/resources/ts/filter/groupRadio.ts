namespace Components {
    export class GroupRadio {
        typeSizeFirst                       : object = [];
        typeSizeSecond                      : object = [];

        constructor() {

        }

        private drawButtonsSize = ($select: JQuery, data: {id: string, type: string, name: string}): void => {
            const $wrap = $('.prod-filter-radio');
            const $notFound: JQuery<HTMLElement> = $('.prod-not-found');
            if (!$notFound.hasClass('hide')) $notFound.addClass('hide');
            const select2 = $('.select[name="zakontsovka-2"] + .select-wrap').find('.new-select');
            if (select2.hasClass('not-active')) select2.removeClass('not-active');

            const $wrapBtn: JQuery<HTMLElement> = $wrap.find('#' + data.name);
            const name: string = $select.val() + '';
            const sizes = this.dataOptions.types[name].sizes;

            const $forLoad = $wrapBtn.find('+ .forload');

            let sizesId = [];
            for (let key of Object.keys(this.dataOptions.types[name].sizes)) {
                sizesId.push(key)
            }

            switch (data.name) {
                case 'size1': this.typeSizeFirst = sizesId; break;
                case 'size2': this.typeSizeSecond = sizesId; break;
                default: this.typeSizeFirst = []; this.typeSizeSecond = []; break;
            }

            $wrapBtn.empty();
            $forLoad.addClass('hide');

            for (let i in sizes) {
                let id: string = data.id + i;
                $wrapBtn.append(
                    $('<div/>').append(
                        $('<input/>', {id: id, type: data.type, name: data.name})
                            .on('change', (event) => {
                                switch (data.name) {
                                    case 'size1': this.typeSizeFirst = [i]; break;
                                    case 'size2': this.typeSizeSecond = [i]; break;
                                    default: this.typeSizeFirst = sizes; this.typeSizeSecond = sizes; break;
                                }

                                this.prepareSendData();
                            }),
                        $('<label/>', {
                            for: id,
                            text: sizes[i]
                        })
                    )
                )
            }

            this.prepareSendData();
        }
    }
}