var config = {

    deps: [
        "js/main",
    ],
    paths: {
        'bootstrap_select': ["//cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.13.2/js/bootstrap-select.min"],
        'bootstrap': ["//stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.bundle.min"],
        'slick': ["//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min"],
        'perfect_scrollbar': 'js/perfect-scrollbar',
        'fgvRegionUpdater':'js/region-updater',
        'fgvConfigurable': 'js/configurable'
    },
    map: {
        '*': {
            //'bootstrap_bundle':'js/bootstrap.bundle.min',
            //'bootstrap_select': "//cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.13.2/js/bootstrap-select.min"
        }
    },
    "shim": {
        'bootstrap_select': {
            deps: ['jquery','bootstrap']
        },
        'slick': {
            deps: ['jquery']
        },
        'perfect_scrollbar': {
            deps: ['jquery']
        }
    }
};
