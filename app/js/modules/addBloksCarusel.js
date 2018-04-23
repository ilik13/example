	/*let imgMap{
		1:"assets/img/shot-1.jpg",
		2:"assets/img/shot-2.jpg",
		3:"assets/img/shot-3.jpg",
		4:"assets/img/shot-1.jpg",
		5:"assets/img/shot-2.jpg",
		6:"assets/img/shot-3.jpg",
		7:"assets/img/shot-1.jpg",
		8:"assets/img/shot-2.jpg",
		9:"assets/img/shot-3.jpg",
		10:"assets/img/shot-1.jpg",
		11:"assets/img/shot-2.jpg",
		12:"assets/img/shot-3.jpg",
		13:"assets/img/shot-1.jpg",
		14:"assets/img/shot-2.jpg",
	}*/
	export function addDinamicBloks(array){
		let blockOfCarusel = document.getElementById("tempBlock");
		let point = document.getElementById("tempPoints");
		for (let i = 0; i < array.length; i++) {
			let cloneBlock = blockOfCarusel.content.cloneNode(true);
			let clonePoint = point.content.cloneNode(true);

			cloneBlock.querySelector("img").src = array[i].imgUrl;
			cloneBlock.querySelector("a").text = array[i].nameApp;
			cloneBlock.querySelector("p").innerHTML = array[i].dateApp;
			document.querySelector(".img-block__ul").appendChild(cloneBlock);
			clonePoint.querySelector("div").setAttribute("data-id", i);
			document.querySelector(".points-block").appendChild(clonePoint);
			//дата из lastUpdate вместо dateApp
		}
	}
	export function createImgBlockArray(){
		
		let xhr = new XMLHttpRequest();
		xhr.open('GET', '../api/app_packages.json', true);
		xhr.send();
		debugger;
		xhr.onload = function(e){
			let restoredxhr = JSON.parse(xhr.responseText);
			return(restoredxhr);
			console.log(restoredxhr);
		}
	}