export function slider(){
	let width = 364; // ширина изображения
	let count = 1; // количество изображений
	let carusel = document.getElementById('carusel');
	let list = carusel.querySelector('ul');
	let listElems = carusel.querySelectorAll('li');
	let position = 0; // текущий сдвиг влево
	
	carusel.querySelector('.prev').onclick = function(){
	// сдвиг влево
		position = Math.min(position + width * count, 0)
		list.style.marginLeft = position + 'px';
	};
	carusel.querySelector('.next').onclick = function() {
	// сдвиг вправо
		position = Math.max(position - width * count, -width * (listElems.length - 3));
		list.style.marginLeft = position + 'px';
	};
	//сдвиг по точке
	let activePoint = carusel.querySelector(".points-block");
	activePoint.onclick = function(e) {
		let idPoint = e.target.dataset.id;
		position = width - idPoint * width;
		list.style.marginLeft = position + 'px';
	}
}
