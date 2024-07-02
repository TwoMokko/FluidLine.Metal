namespace Components {
    export class Products {
        private path                : string = 'https://fluid-line.ru/assets/snippets/product/rkv/img/';

        private $wrap               : JQuery;
        private $head               : JQuery;
        private $imgLeftCut         : JQuery;
        private $imgLeftBig         : JQuery;
        private $imgRightCut        : JQuery;
        private $imgRightBig        : JQuery;
        private $imgLeft            : JQuery;
        private $imgRight           : JQuery;
        private $symbolLeft         : JQuery;
        private $textLeft           : JQuery;
        private $symbolRight        : JQuery;
        private $textRight          : JQuery;
        private $headList           : JQuery;
        private $prodList           : JQuery;

        private $undefined          : JQuery;

        constructor($container: JQuery, title: string, hoseImage: string) {
            this.$wrap              = $('<div/>', { class: 'prod-result' });

            this.$undefined         = $('<div/>', { class: 'prod-not-found hide', text: title + ': не найдено' });
            $container.append(this.$undefined);

            this.initImage($container, title, hoseImage);
            this.initTables();
        }

        private initImage($container: JQuery, title: string, hoseImage: string) {
            this.$head              = $('<div/>', { class: 'prod-result-head', text: title });
            this.$imgLeftCut        =  $('<img/>');
            this.$imgLeftBig        =  $('<img/>');
            this.$imgRightCut       =  $('<img/>');
            this.$imgRightBig       =  $('<img/>');
            this.$imgLeft           =  $('<img/>', {class: 'zk'});
            this.$imgRight          =  $('<img/>', {class: 'zk'});
            this.$symbolLeft        = $('<span/>', {class: 'big_txt big_txt_left'});
            this.$textLeft          = $('<span/>', {class: 'large_text large_text_left'});
            this.$symbolRight       = $('<span/>', {class: 'big_txt big_txt_right'});
            this.$textRight         = $('<span/>', {class: 'large_text large_text_right'});

            $container.append(
                this.$wrap.append(
                    this.$head,
                    $('<div/>', { class: 'prod-images' }).append(
                        $('<div/>', {class: 'topw'}).append(
                            $('<div/>', {class: 'platform platform-left'}).append(
                                $('<div/>', {class: 'cutimg'}).append(
                                    this.$imgLeftCut
                                ),
                                $('<div/>', {class: 'bigimg'}).append(
                                    this.$imgLeftBig
                                )
                            ),
                            $('<div/>', {class: 'cv_cns c'}).append(
                                $('<div/>', {class: 'cccc'}).append(
                                    this.$imgLeft,
                                    $('<img/>', {class: 'imgbc', src: hoseImage}),
                                    this.$imgRight
                                )
                            ),
                            $('<div/>', {class: 'platform platform-right'}).append(
                                $('<div/>', {class: 'cutimg'}).append(
                                    this.$imgRightCut
                                ),
                                $('<div/>', {class: 'bigimg'}).append(
                                    this.$imgRightBig
                                )
                            )
                        ),
                        $('<div/>', {class: 'topw2'}).append(
                            $('<div/>').append(
                                this.$symbolLeft,
                                this.$textLeft
                            ),
                            $('<div/>').append(
                                this.$symbolRight,
                                this.$textRight
                            )
                        )
                    )
                )
            );
        }

        private initTables() {
            this.$headList = $('<tbody/>', { class: 'product-list head prettyPagetitle' });
            this.$prodList = $('<tbody/>', { class: 'product-list body prodList' });

            this.$wrap.append(
                $('<div/>', {class: 'prod-table'}).append(
                    $('<table/>', { class: 'table' }).append(
                        $('<thead/>').append(
                            $('<tr/>', { class: 'table-head' }).append(
                                $('<th/>', { text: 'Кодировка' })
                            )
                        ),
                        this.$headList
                    ),
                    $('<div/>').append(
                        $('<table/>', { class: 'table' }).append(
                            $('<thead/>').append(
                                $('<tr/>', { class: 'table-head' }).append(
                                    $('<th/>', { text: 'Количество оплеток' }),
                                    $('<th/>', { text: 'Длина L' }),
                                    $('<th/>', { text: 'Давление' }),
                                    $('<th/>', { text: 'ДУ' }),
                                    $('<th/>', { colspan: 2 }).append(
                                        $('<div/>', { text: 'Подсоединение' }),
                                        $('<div/>', { class: 'table-colspan' }).append(
                                            $('<div/>', { text: '1' }),
                                            $('<div/>', { text: '2' }),
                                        )
                                    ),
                                    $('<th/>', { text: 'Спиральная защитная' }),
                                    $('<th/>', { text: 'Совместимость с кислородом' }),
                                    $('<th/>', { text: 'Трос' }),
                                    $('<th/>', { text: 'Тепло-изоляция' }),
                                    $('<th/>', { text: 'Цена' }),
                                )
                            ),
                            this.$prodList
                        )
                    )
                )
            )
        }

        public redraw(data: itemProducts[], dataSymbols: typeDataSymbols): void {
            this.redrawTable(data);
            this.redrawImage(dataSymbols);

        }

        private redrawImage(data: typeDataSymbols): void {
            this.$imgLeftCut.attr('src', `${this.path}${data.symbolLeft}_left_cut.png`);
            this.$imgLeftBig.attr('src', `${this.path}big/${data.symbolLeft}_left_cut.png`);
            this.$imgRightCut.attr('src', `${this.path}${data.symbolRight}_right_cut.png`);
            this.$imgRightBig.attr('src', `${this.path}big/${data.symbolRight}_right_cut.png`);
            this.$imgLeft.attr('src', `${this.path}${data.symbolLeft}_left.png`);
            this.$imgRight.attr('src', `${this.path}${data.symbolRight}_right.png`);

            this.$symbolLeft.text(data.symbolLeft);
            this.$textLeft.text(data.textLeft);
            this.$symbolRight.text(data.symbolRight);
            this.$textRight.text(data.textRight);




            // const $wrapImg: JQuery = $('<div/>', { class: 'prod-images' });
            // this.$wrap1.append($wrapImg);
            //
            // const selectLeft: string = this.select1.$sourceSelect.find('option:checked').attr('value');
            // const textLeft: string = this.select1.$sourceSelect.find('option:checked').attr('text');
            // const selectRight: string = this.select2.$sourceSelect.find('option:checked').attr('value') ? this.select2.$sourceSelect.find('option:checked').attr('value') : '';
            // const textRight: string = this.select2.$sourceSelect.find('option:checked').attr('value') ? this.select2.$sourceSelect.find('option:checked').attr('text') : '';

            // const $platformLeft: JQuery<HTMLElement> = $wrapImg.find('.platform-left');
            // const $platformRight: JQuery<HTMLElement> = $wrapImg.find('.platform-right');
            //
            // const path = 'https://fluid-line.ru/assets/snippets/product/rkv/img/';
            //
            // const cutimgLeft: string = path + selectLeft + '_left_cut.png';
            // const bigimgLeft: string = path + 'big/' + selectLeft + '_left_cut.png';
            // const cutimgRight: string = path + selectRight + '_right_cut.png';
            // const bigimgRight: string = path + 'big/' + selectRight + '_right_cut.png';

            // const imgCenter = $wrapImg.find('.cccc');
            //
            // $platformLeft.find('.cutimg > img').attr('src',cutimgLeft);
            // $platformLeft.find('.bigimg > img').attr('src',bigimgLeft);
            // $platformRight.find('.cutimg > img').attr('src',cutimgRight);
            // $platformRight.find('.bigimg > img').attr('src',bigimgRight);
            //
            // imgCenter.find('> img:nth-child(1)').attr('src',path + selectLeft + '_left.png');
            // imgCenter.find('> img:nth-child(3)').attr('src',path + selectRight + '_right.png');
            //
            //
            // console.log(selectLeft, textLeft, selectRight, textRight);
            // $('.big_txt_left').text(selectLeft);
            // $('.large_text_left').text(textLeft);
            // $('.big_txt_right').text(selectRight);
            // $('.large_text_right').text(textRight);
        }

        private redrawTable(data: itemProducts[]): void {
            this.$headList.empty();
            this.$prodList.empty();

            for (const key in data) {
                const prod: itemProducts = data[key];

                this.$headList.append(
                    $('<tr/>').append(
                        $('<td/>').text(prod.prettyPagetitle)
                    )
                );

                this.$prodList.append(
                    $('<tr/>').append(
                        $('<td/>').text(prod.numberOfBraids),
                        $('<td/>').text(prod._length),
                        $('<td/>').text(prod.max_pressure),
                        $('<td/>').text(prod.dn),
                        $('<td/>').text(prod.ending1),
                        $('<td/>').text(prod.ending2),
                        $('<td/>').text(prod.protectiveSpiral),
                        $('<td/>').text(prod.os_compatibility),
                        $('<td/>').text(prod.cable),
                        $('<td/>').text(prod.thermalInsulation),
                        $('<td/>').text(prod.price),
                    )
                );
            }
        }

        public hide(): void {
            this.$wrap.addClass('hide');
        }

        public show(): void {
            this.$wrap.removeClass('hide');
        }

        public hideUndefined(): void {
            this.$undefined.addClass('hide');
        }

        public showUndefined(): void {
            this.$undefined.removeClass('hide');
        }

    }
}