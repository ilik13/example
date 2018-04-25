	let imgMap = {
		111:"assets/img/shot-1.jpg",
		112:"assets/img/shot-2.jpg",
		113:"assets/img/shot-3.jpg",
		114:"assets/img/shot-1.jpg",
		115:"assets/img/shot-2.jpg",
		116:"assets/img/shot-3.jpg",
		117:"assets/img/shot-1.jpg",
		118:"assets/img/shot-2.jpg",
		119:"assets/img/shot-3.jpg",
		120:"assets/img/shot-1.jpg",
		121:"assets/img/shot-2.jpg",
		122:"assets/img/shot-3.jpg",
		123:"assets/img/shot-1.jpg",
		124:"assets/img/shot-2.jpg"
	}
	function addDinamicBloks(array){
		let blockOfCarusel = document.getElementById("tempBlock");
		let point = document.getElementById("tempPoints");
		let rootUl = document.querySelector(".img-block__ul"); //.createShadowRoot(); едет верстка, не подключаются классы css
		for (let i = 0; i < array.length; i++) {  // переделать в for each
			let cloneBlock = blockOfCarusel.content.cloneNode(true);
			let clonePoint = point.content.cloneNode(true);

			cloneBlock.querySelector("img").src = imgMap[array[i].guid];
			cloneBlock.querySelector("a").text = array[i].title; 
			cloneBlock.querySelector("p").innerHTML = new Date(array[i].lastUpdate).toLocaleString("ru", {year: 'numeric',  month: 'long',  day: 'numeric'});
			rootUl.appendChild(cloneBlock);
			clonePoint.querySelector("div").setAttribute("data-id", i);
			document.querySelector(".points-block").appendChild(clonePoint);
		}
	}
	export function createCarusel(){
		
		let xhr = new XMLHttpRequest();
		xhr.open('GET', '../api/app_packages.json', true);
		xhr.send();
		xhr.onload = function(e){
			let restoredxhr = JSON.parse(xhr.responseText);
			addDinamicBloks(restoredxhr);
		}
	}
