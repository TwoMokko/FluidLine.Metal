namespace Components {
    export abstract  class URI {
        public static url              : URL;
        private static sendData         : sendData;

        public static init(/*sendData: sendData*/): void {
            this.url = new URL(window.location.href);
        }

        // public static addHistory(): void {
        //     history.pushState({}, '', this.url.href);
        // }

        public static getParams(): {[key: string]: string} {
            let out = {};
            for (const [key, value] of this.url.searchParams.entries()) {
                out[key] = value;
            }

            return out;
        }

        public static checkState(): boolean {
            return true;
            // return this.url.searchParams['size'];

        }

        public static toString(newFilterData: object): string {
            for (const key in newFilterData) {
                if ((key === 'type1_size' || key === 'type2_size') && newFilterData[key].length > 1) {
                    this.url.searchParams.set(key, 'null');
                    continue;
                }
                this.url.searchParams.set(key, newFilterData[key]);
            }
            return this.url.href;
        }

        public static update(uri: string): void {
            // this.url.href = 'aaa';
            this.url.href = uri;
            // this.url.href = this.url.origin + uri;
        }
    }
}