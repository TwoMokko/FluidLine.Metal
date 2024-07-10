namespace Components {

    export class Carousel {
        $source                         : JQuery;
        $wrap                           : JQuery;
        $elements                       : JQuery;
        $scroll                         : JQuery;
        $content                        : JQuery;
        $arrows                         : JQuery;
        $left                           : JQuery;
        $right                          : JQuery;

        countDisplayElems               : number;
        countScrollElems                : number;
        lastElement                     : number | null;
        countElements                   : number;
        scrolling                       : boolean;

        constructor($source: JQuery) {
            this.$source                = $source;
            this.$elements              = $source.children();

            this.$source.hide();

            /* Create elements */
            this.$wrap                  = $('<div/>', {class: 'inner'});//components carousel
            this.$scroll                = $('<div/>', {class: 'carousel-inner'});//scroll
            this.$content               = $('<div/>', {class: 'images animated'});//content
            this.$arrows                = $('<div/>', {class: 'arrows'});
            this.$left                  = $('<div/>', {class: 'control left'});
            this.$right                 = $('<div/>', {class: 'control right'});

            /* Building DOM */
            this.$wrap.append(
                this.$scroll.append(
                    this.$content
                ),
                this.$arrows.append(
                    this.$left,
                    this.$right
                )
            );

            this.init($source);

            /* Events */
            this.$right.on('click', () => this.toRight());

            this.$source.after(
                this.$wrap
            );

        }

        private init($source: JQuery): void {
            this.countDisplayElems = 6;
            this.countScrollElems = 3;
            this.lastElement = null;
            this.countElements = this.$elements.length;
            this.scrolling = false;

            let num = this.lastElement;
            for (let i = 1; i <= this.countDisplayElems; i++) {
                num = this.getNext(num);
                this.append(num);
            }
            this.lastElement = num;
        }

        private getNext(current: number | null): number {
            if (current === null) return 0;
            if (current === this.countElements - 1) return 0;
            return current + 1;
        }

        private append(num: number): void {
            this.$content.append(
                $(this.$elements[num]).clone()
            )
        }

        private toRight() {
            if (this.scrolling) return;
            this.scrolling = true;

            let num = this.lastElement;
            for (let i = 1; i <= this.countDisplayElems; i++) {
                num = this.getNext(num);
                this.append(num);
            }

            this.scrolling = false;
        }

    }

}