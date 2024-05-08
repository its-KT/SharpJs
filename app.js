// Write your code below:
const head = document.createElement('h3');
const headt = document.createTextNode('Buy high quality organic fruits online');
head.appendChild(headt);
const divv = document.getElementsByTagName('div');
divv[0].appendChild(head);
head.style.fontStyle="italic";


const totalFruitsPara = document.createElement('p');
totalFruitsPara.textContent = "Total fruits: 4";
totalFruitsPara.id = "fruits-total";
divv[1].insertBefore(totalFruitsPara, divv[1].firstChild);