const snd = new Audio("../assets/music/RollinRock.ogg"),
    snd1 = new Audio("../assets/music/ArcadeAlarm01.mp3");

let a = document.getElementById('my');

setTimeout(() => document.getElementById('cout').innerText = window.location.search.replace('?', ''), 300);

snd.play();

function timepause() {
    setTimeout(function()
    {
        document.location.href = "game.html";
    }, 1000);
}

a.onclick = function() {
    snd1.play();
    timepause();
    return false;
};