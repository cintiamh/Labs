// This avoids a runtime error if the object doesn't exist when the script is imported.
var jewel = {};

// The board worker imports the regular board module. This lets you reuse the functionality already present in the
// board module.
importScripts("board.js");

addEventListener("message", function(event) {
    var board = jewel.board,
        message = event.data;

    switch (message.command) {
        case "initialize" :
            jewel.settings = message.data;
            board.initialize(callback);
            break;
        case "swap" :
            board.swap(
                message.data.x1, message.data.y1, message.data.x2, message.data.y2, callback
            );
            break;
    }

    function callback(data) {
        postMessage({
            id: message.id,
            data: message.data,
            jewels: board.getBoard()
        });
    }
}, false);

