namespace Components {
    export class NotFound {
        private notFound                : JQuery;
        constructor($wrap: JQuery) {
            this.notFound               = $('<div/>', { class: 'prod-not-found container hide' });

            $wrap.append(this.notFound);
        }

        public show(): void {
            // проверка
            this.notFound.removeClass('hide');
        }
        public hide(): void {
            // проверка
            this.notFound.addClass('hide');
        }
    }
}