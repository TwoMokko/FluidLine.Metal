declare namespace Components {
    class Carousel {
        $source: JQuery;
        $wrap: JQuery;
        $elements: JQuery;
        $scroll: JQuery;
        $content: JQuery;
        $arrows: JQuery;
        $left: JQuery;
        $right: JQuery;
        countDisplayElems: number;
        countScrollElems: number;
        lastElement: number | null;
        countElements: number;
        scrolling: boolean;
        constructor($source: JQuery);
        private init;
        private getNext;
        private append;
        private toRight;
    }
}
interface itemFilterOptions {
    id: number;
    description: string;
    img_href: string;
    sizes: {
        [key: string]: string;
    };
}
type filterOptions = {
    types: {
        [key: string]: itemFilterOptions;
    };
    oxygen_compatibility_value: string;
    cable_value: string;
};
declare namespace Components {
    class Filter {
        $loader: JQuery;
        data: filterOptions;
        isLoad: boolean;
        select1: Select;
        select2: Select;
        typeSize1: object;
        typeSize2: object;
        constructor();
        private setFilterOption;
        private showLoader;
        private hideLoader;
        private fillSelectSource;
        private fillSelectCustom;
        private drawButtonsSize;
        private collectData;
        private changeTypeSize;
    }
}
declare function createElement(tagName: string, className: string | null, textContent: string | null, container: HTMLElement | null): any;
declare function showForm(url: string, method: string, title: string, from: string, countProductCode: number | null): void;
declare function createInputsMessage(form: HTMLFormElement): void;
declare function createInputsPhoneAndEmail(form: HTMLFormElement): void;
declare namespace Common {
    /**
     * Менеджер работы с окнами
     */
    export class Window {
        private static windows;
        private static iter;
        static windowsHTML: Element;
        static content: Element;
        static create(title: string | null, content: Element): Instance;
        static remove(id: number): void;
    }
    /**
     * Работа с окнами
     */
    class Instance {
        private readonly id;
        private readonly instance;
        constructor(id: number, title: string | null, content: Element | string);
        close(): void;
        private remove;
    }
    export {};
}
type TypeResponseError = {
    state: 'error';
    body: {
        'message': string;
    };
};
type TypeResponseOk = {
    state: 'ok';
    body: any;
};
type TypeResponse = TypeResponseOk | TypeResponseError;
declare namespace Common {
    class Request {
        static sendXHR(formData: FormData, url: string, func?: Function): void;
        static send(formData: FormData, url: string, func?: Function): void;
        private static response;
        static sendFormXHR(form: HTMLFormElement, func?: Function): void;
        static sendFormXHRnoAction(form: HTMLFormElement, url: string, func?: Function): void;
        static sendForm(form: HTMLFormElement, func?: Function): void;
        static sendFormNoAction(form: HTMLFormElement, url: string, func?: Function): void;
        static sendData(data: {
            [key: string]: string | boolean | number;
        }, url: string, func?: Function): void;
        static sendJQ(url: string, func?: Function): void;
    }
}
declare namespace Components {
    class Select {
        private readonly $sourceSelect;
        private $sourceOptions;
        private readonly $header;
        private $list;
        private isOpen;
        private readonly duration;
        constructor($sourceSelect: JQuery);
        static factory($sourceSelect: JQuery): Select[];
        private getOptions;
        private getOption;
        private switchSelect;
        private open;
        private close;
        on(event: string, func: Function, data?: {
            [key: string]: any;
        }): void;
    }
}
