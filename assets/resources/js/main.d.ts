/// <reference types="jquery" />
/// <reference types="jquery" />
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
        firstElement: number | null;
        countElements: number;
        scrolling: boolean;
        constructor($source: JQuery);
        private init;
        private getNext;
        private append;
        private toRight;
        private shift;
        private removeScrollElements;
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
    abstract class URI {
        static url: URL;
        private static sendData;
        static init(): void;
        static getParams(): {
            [key: string]: string;
        };
        static checkState(): boolean;
        static toString(newFilterData: object): string;
        static update(uri: string): void;
    }
}
declare namespace Components {
    import Event = JQuery.Event;
    class Filter {
        private typeEndFirst;
        private typeEndSecond;
        private sizeRadioFirst;
        private sizeRadioSecond;
        private analog;
        pathData: string;
        private dataOptions;
        private sendData;
        private callBeforeSend;
        private callAfterSend;
        private $form;
        private $mrkBtn;
        private $rvdBtn;
        private $analogBtn;
        private $oxygenBtn;
        private $notOxygenBtn;
        private $sizeBtn;
        private $cableBtn;
        constructor(callBeforeSend: Function, callAfterSend: Function, dataOptions: filterOptions);
        private restructureSelects;
        private setAnalog;
        private useAnalog;
        private useAnalogForGroupRadio;
        private getFilterData;
        private send;
        private prepareSendData;
        private createElements;
        private createSwitcher;
        private createSelectEndGroupRadio;
        private createOxygenLengthCable;
        private createButtons;
        getSymbols(): typeDataSymbols;
        showFilter(): void;
        check(selector: string): boolean;
        prepareFilterData(data: {
            [key: string]: string;
        }): sendData;
        popStateEvent(event: Event): void;
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
type typeDataSymbols = {
    symbolLeft: string;
    textLeft: string;
    symbolRight: string;
    textRight: string;
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
    type1_end: string;
    type2_end: string;
    analog: boolean;
};
declare namespace Components {
    class FilterManager {
        private dataOptions;
        private dataProducts;
        private filter;
        private notFound;
        private productsMrk;
        private productsRvd;
        private pathData;
        private loaderProducts;
        private $wrapProducts;
        constructor($container: JQuery);
        private init;
        private redraw;
        private showProducts;
        private hideProducts;
        private getFilterOption;
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
        private disabled;
        private $container;
        private $wrap;
        constructor($container: JQuery, data: GroupRadioData, options: GroupRadioOptions);
        restructure(data: GroupRadioData): void;
        private getInputs;
        private getInput;
        getValue(): string | null;
        setValue(value: string | null, event?: boolean): void;
        getValuesFromData(): any[];
        addDisabled(): void;
        removeDisabled(): void;
        on(event: string, func: Function, data?: {
            [key: string]: any;
        }): void;
    }
    export {};
}
declare namespace Components {
    class Loader {
        $loaderFilter: JQuery;
        constructor($loaderWrap: JQuery<HTMLElement>, className: string, show?: boolean);
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
        private path;
        private $wrap;
        private $head;
        private $imgLeftCut;
        private $imgLeftBig;
        private $imgRightCut;
        private $imgRightBig;
        private $imgLeft;
        private $imgRight;
        private $symbolLeft;
        private $textLeft;
        private $symbolRight;
        private $textRight;
        private $headList;
        private $prodList;
        private $undefined;
        constructor($container: JQuery, title: string, hoseImage: string);
        private initImage;
        private initTables;
        redraw(data: itemProducts[], dataSymbols: typeDataSymbols): void;
        private redrawImage;
        private redrawTable;
        hide(): void;
        show(): void;
        hideUndefined(): void;
        showUndefined(): void;
    }
}
declare namespace Components {
    class Select {
        $sourceSelect: JQuery;
        $sourceOptions: JQuery;
        private readonly $header;
        private $list;
        private $imgWrapHover;
        private $imgHover;
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
        getText(): string;
        setValue(value: string, event?: boolean): void;
        restructure(data: {
            [key: string]: string;
        }): void;
        addDisabled(): void;
        removeDisabled(): void;
        on(event: string, func: Function, data?: {
            [key: string]: any;
        }): void;
    }
}
