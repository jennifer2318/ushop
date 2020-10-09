class Loader {

    constructor(cfg) {
        if(cfg !== null) {
            this.config = cfg;
            this.load();
        }
    }

    load() {
        const cfg = this.config;

        cfg.js.sort(function (a, b) {
            if (a.index > b.index) {
                return 1;
            }
            if (a.index < b.index) {
                return -1;
            }
            return 0;
        });

        const body = document.querySelector('body');

        Array.prototype.forEach.call(cfg.js, (v, k) => {

            if(v.hasOwnProperty('url')) {

                let script = document.createElement('script');
                script.type = "text/javascript";
                script.src = v.url;
    
                if (v.type === 'async') {
                    script.async = 1;
                    script.defer = 0;
                }
    
                if (v.type === 'defer') {
                    script.defer = 1;
                    script.async = 0;
                }
    
                body.append(script)
            }

        });
    }
}

document.addEventListener('DOMContentLoaded', function() {

    new Loader(window.LoaderConfig);
    
});