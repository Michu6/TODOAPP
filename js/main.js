// function getInputValue() {
// 	var inputBox = document.getElementById("inputBox");
// 	return inputBox.value;
// }
// function tweet() {
// 	var inputBoxValue = getInputValue();
// 	if (inputBoxValue !== "") {
// 		doTweet(inputBoxValue);
// 		clean();
// 	}
// }
// function doTweet(tweetText) {
// 	var tweets = document.getElementById("tweets");
// 	//Crear el elemento
// 	var elemento = document.createElement("div");
// 	elemento.className = "tweet";
// 	elemento.innerHTML = tweetText;
// 	//Agregar elementos a tweets
// 	tweets.appendChild(elemento);
// 	var ex = tweets.lastChild;
// 	alert(ex.innerHTML);
// }
// function clean() {
// 	var inputBox = document.getElementById("inputBox");
// 	inputBox.value = "";
// 	inputBox.focus();
// }




// function userBoxTweet() {
// 	var inputBox = document.getElementById("inputBox");
// 	return inputBox.value;
// }

// function doTweet(tweetText) {
// 	var textTweets = document.getElementById("textTweets");
// 	//Crear el elemento
// 	var elemento = document.createElement("div");
// 	var icon = document.createElement("a");
// 	elemento.className = "tweet";
// 	elemento.className = "a";
// 	elemento.innerHTML = "<li>" + tweetText + "</li>";

// 	//Agregar elementos a textTweets
// 	textTweets.appendChild(elemento);
// 	var ex = textTweets.lastChild;
// 	// confirm("Es este el mensaje que desea enviar?"+ex.innerHTML);
// }

// function tweet() {
// 	var inputBoxValue = userBoxTweet();
// 	if (inputBoxValue !== "") {
// 		doTweet(inputBoxValue);
// 		clean();
// 	}
// }
// function clean() {
// 	var inputBox = document.getElementById("inputBox");
// 	inputBox.value = "";
// 	inputBox.focus();
// }

(function() {
	var lista = document.getElementById("lista"),
			tareaInput = document.getElementById("tareaInput"),
			btnNuevaTarea = document.getElementById("btn-agregar");


// FUNCIONES
	var agregarTarea = function(){
		var tarea = tareaInput.value;
		var nuevaTarea = document.createElement("li");
		var contenido = document.createTextNode(tarea);

		if(tarea === "") {
			tareaInput.setAttribute("placeholder","ESCRIBE TU TAREA!!");
			tareaInput.className = "error";
			return false;
		}

		nuevaTarea.appendChild(contenido);
		lista.appendChild(nuevaTarea);



		tareaInput.value ="";
		for(var i=0; i<=lista.children.length-1;i++) {
			lista.children[i].addEventListener("click", function(){
				this.parentNode.removeChild(this);
			});
		}

	};

	var comprobarInput = function(){
		tareaInput.className = "";
		tareaInput.setAttribute("placeholder", "Agrega tu tarea")
	};

	var eliminarTarea = function(){
		this.parentNode.removeChild(this);
	};

// EVENTOS
	btnNuevaTarea.addEventListener("click",agregarTarea);
	tareaInput.addEventListener("click",comprobarInput);
	for(var i=0; i<=lista.children.length-1;i++) {
		lista.children[i].addEventListener("click",eliminarTarea);
	}
}());