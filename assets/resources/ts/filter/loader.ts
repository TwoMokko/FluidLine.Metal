namespace Components {
    export class Loader {
        $loaderFilter                   : JQuery;

        constructor($loaderWrap: JQuery<HTMLElement>, className: string, show: boolean = true) {
            this.$loaderFilter = $('<div/>', {class: className}).append(
                $('<div/>', {class: 'loader'}),
                $('<div/>', {class: 'loader-text', text: 'Загрузка...'})
            );

            if (!show) this.hide();

            $loaderWrap.append(this.$loaderFilter);
        }

        public show(): void {
            this.$loaderFilter.removeClass('hide');
        }

        public hide(): void {
            this.$loaderFilter.addClass('hide');
        }
    }
}