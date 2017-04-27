/*jslint browser: true*/
/*global $, jQuery, alert*/
$(document).ready(function () {
    'use strict';
    var openweath = "https://api.apixu.com/v1/current.json?key=3a7cb5154ea145f5ad1164925172604&q=Bristol";
    $.getJSON(openweath, function (weath) {
        var icon = "https:" + weath.current.condition.icon;
        $("#city").text(weath.location.name);
        $("#description").text(weath.current.condition.text);
        $("#wind").text(weath.current.wind_mph);
        $("#temperture1").text(weath.current.temp_c + "ºC");
        $("#temperture2").html("<img src=" + icon + ">");

/* Buttons channing the temperture mesurements*/
        $("#btn1").click(function () {
            $("#temperture1").text(weath.current.temp_c + "ºC");
        });


        $("#btn2").click(function () {
            $("#temperture1").text(weath.current.temp_f + "ºF");
        });


    });

});
