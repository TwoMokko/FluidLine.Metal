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
declare function createElement(tagName: string, className: string | null, textContent: string | null, container: HTMLElement | null): any;
declare function showForm(url: string, method: string, title: string, from: string, countProductCode: number | null): void;
declare function createInputsMessage(form: HTMLFormElement): void;
declare function createInputsPhoneAndEmail(form: HTMLFormElement): void;
declare function showBurger(open: boolean): void;
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
    class Filter {
        typeEndFirst: Select;
        typeEndSecond: Select;
        sizeRadioFirst: GroupRadio;
        sizeRadioSecond: GroupRadio;
        dataOptions: filterOptions;
        callback: Function;
        $mrkBtn: JQuery;
        $rvdBtn: JQuery;
        $analogBtn: JQuery;
        $oxygenBtn: JQuery;
        $notOxygenBtn: JQuery;
        $sizeBtn: JQuery;
        $cableBtn: JQuery;
        constructor(callback: Function, dataOptions: filterOptions);
        private restructureSelects;
        private initButtons;
        private getFilterData;
        private sendData;
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
    types: typesFilterOptions;
    oxygen_compatibility_value: string;
    cable_value: string;
};
type typesFilterOptions = {
    [key: string]: itemFilterOptions;
};
interface itemProducts {
    pagetitle: string;
    price: string;
    stock_count: string;
    ending1: string;
    ending2: string;
    numberOfBraids: string;
    dn: string;
    cable: string;
    protectiveSpiral: string;
    thermalInsulation: string;
    degreasing: string;
    outerCoating: string;
    bending_radius: string;
    max_pressure: string;
    os_compatibility: string;
    _length: string;
    prettyPagetitle: string;
}
interface itemDataProducts {
    products: itemProducts[];
    count_all: number;
    table_id: number;
}
type dataProducts = {
    [key: string]: itemDataProducts;
};
type sendData = {
    cable: string;
    length: string | number | string[];
    type1_size: string[];
    type2_size: string[];
    oxygen_compatibility: string;
    mrk_show: boolean;
    rvd_show: boolean;
};
declare namespace Components {
    class FilterManager {
        private dataOptions;
        private dataProducts;
        private filter;
        private notFound;
        private productsMrk;
        private productsRvd;
        private loaderFilter;
        private loaderProducts;
        private $wrapProducts;
        constructor();
        private init;
        private redraw;
        private getFilterOption;
    }
}
declare namespace Components {
    class FilterOLD {
        $loaderFilter: JQuery;
        dataOptions: filterOptions;
        dataProducts: any;
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
        private prepareSendData;
        private prepareDrawTable;
        private drawTable;
        private drawImage;
        private addEvent;
        private sendData;
    }
}
declare namespace Components {
    type GroupRadioOptions = {
        name: string;
    };
    type GroupRadioData = {
        [key: string]: string;
    };
    export class GroupRadio {
        private options;
        private data;
        private $wrap;
        constructor($wrap: JQuery, data: GroupRadioData, options: GroupRadioOptions);
        restructure(data: GroupRadioData): void;
        private getInputs;
        private getInput;
        getValue(): string | null;
        getValuesFromData(): any[];
        on(event: string, func: Function, data?: {
            [key: string]: any;
        }): void;
    }
    export {};
}
declare namespace Components {
    class Loader {
        $loaderFilter: JQuery;
        isLoad: boolean;
        constructor($loaderWrap: JQuery<HTMLElement>, className: string);
        show(): void;
        hide(): void;
    }
}
declare namespace Components {
    class NotFound {
        private notFound;
        constructor($wrap: JQuery);
        show(): void;
        hide(): void;
    }
}
declare namespace Components {
    class Products {
        private dataProducts;
        private $wrap;
        private $headList;
        private $prodList;
        constructor();
        drawProducts(dataProducts: itemProducts[], $wrap: JQuery, head: string): void;
        private drawImage;
        private drawTable;
        private createTableTemplate;
        private cleanTable;
        private fillTable;
    }
}
declare namespace Components {
    class Select {
        $sourceSelect: JQuery;
        $sourceOptions: JQuery;
        private readonly $header;
        private $list;
        private isOpen;
        private isSelect;
        private readonly duration;
        constructor($sourceSelect: JQuery);
        static factory($sourceSelect: JQuery): Select[];
        private getOptions;
        private getOption;
        private switchSelect;
        private open;
        private close;
        getIsSelect(): boolean;
        getValue(): string;
        restructure(data: {
            [key: string]: string;
        }): void;
        on(event: string, func: Function, data?: {
            [key: string]: any;
        }): void;
    }
}
