function checkCode() {
    let digit1 = document.getElementById("digit1").value;
    let digit2 = document.getElementById("digit2").value;
    let digit3 = document.getElementById("digit3").value;
    let message = document.getElementById("message");

    const correctCode = "743"; // Secret code

    if (digit1 + digit2 + digit3 === correctCode) {
        message.textContent = "✅ Correct! The heist begins...";
        message.style.color = "lightgreen";
        setTimeout(() => {
            window.location.href = "game.html"; // Start the game
        }, 2000);
    } else {
        message.textContent = "❌ Wrong code! The police caught you!";
        message.style.color = "red";
        setTimeout(() => {
            window.location.href = "index.html"; // Redirect home
        }, 2000);
    }
}
