/*jslint browser: true*/
/*global $, jQuery, alert*/
$(document).ready(function () {
    'use strict';
    var openweath = "//api.openweathermap.org/data/2.5/weather?lat=51.46&lon=-2.6&appid=cd5d1b218b56cc19fd423497c76cdc4b";
    $.getJSON(openweath, function (weath) {
        var icon = "//openweathermap.org/img/w/" + weath.weather[0].icon + ".png";
        $("#city").text(weath.name);
        $("#description").text(weath.weather[0].description);
        $("#wind").text(weath.wind.speed);
        $("#temperture1").text(weath.main.temp);
        $("#temperture2").html("<img src=" + icon + ">");


/* Switch statements for changing background colors*/
        switch (weath.weather[0].icon) {
        case "01d": case "02d": case "03d": case "04d":
            $("#body").addClass("clear");
            break;
        case "01n": case "02n": case "03n": case "04n":
                $("#body").addClass("clearnight");
                break;
        case "09d": case "09n": case "10d": case "10n": case "13d": case "13n":
            $("#body").addClass("raining");
          break;
        case "11d": case "11n":
            $("#body").addClass("lightning");
          break;
        case "50d": case "50n":
              $("#body").addClass("foggy");
            break;
        }
    });
/* Buttons changing the temperture measurements*/
    $("#btn1").click(function () {
        $.getJSON(openweath + "&units=imperial", function (fahrenheit) {
            $("#temperture1").text(fahrenheit.main.temp);
        });
    });

    $("#btn2").click(function () {
        $.getJSON(openweath + "&units=metric", function (weath) {
            $("#temperture1").text(weath.main.temp);
        });
    });

    $("#btn3").click(function () {
        $.getJSON(openweath, function (kelvin) {
            $("#temperture1").text(kelvin.main.temp);
        });
    });

});
