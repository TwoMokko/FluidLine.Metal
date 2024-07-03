namespace Components {
    export abstract  class URI {
        private static url              : URL;
        private static sendData         : sendData;

        public static init(/*sendData: sendData*/): void {
            this.url = new URL(window.location.href);
            console.log(this.url);
        }

        // public static addHistory(): void {
        //     history.pushState({}, '', this.url.href);
        // }

        public static getParams(): sendData {
            // if (!this.checkState()) return false;
            this.sendData = {
                cable: this.url.searchParams.get('cable'),
                length: this.url.searchParams.get('length'),
                type1_size: this.url.searchParams.getAll('type1_size'),
                type2_size: this.url.searchParams.getAll('type2_size'),
                oxygen_compatibility: this.url.searchParams.get('oxygen_compatibility'),
                mrk_show: (this.url.searchParams.get('mrk_show') === 'true'),
                rvd_show: (this.url.searchParams.get('rvd_show') === 'true'),
                analog: (this.url.searchParams.get('analog') === 'true'),
                type1_end: this.url.searchParams.get('type1_end'),
                type2_end: this.url.searchParams.get('type2_end'),

            }
            return this.sendData;
        }

        public static checkState(): boolean {
            console.log('params check state: ', this.url.searchParams);
            return this.url.searchParams['size'];

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