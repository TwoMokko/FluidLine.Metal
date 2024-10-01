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
        firstElement                    : number | null;
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
            // this.$left.on('click', () => this.toLeft());

            this.$source.after(
                this.$wrap
            );

        }

        private init($source: JQuery): void {
            this.countDisplayElems = 6;
            this.countScrollElems = 3;
            this.lastElement = null;
            this.firstElement = null;
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
            if (current >= this.countElements - 1) return 0;
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

            this.$content.addClass('animated');

            let num = this.lastElement;
            for (let i: number = 1; i <= this.countScrollElems; i++) {
                num = this.getNext(num);
                this.append(num);
            }

            this.lastElement = num;
            // this.firstElement = this.getPrevious(num - this.countScrollElems - 1);
            this.shift('left'); // сдвинуть
            setTimeout(() => { this.removeScrollElements('first-child') }, 1000); // удалить первые

            this.scrolling = false;
        }
        // private getPrevious(current: number | null): number {
        //     if (current === null) return this.countElements - 1;
        //     if (current === 0) return this.countElements - 1;
        //     return current - 1;
        // }
        //
        // private prepend(num: number): void {
        //     this.$content.prepend(
        //         $(this.$elements[num]).clone()
        //     )
        // }
        //
        // private toLeft() {
        //     if (this.scrolling) return;
        //     this.scrolling = true;
        //
        //     this.$content.addClass('animated');
        //
        //     let num = this.firstElement;
        //     for (let i: number = 1; i <= this.countScrollElems; i++) {
        //         num = this.getPrevious(num);
        //         this.prepend(num);
        //     }
        //
        //     this.firstElement = num;
        //     this.lastElement = this.getNext(num + this.countScrollElems);
        //
        //
        //     this.shift('right'); // сдвинуть
        //     setTimeout(() => { this.removeScrollElements('last-child') }, 1000); // удалить первые
        //
        //     this.scrolling = false;
        // }

        private shift(orientation: string): void {
            let shift = - (this.$content.children(':first-child').width() * this.countScrollElems);
            this.$content.css(`margin-${orientation}`, shift);
        }

        private removeScrollElements(orientation: string):  void {
            this.$content.removeClass('animated');
            this.$content.css('margin-left', 0);
            for (let i: number = 1; i <= this.countScrollElems; i++) {
                this.$content.children(`:${orientation}`).remove();
            }
        }

    }

}