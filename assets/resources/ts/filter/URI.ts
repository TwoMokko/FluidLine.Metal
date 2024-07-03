namespace Components {
    export abstract  class URI {
        private static url              : URL;
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
            console.log('params check state: ', this.url.searchParams);
            return true;
            // return this.url.searchParams['size'];

        }

        public static toString(newFilterData: object): string {
            const uri = 'uri-test';
            this.update(uri);
            return uri;
        }

        public static update(uri: string): void {
            this.url.href = uri;
        }
    }
}