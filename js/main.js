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

function userBoxTweet() {
	var inputBox = document.getElementById("inputBox");
	return inputBox.value;
}

function doTweet(tweetText) {
	var textTweets = document.getElementById("textTweets");
	//Crear el elemento
	var elemento = document.createElement("div");
	var icon = document.createElement("a");
	elemento.className = "tweet";
	elemento.className = "a";
	elemento.innerHTML = "<li>" + tweetText + "</li>";

	//Agregar elementos a textTweets
	textTweets.appendChild(elemento);
	var ex = textTweets.lastChild;
	// confirm("Es este el mensaje que desea enviar?"+ex.innerHTML);
}

function tweet() {
	var inputBoxValue = userBoxTweet();
	if (inputBoxValue !== "") {
		doTweet(inputBoxValue);
		clean();
	}
}
function clean() {
	var inputBox = document.getElementById("inputBox");
	inputBox.value = "";
	inputBox.focus();
}