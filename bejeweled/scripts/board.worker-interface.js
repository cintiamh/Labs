jewel.board = (function() {
    var dom = jewel.dom,
        settings,
        worker,
        messageCount,
        callbacks;

    function messageHandler(event) {
        // uncomment to log worker messages
        // console.log(event.data);
        var message = event.data;
        jewels = message.jewels;
        if(callbacks[message.id]) {
            callbacks[message.id](message.data);
            delete callbacks[message.id];
        }
    }

    function initialize(callback) {
        settings = jewel.settings;
        rows = settings.rows;
        cols = settings.cols;
        messageCount = 0;
        callbacks = [];
        worker = new Worker("scripts/board.worker.js");
        dom.bind(worker, "message", messageHandler);
        post("initialize", settings, callback);
    }

    function post(command, data, callback) {
        callbacks[messageCount] = callback;
        worker.postMessage({
            id: messageCount,
            command: command,
            data: data
        });
        messageCount++;
    }

    function swap(x1, y1, x2, y2, callback) {
        post("swap", {
            x1: x1,
            y1: y1,
            x2: x2,
            y2: y2
        }, callback);
    }

    return {
        initialize: initialize,
        swap: swap,
        getBoard: getBoard,
        print: print
    };
})();
