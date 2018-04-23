import {slider} from './modules/slider.js';
import {addDinamicBloks, createImgBlockArray} from'./modules/addBloksCarusel.js';

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
let imgBlockArray = [ //json id:img
		{
			imgUrl:"assets/img/shot-1.jpg",
			nameApp:"Стандартный пакет",
			dateApp:"08 апреля 2012"
		},
		{
			imgUrl:"assets/img/shot-2.jpg",
			nameApp:"Новый ЦФТ-Банк",
			dateApp:"09 сентября 2016"
		},
		{
			imgUrl:"assets/img/shot-3.jpg",
			nameApp:"Каталог разработок",
			dateApp:"08 апреля 2015"
		},
		{
			imgUrl:"assets/img/shot-1.jpg",
			nameApp:"Cash management",
			dateApp:"12 мая 2017"
		},
		{
			imgUrl:"assets/img/shot-2.jpg",
			nameApp:"Аренда сейфов",
			dateApp:"22 декабря 2013"
		},
		{
			imgUrl:"assets/img/shot-3.jpg",
			nameApp:"Банковские гарантии",
			dateApp:"01 января 2014"
		},
		{
			imgUrl:"assets/img/shot-1.jpg",
			nameApp:"Казначейство",
			dateApp:"11 марта 2014"
		}
	]
	//imgBlockArray = createImgBlockArray();
	createImgBlockArray();
	addDinamicBloks(imgBlockArray);	
	slider();
}
