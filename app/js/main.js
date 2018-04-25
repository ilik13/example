import {slider} from './modules/slider.js';
import {createCarusel} from'./modules/addBloksCarusel.js';

window.onload=function(){
//Первое задание -------------------------------------------------
	function randLum(){
		let selectors = document.querySelectorAll("*"); // selectors - массив всех селекторов в документе
		let randindexOn, randindexOff;// floor - округляет до мин целого, random - от [0 1)
		let array; 
		randindexOn = Math.floor(Math.random() * (selectors.length+1));
		selectors[randindexOn].style.boxShadow = "0 0 25px 0" + randColor();
		
		array.push(selectors[randindexOn]);
		randindexOff = Math.floor(Math.random() * (array.length+1));
		array[randindexOff].style.boxShadow = "0 0 0 0 #fff";
		array.splice(randindexOff, 1);
	}
	function timingLum(){
		setInterval(randLum, 200);
	}
	function randColor(){
    let r = Math.floor(Math.random() * (256)),
        g = Math.floor(Math.random() * (256)),
        b = Math.floor(Math.random() * (256));
    return '#' + r.toString(16) + g.toString(16) + b.toString(16);
	}
//------------------динамическая подгрузка блоков-----------

	createCarusel();
	slider();
}
