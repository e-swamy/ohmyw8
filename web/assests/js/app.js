(function ($) {
    "use strict"; // Start of use strict

    // increase decrease JS
    $('#firstinc').click(function () {
        $('.firstoutput').html(function (i, val) { return val * 1 + 1 });
    });
    $('#firstdec').click(function () {
        $('.firstoutput').html(function (i, val) { return val * 1 <= 1 ? 1 : val * 1 - 1 });
    });
    $('#secondinc').click(function () {
        $('.secondoutput').html(function (i, val) { return val * 1 + 1 });
    });
    $('#seconddec').click(function () {
        $('.secondoutput').html(function (i, val) { return val * 1 <= 1 ? 1 : val * 1 - 1 });
    });
})(jQuery);