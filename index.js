let ul = document.querySelector('ul')
let input = document.querySelector('input')
let body = document.querySelector('body')
let all = document.querySelectorAll('*')
// template liateral (interplation)
body.style.backgroundColor= 'white'
function newTask(){
  input.style.display='block';
let inputVal = input.value;
if(inputVal != ''){
ul.innerHTML += `<li>${inputVal}</li>`
input.value ='';
input.style.display ='none';
}
}
let color = 1;
function darkLight(){
if(body.style.backgroundColor== 'white')
{body.style.backgroundColor = 'black'
all[0].style.color = 'white';
}
else if(body.style.backgroundColor== 'black')
{body.style.backgroundColor = 'white'
    all[0].style.color = 'black';
}
}
