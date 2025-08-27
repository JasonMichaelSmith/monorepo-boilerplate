// Paste into something simple like CodePen
function init() {
    var d = new Date();
    var x = document.getElementById("time");
    x.innerHTML = d.toLocaleTimeString();
}

init();
