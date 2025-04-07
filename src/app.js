import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");

  let numbers = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];

  let numberSelected = numbers[Math.floor(Math.random()*numbers.length)]

  document.querySelector(".number").innerHTML = numberSelected;

  let suits = ["♦", "♥", "♠", "♣"]

  let suitsIndex = Math.floor(Math.random()*suits.length);

  let suitsSelected =suits[suitsIndex];
  

  let suitsOnHTML = document.querySelectorAll(".simbols");
  suitsOnHTML.forEach(x=>{

    x.innerHTML=suitsSelected;

    if(suitsIndex>1){
      x.style.color = "black";
    }
    else{
      x.style.color = "red";
    }

  })

};
