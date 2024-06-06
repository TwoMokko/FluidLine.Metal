namespace Components {
    export class Loader {
        $loaderFilter               : JQuery;
        isLoad                      : boolean;

        constructor($loaderWrap: JQuery<HTMLElement>, className: string) {
            this.$loaderFilter = $loaderWrap.append('<div/>').addClass(className);
            this.isLoad = true;
        }

        public show(): void {
            this.isLoad = true;
            this.$loaderFilter.removeClass('hide');
        }
        public hide(): void {
            this.isLoad = false;
            this.$loaderFilter.addClass('hide');
        }
    }
}