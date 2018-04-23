window.onload=function(){
	// 1. Создаём новый объект XMLHttpRequest
	const xhr = new XMLHttpRequest();
	// 2. Конфигурируем его: GET-запрос на URL 'phones.json'
	xhr.open('GET', '../api/app_packages.json', true);
	// 3. Отсылаем запрос
	xhr.send();
	// 4. Если код ответа сервера не 200, то это ошибка
	
	xhr.onreadystatechange = function() {
		if (xhr.readyState != 4) return;	
		if (xhr.status != 200) {
			console.log(xhr.status + ': ' + xhr.statusText);
		} else {
			//console.log(xhr.responseText);
		}
		//console.log(restoredxhr);
	}
	var listApp = document.getElementById("tempAppCatalog");
	xhr.onload = function(e){
		//console.log(xhr.responseText);	
		var restoredxhr = JSON.parse(xhr.responseText);
		console.log("restoredxhr:", restoredxhr);

		function addDinamicListApp(array){
			for (var i = 0; i < array.length; i++) {
				var cloneListApp = listApp.content.cloneNode(true);
				cloneListApp.querySelector("a").text = array[i].title;
				cloneListApp.querySelector("a").href = array[i].href;
				document.querySelector(".catalog-app__ul").appendChild(cloneListApp);
			}
		}	
		addDinamicListApp(restoredxhr);
	}

	//-----------On click list application------------
	/*document.querySelector(".catalog-app__ul").onclick = setApplication;
	function setApplication(e){
		
		if (e.target.className!="A" )
			return;
		e.preventDefault();

		const xhr1 = new XMLHttpRequest();
		xhr1.open('GET', '../api/descriptionApp/1.json', true);
	}*/
}