function sendMessage() {
    let input = document.getElementById("userInput").value;
    let chatbox = document.getElementById("chatbox");

    chatbox.innerHTML += "<p><b>You:</b> " + input + "</p>";

    let reply = getBotReply(input);

    chatbox.innerHTML += "<p><b>Bot:</b> " + reply + "</p>";

    document.getElementById("userInput").value = "";
}

function getBotReply(input) {
    input = input.toLowerCase();

    if (input.includes("hello")) {
        return "Hey! How can I help you?";
    } 
    else if (input.includes("ai")) {
        return "AI stands for Artificial Intelligence.";
    } 
    else if (input.includes("python")) {
        return "Python is a popular programming language.";
    } 
    else {
        return "Sorry I don't understand that.";
    }
}