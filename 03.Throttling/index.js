


function throttling(sendMessage, timeDelay) {
    let lastCall = 0;
    return function(message){
        const now = Date.now();
        if (now - lastCall < timeDelay) {
            // If the time since the last call is less than the delay, ignore this call
            return;
        }
        lastCall = now;
        sendMessage(message);
    }
}

function sendMessage(message){
    console.log(`Sending Message ` , message);

}


let sendMessageWithThrottle = throttling(sendMessage, 5000);
// sendMessageWithThrottle();
sendMessageWithThrottle("hello");
sendMessageWithThrottle("hello world");
// sendMessageWithThrottle("hello");
// sendMessageWithThrottle("hello");


// ⚖️ Comparison Table
// Feature	Throttling	Debouncing
// Execution	Executes function at fixed intervals	Executes function after inactivity
// Timing	Runs every X ms	Runs after X ms of silence
// Example	“Allow one message every 5 seconds”	“Search only after user stops typing”
// Ideal For	Scroll, resize, button spam	Input, search, validation
// Behavior	Executes regularly	Executes only once after calm