$(document).ready(function () {
    "use strict";

    var pop = $("#pop"), curtain = $("#curtain"), wHeight = $(window).height(), wWidth = $(window).width(), popUpHeight = $("#pop").height(), popUpWidth = $("#pop").width();

    // show pop up
    $("#showPopUp").on("click", function () {

        // set pop up at the center of the page
        pop.css({
            "top": (wHeight - popUpHeight) / 2 + "px",
            "left": (wWidth - popUpWidth) / 2 + "px"
        });

        // show curtain
        curtain.fadeIn(320);

        // hide window scrool bars
        document.body.style.overflow = "hidden";

        // show pop up
        pop.fadeIn(300);
    });

    // hide pop up
    $("#hidePopUp").on("click", function () {

        // hide pop up
        pop.fadeOut(300);

        // hide curtain
        curtain.fadeOut(320);

        // show window scrool bars
        document.body.style.overflow = "visible";
    });

});