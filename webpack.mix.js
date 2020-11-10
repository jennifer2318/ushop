const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.config.babelConfig =
{
    "plugins": [
        [
            // "@babel/plugin-proposal-decorators", { "legacy": true },

            //Minify
            // "@babel/plugin-transform-minify-booleans",
            // "@babel/plugin-minify-builtins",
            // "@babel/plugin-minify-dead-code-elimination", { "optimizeRawSize": true },
            // "@babel/plugin-minify-mangle-names",
            // "@babel/plugin-minify-numeric-literals",
            // "@babel/plugin-minify-simplify",
            // "@babel/plugin-transform-simplify-comparison-operators",
            // "@babel/plugin-minify-type-constructors",
            // "@babel/plugin-transform-member-expression-literals",

            //Experimental
            // "@babel/plugin-proposal-nullish-coalescing-operator",

            // Other
            // "@babel/plugin-transform-minify-booleans",
            // "minify-builtins",
            // "minify-dead-code-elimination", { "optimizeRawSize": true },
            // "minify-mangle-names",
            // "minify-numeric-literals",
            // "minify-simplify",
            // "transform-simplify-comparison-operators",
            "@babel/plugin-proposal-class-properties", { "loose": true },
        ],
    ]
};

mix.js('resources/js/app.js', 'public/js')
    .js('resources/js/loader.js', 'public/js')
    .scripts(['resources/js/polyfill.js'], 'public/js/polyfill.js')
    .copy('public/js/app.js', 'resources/frontend/js/app.js')
    .copy('resources/frontend/css/main.css', 'public/css/app.css')
    // .sass('resources/frontend/css/main.sass', 'public/css')
    .copy('resources/frontend/css/fontawesome/fontawesome.css', 'public/css/fontawesome.css')
    .copy('resources/frontend/css/main.css.map', 'public/css/app.css.map');
    // .copy('public/js/polyfill.js', 'resources/frontend/js/polyfill.js');
