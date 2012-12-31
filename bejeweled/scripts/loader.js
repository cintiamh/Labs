var jewel = {
    screens : {},
    settings : {
        rows : 8,
        cols : 8,
        baseScore : 100,
        numJewelTypes : 7
    }
};

// wait until main document is loaded
window.addEventListener("load", function(){
    Modernizr.addTest("standalone", function() {
        return(window.navigator.standalone != false);
    });

    // extend yepnope with preloading
    yepnope.addPrefix("preload", function(resource){
        resource.noexec = true;
        return resource;
    });

    // start dynamic loading
    // loading stage 1
    Modernizr.load([
        {
            // these files are always loaded
            load : [
                "scripts/sizzle.js",
                "scripts/dom.js",
                "scripts/game.js"//,
                //"scripts/screen.splash.js",
                //"scripts/screen.main-menu.js"
            ]//,
            // called when all files have finished loading and executing
            //complete: function() {
                // show the first screen
            //    jewel.game.showScreen("splash-screen");
            //}
        },{
            test : Modernizr.standalone,
            yep: "scripts/screen.splash.js",
            nope: "scripts/screen.install.js",
            complete: function() {
                if (Modernizr.standalone) {
                    jewel.game.showScreen("splash-screen");
                } else {
                    jewel.game.showScreen("install-screen");
                }
            }
        }
    ]);

    // loading stage 2
    if (Modernizr.standalone) {
        Modernizr.load([
            {
                load: [
                    "scripts/screen.main-menu.js"
                ]
            }, {
                test: Modernizr.webworkers,
                yep: [
                    "scripts/board.worker-interface.js",
                    "preload!scripts/board.worker.js"
                ],
                nope: "scripts/board.js"
            }
        ]);
    }

}, false);
