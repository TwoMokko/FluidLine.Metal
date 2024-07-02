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
};

type typesFilterOptions =  {
    [key: string]: itemFilterOptions
};

type typeDataSymbols = {
    symbolLeft: string,
    textLeft: string,
    symbolRight: string,
    textRight: string
};

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
        // private loaderFilter                : Loader;
        private pathData                    : string = '/assets/base/snippets/api/api.php?task=filterOptions';
        // private pathData                    : string = '/data.php';

        private loaderProducts              : Loader;
        private $wrapProducts               : JQuery;

        constructor($container: JQuery) {
            // TODO: переписать это
            $('.filter-head').addClass('hide');
            $('.prod-text').addClass('hide');
            $('.carousel').addClass('hide');
            $('.carousel-head').addClass('hide');

            this.loaderProducts             = new Loader($container, 'loader-wrap loader-table', false);
            this.loaderProducts.show();
            // this.loaderFilter               = new Loader($container, 'loader-wrap loader-table');
            this.getFilterOption().then((data: filterOptions) => {
                this.init($container, data);
                // this.loaderFilter.hide();
            });
        }

        private init($container: JQuery, data: filterOptions): void {
            this.dataOptions                = data;

            this.$wrapProducts              = $('<div/>', {class: 'prod-result-wrap'});

            // this.loaderProducts             = new Loader($container, 'loader-wrap loader-table', false);

            this.filter                     = new Filter(() => {
                this.$wrapProducts.addClass('hide');
                this.loaderProducts.show();
            }, (dataProducts: dataProducts) => {
                this.$wrapProducts.removeClass('hide');
                this.loaderProducts.hide();

                // TODO: переписать это
                $('.filter-head').removeClass('hide');
                $('.prod-text').removeClass('hide');
                $('.carousel').removeClass('hide');
                $('.carousel-head').removeClass('hide');

                this.filter.showFilter();
                this.redraw(dataProducts);
            }, this.dataOptions);
            this.productsMrk                = new Products(this.$wrapProducts, 'Металлорукав', 'https://fluid-line.ru/assets/snippets/product/rkv/img/mr_main.png');
            this.productsRvd                = new Products(this.$wrapProducts, 'Рукав высокого давления', 'https://fluid-line.ru/assets/snippets/product/rkv/img/rkv_main.png');
            this.notFound                   = new NotFound(this.$wrapProducts);

            $container.append(this.$wrapProducts);
        }

        private redraw(dataProducts: dataProducts) {
            dataProducts['mrk'].products.length || dataProducts['rkv'].products.length ? this.showProducts(dataProducts) : this.hideProducts();
        }

        private showProducts(dataProducts: dataProducts) {
            this.notFound.hide();

            this.productsMrk.hideUndefined();
            this.productsRvd.hideUndefined();
            this.productsMrk.hide();
            this.productsRvd.hide();

            const dataSymbols: typeDataSymbols = this.filter.getSymbols();

            console.log(dataProducts);

            if (dataProducts['mrk'].products.length) {
                console.log('mrk');
                this.productsMrk.redraw(dataProducts['mrk'].products, dataSymbols);
                this.productsMrk.show();
            }
            if (dataProducts['rkv'].products.length) {
                console.log('rvd');
                this.productsRvd.redraw(dataProducts['rkv'].products, dataSymbols);
                this.productsRvd.show();
            }

            if (this.filter.check('#mrk') && !dataProducts['mrk'].products.length) {
                console.log('mrk here');
                this.productsMrk.showUndefined();
            }
            if (this.filter.check('#rvd') && !dataProducts['rkv'].products.length) {
                console.log('rvd here');
                this.productsRvd.showUndefined();
            }
        }

        private hideProducts() {
            this.productsMrk.hideUndefined();
            this.productsRvd.hideUndefined();
            this.productsMrk.hide();
            this.productsRvd.hide();
            this.notFound.show();
        }

        private async getFilterOption(): Promise<filterOptions> {
            let response = await fetch(this.pathData);
            return await response.json();

        }
    }
}