(function($) {

    "use strict";

    $(window).on("load", function() {

    /* ----------------------------------------------------------- */
    /*  PRELOADER
    /* ----------------------------------------------------------- */

        // PRELOADER
        $("body").toggleClass("loaded");
        setTimeout(function() {
            $("body").addClass("loaded");
        }, 3000);

    });

})(jQuery);