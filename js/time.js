const x = new Date().getHours();
if (x >= 0 && x < 12) {
    document.querySelector(".time").innerHTML = "Good Morning"
    document.querySelector(".times").innerHTML = "Good Morning"
}
else if (x >= 12 && x < 16) {
    document.querySelector(".time").innerHTML = "Good Afternoon"
    document.querySelector(".times").innerHTML = "Good Afternoon"
}
else if (x >= 16 && x < 20) {
    document.querySelector(".time").innerHTML = "Good Evening"
    document.querySelector(".times").innerHTML = "Good Evening"
}
else if (x >= 20 && x < 24) {
    document.querySelector(".time").innerHTML = "Good Night"
    document.querySelector(".times").innerHTML = "Good Night"
}