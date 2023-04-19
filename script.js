const eleBtn = document.querySelector('#btn');
const eleList = document.querySelector('#list');
const input = document.querySelector('#input')
const arrList = [
	'Pomodori',
	'Funghi',
	'Latte',
	'Carne',
	'Caffè',
	'Peperoni',
	'Biscotti',
	'Salmone',
	'Pasta',
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


// al click rimuovi ultimo item aggiunto
const remover = document.querySelector('#remover');
remover.addEventListener('click',function () { 
 eleList.lastElementChild.remove();
})