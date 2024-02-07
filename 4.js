function showMessage() {
    alert("Час минув!");
}

document.getElementById("timeForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const timeInSeconds = parseInt(document.getElementById("timeInput").value);


    setTimeout(showMessage, timeInSeconds * 1000);
});