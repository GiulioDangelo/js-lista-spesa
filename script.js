const eleBtn = document.querySelector('#btn');
const eleList = document.querySelector('#list');
const input = document.querySelector('#input')
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


let i = 0
while (i < arrList.length) {
	console.log(arrList[i]);
	eleList.innerHTML += `<li>${arrList[i]}</li>`;
    i++;
}

// al click aggiungi il valore dell'input alla lista
eleBtn.addEventListener('click',function () {
	eleList.innerHTML += `<li>${input.value}</li>`
})
