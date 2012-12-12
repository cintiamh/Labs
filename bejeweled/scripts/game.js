jewel.game = (function() {
    var dom = jewel.dom,
        $ = dom.$;

    function setup() {
        // hide the address bar on Android devices
        if (/Android/.test(navigator.userAgent)) {
            $("html")[0].style.height = "200%";
            setTimeout(function() {
                window.scrollTo(0, 1);
            }, 0);
        }
    }

    // hide the active screen (if any) and show the screen with the specified id
    function showScreen(screenId) {
        var activeScreen = $("#game .screen.active")[0],
            screen = $("#" + screenId)[0];
        if (activeScreen) {
            dom.removeClass(screen, "active");
        }
        // run the screen module
        jewel.screens[screenId].run();
        // display the screen html
        dom.addClass(screen, "active");
    }

    // expose public methods
    return {
        showScreen : showScreen
    };
})();
