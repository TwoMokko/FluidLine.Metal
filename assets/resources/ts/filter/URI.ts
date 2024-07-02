namespace Components {
    export abstract  class URI {
        private static url         : URL;
        private static data        : any;

        public static setURL(/*sendData: sendData*/): void {
            this.url = new URL(window.location.href);
            console.log(this.url);
            // for (const key in sendData) {
            //     if ((key === 'type1_size' || key === 'type2_size') && sendData[key].length > 1) {
            //         this.url.searchParams.set(key, null);
            //     }
            //     else {
            //         this.url.searchParams.set(key, sendData[key]);
            //     }
            // }
        }

        // public static addHistory(): void {
        //     history.pushState({}, '', this.url.href);
        // }

        public static getParams(): any {
            // if (!this.setState()) return false;
            this.data = {
                sendData: {
                    cable: this.url.searchParams.get('cable'),
                    length: this.url.searchParams.get('length'),
                    type1_size: this.url.searchParams.getAll('type1_size'),
                    type2_size: this.url.searchParams.getAll('type2_size'),
                    oxygen_compatibility: this.url.searchParams.get('oxygen_compatibility'),
                    mrk_show: (this.url.searchParams.get('mrk_show') === 'true'),
                    rvd_show: (this.url.searchParams.get('rvd_show') === 'true'),
                },
                additionally: {
                    analog: (this.url.searchParams.get('analog') === 'true'),
                    select1: this.url.searchParams.get('select1'),
                    select2: this.url.searchParams.get('select2'),
                }
            }
            return this.data;
        }

        public static setState(): boolean {
            return !this.url.searchParams['size'];

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