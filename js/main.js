// EXTRAER EL VALOR DEL INPUT -> LA TAREA QUE SE ESCRIBE
var getInputValue = function() {
	var inputBox = document.getElementById("inputBox");
	return inputBox.value;
}
var agregarTarea = function() {
	var inputBoxValue = getInputValue();
	if (inputBoxValue !== "") {
		doTarea(inputBoxValue);
		clean();
	}
}

var doTarea = function(tareaText){
	var agregandoTarea= document.getElementById("lista");
	// CREANDO EL NUEVO DIV CON ID TAREAS
	var nuevaTarea = document.createElement("div");
	nuevaTarea.id="tareas";

	// CREANDO UN INPUT TYPE CHECKBOX 
	var checkbox = document.createElement("input");
	checkbox.setAttribute("type","checkbox");
	checkbox.onchange=function(){
		if(checkbox.checked){
			contenido.innerHTML=tareaText.strike(); /*STRIKE: PROPIEDAD DE RAYADO*/
		}else{
			contenido.innerHTML=tareaText;
		}
	}

	// CREAR EL PÁRRAFO
	var contenido = document.createElement("p");
	contenido.id="contenido";
	contenido.innerHTML=tareaText;

	var icono = document.createElement("span");
	icono.setAttribute("id","icon");
	icono.setAttribute("class","fa fa-trash");
	icono.onclick = function(){
		lista.removeChild(nuevaTarea);
	}
	// AGREGAR AL DIV PADRE LA NUEVA TAREA
	agregandoTarea.appendChild(nuevaTarea);
	nuevaTarea.appendChild(checkbox);
	nuevaTarea.appendChild(contenido);
	nuevaTarea.appendChild(icono);
}
var clean = function() {
	var inputBox = document.getElementById("inputBox");
	inputBox.value = "";
	inputBox.focus();
}






// (function() {
// 	var lista = document.getElementById("lista"),
// 			tareaInput = document.getElementById("tareaInput"),
// 			btnNuevaTarea = document.getElementById("btn-agregar");
// // FUNCIONES
// 	var agregarTarea = function(){
// 		var tarea = tareaInput.value;
// 		var nuevaTarea = document.createElement("li");
// 		var contenido = document.createTextNode(tarea);
// 		var check = document.createElement("input");
// 		check.setAttribute("type", "checkbox");

// 		if(tarea === "") {
// 			tareaInput.setAttribute("placeholder","ESCRIBE TU TAREA!!");
// 			tareaInput.className = "error";
// 			return false;
// 		}
// 		nuevaTarea.appendChild(contenido);
// 		lista.appendChild(nuevaTarea);
// 		check.appendChild(nuevaTarea);

// 		tareaInput.value ="";
// 		for(var i=0; i<=lista.children.length-1;i++) {
// 			lista.children[i].addEventListener("click", function(){
// 				this.parentNode.removeChild(this);
// 			});
// 		}
// 	};

// 	var comprobarInput = function(){
// 		tareaInput.className = "";
// 		tareaInput.setAttribute("placeholder", "Agrega tu tarea")
// 	};

// 	var eliminarTarea = function(){
// 		this.parentNode.removeChild(this);
// 	};

// // EVENTOS
// 	btnNuevaTarea.addEventListener("click",agregarTarea);
// 	tareaInput.addEventListener("click",comprobarInput);
// 	for(var i=0; i<=lista.children.length-1;i++) {
// 		lista.children[i].addEventListener("click",eliminarTarea);
// 	}
// }());