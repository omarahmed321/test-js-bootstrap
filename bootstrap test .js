let h1 = document.querySelector("h1");
let div = document.querySelector("div");
let button1 = document.querySelector("#button1");
let p = document.querySelector("p");
let button = document.querySelector("#acButton1");
let inputH1 = document.querySelector("#input1");
let inputDiv = document.querySelector("#input2");
let inputBu = document.querySelector("#input3");
let inputP = document.querySelector("#input4");
function changeStyleh1() {
    inputH1.style.display ='block';
  // this is from chatgpt icouldn't understand it ;
  let inputVal = inputH1.value.trim();
  if (inputVal !== "") {
    let classes = inputVal.split(/\s+/);
    h1.classList.add(...classes);
    inputH1.value = "";
  }
  // .............................
}
function changeStyleDiv() {
  inputDiv.style.display = "block";
  let inputVal = inputDiv.value.trim();
  if (inputVal !== "") {
    let classes = inputVal.split(/\s+/);
    div.classList.add(...classes);
    inputDiv.value = "";
  }
}
function changeStyleBu() {
  inputBu.style.display = "block";
  let inputVal = inputBu.value.trim();
  if (inputVal !== "") {
    let classes = inputVal.split(/\s+/);
    button1.classList.add(...classes);
    inputBu.value = "";
  }
}
function changeStyleP() {
  inputP.style.display = "block";
  let inputVal = inputP.value.trim();
  if (inputVal !== "") {
    let classes = inputVal.split(/\s+/);
    p.classList.add(...classes);
    inputP.value = "";
  }
}
