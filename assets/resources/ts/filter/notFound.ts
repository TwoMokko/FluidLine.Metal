namespace Components {
    export class NotFound {
        private notFound            : JQuery;
        constructor($wrap: JQuery) {
            this.notFound           = $('<div/>', { class: '' });
            $wrap.append(this.notFound);
        }

        public show(): void {
            this.notFound.removeClass('hide');
        }
        public hide(): void {
            this.notFound.addClass('hide');
        }
    }
}