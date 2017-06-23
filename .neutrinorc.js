module.exports = {
    use: [
        ['neutrino-preset-react', {
            /* preset options */

            // Example: disable Hot Module Replacement
            hot: true,

            // Example: change the page title
            html: {
                title: 'Kudoh | Reserve your spot',
                googleAnalytics: {
                    trackingId: "UA-101542013-1",
                    pageViewOnLoad: true
                },
                meta: [{
                        name: 'description',
                        content: 'Credit sharing made simple.'
                    },
                    {
                        name: 'theme-color',
                        content: '#C811ED'
                    },
                    {
                        property: "og:description",
                        content: "Credit sharing made simple."
                    },
                    {
                        property: "og:image",
                        content: "http://kudoh.club/static/cover.png"
                    },
                    {
                        property: "og:locale",
                        content: "en_US"
                    },
                    {
                        property: "og:type",
                        content: "website"
                    },
                    {
                        property: "og:url",
                        content: "https://kudoh.club"
                    },
                    {
                        name: "twitter:site",
                        content: "@kudohclub"
                    },
                    {
                        name: "twitter:title",
                        content: "Kudoh"
                    },
                    {
                        name: "twitter:card",
                        content: "summary"
                    },
                    {
                        name: "twitter:description",
                        content: "Credit sharing made simple."
                    }
                ],
                mobile: true,
                links: [{
                        "rel": "shortcut icon",
                        "href": "/static/favicon.png"
                    },
                    {
                        "rel": "manifest",
                        "href": "/manifest.json"
                    },
                    {
                        "href": "/",
                        "rel": "canonical",
                        "hreflang": "en-us"
                    },
                    {
                        "type": "text/plain",
                        "rel": "author",
                        "href": "/humans.txt"
                    }
                ]
            }
        }]
    ]
};
