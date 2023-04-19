const arrList = [
	'pomodori',
	'funghi',
	'latte',
	'carne',
	'caffè',
	'peperoni',
	'biscotti',
	'salmone',
	'pasta',
];

const eleList = document.querySelector('#list');

let i = 0
while (i < arrList.length) {
    console.log(arrList[i]);
	eleList.innerHTML += `<li>${arrList[i]}</li>`;
    i++;
}