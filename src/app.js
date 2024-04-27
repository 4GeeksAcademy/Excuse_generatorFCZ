/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  document.querySelector("#excuse").innerHTML = excuseGen();
};

function excuseGen() {
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];
  let who1 = Math.floor(Math.random() * who.length);
  let action1 = Math.floor(Math.random() * action.length);
  let what1 = Math.floor(Math.random() * what.length);
  let when1 = Math.floor(Math.random() * when.length);

  return `${who[who1]} ${action[action1]} ${what[what1]} ${when[when1]}`;
}
