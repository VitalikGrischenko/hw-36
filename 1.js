let intervalId;

let messageCount = 0;

function showMessage() {
    messageCount++;
    console.log("Повідомлення " + messageCount);
    if (messageCount === 5) {
        clearInterval(intervalId);
        console.log("Інтервал зупинено після 5 повідомлень.");
    }
}

intervalId = setInterval(showMessage, 1000);