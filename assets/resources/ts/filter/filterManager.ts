interface itemFilterOptions {
    id                                  : number,
    description                         : string,
    img_href                            : string,
    sizes                               : {[key: string]: string}
}

type filterOptions = {
    types                               : typesFilterOptions,
    oxygen_compatibility_value          : string,
    cable_value                         : string,
}

type typesFilterOptions =  {
    [key: string]: itemFilterOptions
}

interface itemProducts {
    pagetitle                           : string,
    price                               : string,
    stock_count                         : string,
    ending1                             : string,
    ending2                             : string,
    numberOfBraids                      : string,
    dn                                  : string,
    cable                               : string,
    protectiveSpiral                    : string,
    thermalInsulation                   : string,
    degreasing                          : string,
    outerCoating                        : string,
    bending_radius                      : string,
    max_pressure                        : string,
    os_compatibility                    : string,
    _length                             : string,
    prettyPagetitle                     : string,
}

interface itemDataProducts {
    products                            : itemProducts[],
    count_all                           : number,
    table_id                            : number
}

type dataProducts = { [key: string]: itemDataProducts }

type sendData = {
    cable: string,
    length: string | number | string[],
    type1_size: string[],
    type2_size: string[],
    oxygen_compatibility: string,
    mrk_show: boolean,
    rvd_show: boolean
}

namespace Components {
    export class FilterManager {
        private dataOptions                 : filterOptions;
        private dataProducts                : dataProducts;

        private filter                      : Filter;
        private notFound                    : NotFound;
        private productsMrk                 : Products;
        private productsRvd                 : Products;
        private loaderFilter                : Loader;
        private loaderProducts              : Loader;

        private $wrapProducts               : JQuery;
        private $wrapProductsMrk               : JQuery;
        private $wrapProductsRvd               : JQuery;

        constructor() {
            this.loaderFilter               = new Loader($('main'), 'loader-wrap loader-table');
            this.getFilterOption().then((data: filterOptions) => {
                this.init(data);
                this.loaderFilter.hide();
            });
        }

        private init(data: filterOptions): void {
            this.dataOptions                = data;

            this.$wrapProducts              = $('.prod-result-wrap');
            this.$wrapProductsMrk           = $('<div/>', { class: '.prod-result' });
            this.$wrapProductsRvd           = $('<div/>', { class: '.prod-result' });

            this.$wrapProducts.append(
                this.$wrapProductsMrk,
                this.$wrapProductsRvd
            )
            // this.loaderFilter               = new Loader($('.wrap-filter'), 'loader-wrap loader-filter');
            this.loaderProducts             = new Loader(this.$wrapProducts, 'loader-wrap loader-table');
            this.filter                     = new Filter((dataProducts: dataProducts) => {
                this.redraw(dataProducts);
            }, this.dataOptions);
            this.productsMrk                = new Products();
            this.productsRvd                = new Products();
            this.notFound                   = new NotFound(this.$wrapProducts);
        }

        private redraw(dataProducts: dataProducts) {
            //рендер, условия в зависимости какие пришли данные

            this.loaderProducts.hide();
            this.notFound.hide();

            this.$wrapProductsMrk.empty();
            this.$wrapProductsRvd.empty();

            if (!dataProducts['mrk'].products.length && !dataProducts['rkv'].products.length) {
                this.notFound.show();
                return;
            }
            if (dataProducts['mrk'].products.length) this.productsMrk.drawProducts(dataProducts['mrk'].products, this.$wrapProductsMrk, 'Металлорукава');
            if (dataProducts['rkv'].products.length) this.productsRvd.drawProducts(dataProducts['rkv'].products, this.$wrapProductsRvd, 'Рукава высокого давления');
        }

        private async getFilterOption(): Promise<filterOptions> {
            let response = await fetch('/assets/base/snippets/api/api.php?task=filterOptions');
            return await response.json();

        }
    }
}