/* imports */
import "bootstrap";
import "./style.css";
import "./assets/img/4geeks.ico";

window.onload = function() { // generar excusa al cargar la página
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

  let randomWho = Math.floor(Math.random() * who.length);
  let randomAction = Math.floor(Math.random() * action.length);
  let randomWhat = Math.floor(Math.random() * what.length);
  let randomWhen = Math.floor(Math.random() * when.length);

  return `${who[randomWho]} ${action[randomAction]} ${what[randomWhat]} ${when[randomWhen]}`;
}
