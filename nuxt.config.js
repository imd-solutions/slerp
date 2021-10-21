// const fetch = require('node-fetch');

var webpack = require("webpack");
// Set the client title here.
const TITLE = process.env.CLIENT_NAME;
// Set the graphql url from here.
const GRAPHQL_URL = process.env.GRAPHQL_URL;

export default {
    debug: true,
    middleware({redirect}) {
        // Redirect to the login page if.
        return redirect("/login");
    },
    render: {
        fallback: false,
        gzip: false,
    },
    loading: false,

    // Global page headers (https://go.nuxtjs.dev/config-head)
    head: {
        title: TITLE,
        meta: [
            {charset: "utf-8"},
            {name: "viewport", content: "width=device-width, initial-scale=1"},
            // { hid: "description", name: "description", content: "" },
        ],
        link: [
            {rel: "icon", type: "image/x-icon", href: "/favicon.ico"},
            {
                rel: "stylesheet",
                href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
            },
            {
                rel: "stylesheet",
                href: "https://cdnjs.cloudflare.com/ajax/libs/bulma/0.9.3/css/bulma.min.css"
            },
            {
                rel: "stylesheet",
                href: "https://cdn.jsdelivr.net/npm/bulma-pageloader@0.3.0/dist/css/bulma-pageloader.min.css"
            }
        ],
        script: [],
    },

    // Global CSS (https://go.nuxtjs.dev/config-css)
    css: [
        "~assets/sass/main.scss",
    ],

    pageTransition: "fade",

    // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
    plugins: [],

    // Auto import components (https://go.nuxtjs.dev/config-components)
    components: true,

    // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
    buildModules: [
        // https://go.nuxtjs.dev/typescript
        "@nuxt/typescript-build",
        "@nuxtjs/dotenv",
    ],
    // Modules (https://go.nuxtjs.dev/config-modules)
    modules: ["@nuxtjs/apollo"],
    apollo: {
        tokenName: "bearerToken", // optional, default: apollo-token

        cookieAttributes: {
            /**

             * Define when the cookie will be removed. Value can be a Number

             * which will be interpreted as days from time of creation or a

             * Date instance. If omitted, the cookie becomes a session cookie.

             */

            expires: 7, // optional, default: 7 (days)

            /**

             * Define the path where the cookie is available. Defaults to '/'

             */

            path: "/", // optional

            /**

             * Define the domain where the cookie is available. Defaults to

             * the domain of the page where the cookie was created.

             */

            domain: "example.com", // optional

            /**

             * A Boolean indicating if the cookie transmission requires a

             * secure protocol (https). Defaults to false.

             */

            secure: false,
        },

        includeNodeModules: true, // optional, default: false (this includes graphql-tag for node_modules folder)

        authenticationType: "Basic", // optional, default: 'Bearer'

        // (Optional) Default 'apollo' definition

        defaultOptions: {
            // See 'apollo' definition

            // For example: default query options

            $query: {
                errorPolicy: "none",

                loadingKey: "loading",

                fetchPolicy: "cache-and-network",
            },
        },

        // optional

        errorHandler: "~/plugins/apollo-error-handler.js",

        // required

        clientConfigs: {
            default: {
                // required
                httpEndpoint: GRAPHQL_URL,

                // optional
                // See https://www.apollographql.com/docs/link/links/http.html#options

                httpLinkOptions: {
                    credentials: "same-origin",
                },


                // You can use `wss` for secure connection (recommended in production)

                // Use `null` to disable subscriptions

                //wsEndpoint: 'ws://localhost:4000', // optional

                // LocalStorage token

                tokenName: "bearerToken", // optional

                // Enable Automatic Query persisting with Apollo Engine

                persisting: false, // Optional

                // Use websockets for everything (no HTTP)

                // You need to pass a `wsEndpoint` for this to work

                websocketsOnly: false, // Optional
            },

            //dipo: '~/plugins/upload-apollo-config.js'

            // upload: {

            //   httpEndpoint: 'http://localhost:4000/graphql',

            // }

            upload: {
                httpEndpoint: GRAPHQL_URL,
            },
        },
    },

    // Build Configuration (https://go.nuxtjs.dev/config-build)
    build: {
        extractCSS: true,
        postcss: {
            plugins: {
                "postcss-custom-properties": false,
            },
        },
    },
};
