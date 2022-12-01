let clockCenti = 0;
let clockSec = 0;
let clockMin = 0;

const clockStart = function(){
    clockCenti += 1;
    if (clockCenti > 99){
        clockSec += 1;
        clockCenti = 0;
        if (clockSec > 59){
            clockMin += 1;
            clockSec = 0;
        }
    }
    

    //console.log(clockSec);
    let clockCentiSec = clockCenti.toString().padStart(2, "0");
    let clockSecond = clockSec.toString().padStart(2, "0");
    let clockMinute = clockMin.toString().padStart(2, "0");
    clock.textContent = `${clockMinute} : ${clockSecond} : ${clockCentiSec}`;
    btn.appendChild(button);
    btn.removeChild(start);
}
const setClock = function(){
    setInterval(clockStart, 10);
}
const clock = document.querySelector(".clock");
const start = document.querySelector(".start");
const btn = document.querySelector(".btn");
const button = document.createElement("button");
clock.textContent = "00 : 00 : 00";
start.addEventListener("click", setClock);