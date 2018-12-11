/*global define */
define([
    'jquery',
    'configurable',
    'bootstrap_select'
], function ($, configurable) {
    'use strict'

    $.widget('retorica.fgvConfigurable', configurable,{
        _create: function () {
            this._super()
        },
        _fillSelect: function (element) {
            this._super(element);
            $('#'+element.id).selectpicker({
              size: 4
            });
            $('#'+element.id).selectpicker("refresh");
        },
        _configureElement: function (element) {
            this._super(element);
            $('#'+element.id).selectpicker({
              size: 4
            });
            $('#'+element.id).selectpicker("refresh");
        },
        _resetChildren: function (element) {
            this._super(element);
            _.each(element.childSettings, function (set) {
                $('#'+set.id).selectpicker("refresh");
            });
        },


    })

    return $.retorica.fgvConfigurable
})
