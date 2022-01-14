//1
const container = document.getElementById('container');

//2
const containerId = document.querySelector('#container');

//3
const classSecond = document.getElementsByClassName('second');

//4
const ol = document.querySelector('ol')
const thirdOlLi = ol.lastElementChild

//5
const greeting = document.createElement('h1');
greeting.innerText = "Hello!"
container.prepend(greeting)

//6
const footer = document.querySelector('.footer');
footer.classList.add('main');

//7
footer.classList.remove('main')

//8
const newLi = document.createElement('li');

//9
newLi.innerText = 'four';

//10
const ul = document.querySelector('ul')
ul.append(newLi)

//11
const olLis = ol.children 
for (let li of olLis){
    li.style.backgroundColor = 'green'
}

//12
footer.remove();