let n = 3, m = 6, i = 0, j = 0, k = 0, l = 1,
    a = document.getElementById('my');

const snd = new Audio("../assets/music/Everything But The Girl - Missing.mp3"),
    snd1 = new Audio("../assets/music/ArcadeChirpDescend01.mp3"),
    snd2 = new Audio("../assets/music/ArcadeAlarm01.mp3");

snd.play();

function timepause() {
    setTimeout(function()
    {
        document.location.href = "game.html";
    }, 1000);
}
a.onclick = function() {
    snd2.play();
    timepause();
    return false;
};


let e = document.getElementById("sum");
e.innerText = 0;
let arr = ['3H', '3S', '4C', '4D', '4H', '4S', '5C', '5D', '5H', '5S',
    '0C', '0D', '0H', '0S', '2C', '2D', '2H', '2S', '3C', '3D',
    '6C', '6D', '6H', '6S', '7C', '7D', '7H', '7S', '8C', '8D',
    '8H', '8S', '9C', '9D', '9H', '9S', 'AC', 'AD', 'AH', 'AS',
    'JC', 'JD', 'JH', 'JS', 'KC', 'KD', 'KH', 'KS', 'QC', 'QD',
    'QH', 'QS'];


function compareRandom(a, b) {
    return Math.random() - 0.5;
}
arr.sort(compareRandom); //встряхиваем массив arr
let mass = [arr[0], arr[1], arr[2], arr[3], arr[4], arr[5], arr[6], arr[7], arr[8],
    arr[0], arr[1], arr[2], arr[3], arr[4], arr[5], arr[6], arr[7], arr[8]];
mass.sort(compareRandom);

document.write("<table>");
while (i < n){
    document.write('<tr>');
    while(j < m) {
        document.write('<td id=' + k +'><img src="../assets/images/Cards/' + mass[k] + '.png" class="pic"');
        document.write("</td>");
        j++;
        k++;
    }
    document.write("</tr>");
    j = 0;
    i++;
}
m = 0;
document.write("</table>");

function rubashka_down()
{
    let alles_td = document.getElementsByTagName("td");
    for (k = 0; k < alles_td.length ; k++)
    {
        setTimeout(
            (function (k)
                {
                    return function() {
                        alles_td[k].innerHTML="<img src='../assets/images/Cards/rubashka.gif' class='pic'>";
                    }
                }
            )(k),5000
        );
    }
    setTimeout(function()
    {
        l = -1;
        k = 0;
    }, 5000);
}

rubashka_down();

let inputs = document.getElementsByTagName("td");
j=-1;
for ( i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("click", myFunction);
}
function rubashka_fun(id, idj) {
    let alles_td=document.getElementsByTagName("td");
    setTimeout(function()
    {
        alles_td[id].innerHTML="<img src='../assets/images/Cards/rubashka.gif' class='pic'>";
        alles_td[idj].innerHTML="<img src='../assets/images/Cards/rubashka.gif' class='pic'>";
        l = -1;
        m = m - k * 42;
        e.innerText = m;
    }, 2000);
}

function call_me(m) {
    document.location.href = "win.html?" + m;
}

function dell_fun(id, idj) {
    let alles_td=document.getElementsByTagName("td");
    setTimeout(function() {
        alles_td[id].innerHTML = "";
        alles_td[idj].innerHTML = "";
        l = -1;
        k++;
        m = m + (9 - k) * 42;
        e.innerText = m;
        if (k === 9){
            call_me(m);
        }

    }, 2000);
}
function myFunction() {
    let alles_td=document.getElementsByTagName("td");
    if ((l === -1) && (j === -1) && (alles_td[this.id].innerHTML !== "")) {
        alles_td[this.id].innerHTML="<img src='../assets/images/Cards/"+mass[this.id] + ".png' " +
            "class='pic' data-tid='Card-flipped'>";
        j = this.id;
    }
    else {
        if ((l === -1) && (j !== -1) && (alles_td[this.id].innerHTML !== "") && (this.id !== j)) {
            if (mass[this.id] === mass[j]) {
                alles_td[this.id].innerHTML="<img src='../assets/images/Cards/" + mass[this.id] + ".png' " +
                    "class='pic'>";
                l = 1;
                dell_fun(this.id, j);
                snd1.play();
                j = -1;
            } else {
                if ( mass[this.id] !== mass[j] ) {
                    alles_td[this.id].innerHTML="<img src='../assets/images/Cards/" + mass[this.id] + ".png' " +
                        "class='pic'>";
                    l = 1;
                    rubashka_fun(this.id, j);
                    snd2.play();
                    j = -1;
                }
            }
        }
    }
}