const snd = new Audio("assets/music/Everything But The Girl - Missing.mp3"),
    snd1 = new Audio("assets/music/ArcadeAlarm01.mp3"),
    a = document.getElementById('my');

snd.play();

function timepause() {
    setTimeout(function()
    {
        document.location.href = "./components/game.html";
    }, 1000);
}

a.onclick = function() {
    snd1.play();
    timepause();
    return false;
};