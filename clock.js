let hr = document.getElementById("hour");
let min = document.getElementById("min")
let sec = document.getElementById("sec")





function displayTime(){
    let date = new Date();

    //getting hours,min,sec from date
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();


    //hour
    let rRotation = 30*hh + mm/2;
    hr.style.transform = `rotate(${rRotation}deg)`;
    //minute
    let mRotation = 6*mm;
    min.style.transform = `rotate(${mRotation}deg)`;
    //second
    let sRotation = 6*ss;
    sec.style.transform = `rotate(${sRotation}deg)`;
  

    

}


setInterval(displayTime, 1000);




