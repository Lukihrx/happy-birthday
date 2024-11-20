function showMessage() {
    var name = document.getElementById('nameInput').value;
    var message = "Happy Birthday, " + name + "!";
    document.getElementById('personalMessage').innerText = message;
}
