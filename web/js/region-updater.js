/*global define */
define([
    'jquery',
    'regionUpdater',
    'bootstrap_select'
], function ($, regionUpdater) {
    'use strict'
    $.widget('retorica.fgvRegionUpdater', regionUpdater, {
        _create: function () {
            this._super()
            this.element.selectpicker({
              size: 4
            });
            $(this.options.regionListId).selectpicker({
              size: 4
            });
        },

        /**
         * Update dropdown list based on the country selected
         *
         * @param {String} country - 2 uppercase letter for country code
         * @private
         */
        _updateRegion: function (country) {
            this._super(country)
            $(this.options.regionListId).selectpicker('refresh')
        }
    })

    return $.retorica.fgvRegionUpdater
})
