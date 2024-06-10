namespace Components {
    export class Products {
        private dataProducts                                : itemProducts[];

        private $wrap                                       : JQuery;
        private $headList                                   : JQuery;
        private $prodList                                   : JQuery;

        constructor() {

        }

        public drawProducts(dataProducts: itemProducts[], $wrap: JQuery, head: string): void {
            this.dataProducts = dataProducts;
            this.$wrap = $wrap;

            this.$wrap.empty();

            this.$wrap.append($('<div/>', { class: 'prod-result-head', text: head }));

            this.$headList = $('<tbody/>', { class: 'product-list head prettyPagetitle' });
            this.$prodList = $('<tbody/>', { class: 'product-list body prodList' });
            /* логика с notfound и loader */


            // const $notFound: JQuery<HTMLElement> = $('.prod-not-found');
            //
            // const productsMrk = this.dataProducts['mrk'].products;
            // const productsRvd = this.dataProducts['rkv'].products;

            // $('.loader-table').addClass('hide');
            //
            // if (!this.dataProducts.length) {
            //     $notFound.removeClass('hide')
            // }

            // if (this.dataProducts.length /* && $('#mrk').is(':checked')*/) {
            //     const $resultMrk = $('#result_mrk');
            //     this.drawImage();
            //     this.drawTable();
            // }
            this.drawImage();
            this.drawTable();

        }

        private drawImage(): void {
            // const $wrapImg: JQuery = $('<div/>', { class: 'prod-images' });
            // this.$wrap.append($wrapImg);
            //
            // const selectLeft: string = this.select1.$sourceSelect.find('option:checked').attr('value');
            // const textLeft: string = this.select1.$sourceSelect.find('option:checked').attr('text');
            // const selectRight: string = this.select2.$sourceSelect.find('option:checked').attr('value') ? this.select2.$sourceSelect.find('option:checked').attr('value') : '';
            // const textRight: string = this.select2.$sourceSelect.find('option:checked').attr('value') ? this.select2.$sourceSelect.find('option:checked').attr('text') : '';
            //
            // const $platformLeft: JQuery<HTMLElement> = $wrapImg.find('.platform-left');
            // const $platformRight: JQuery<HTMLElement> = $wrapImg.find('.platform-right');
            //
            // const path = 'https://fluid-line.ru/assets/snippets/product/rkv/img/';
            //
            // const cutimgLeft: string = path + selectLeft + '_left_cut.png';
            // const bigimgLeft: string = path + 'big/' + selectLeft + '_left_cut.png';
            // const cutimgRight: string = path + selectRight + '_right_cut.png';
            // const bigimgRight: string = path + 'big/' + selectRight + '_right_cut.png';
            //
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



        private drawTable(): void {
            this.createTableTemplate();
            this.cleanTable();
            this.fillTable();

            /* Вынести показать скрыть в отдельный метод */
            // this.$wrap.removeClass('hide');

        }

        private createTableTemplate(): void {
            const $wrapTable = $('<div/>', { class: 'prod-table' });
            this.$wrap.append(
                $wrapTable.append(
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
                    ),
                )
            );
        }

        private cleanTable(): void {
            this.$headList.empty();
            this.$prodList.empty();
        }

        private fillTable(): void {
            for (const key in this.dataProducts) {
                const prod: itemProducts = this.dataProducts[key];

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
    }
}