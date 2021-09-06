
(function ($) {
    "use strict"; // Start of use strict

    
    $('#sidebarToggle, #mobile-menu').on('click', function (event) {
        event.preventDefault();
        $("body").toggleClass("sb-sidenav-toggled");
    });

    // mCustomScrollbar
    $(".sb-sidenav-menu").mCustomScrollbar({
        autoHideScrollbar: true,
        theme: "light"
    });
    
})(jQuery);

