/**
 * @param {String} numberOfLines the amount of lines chosen by the user
 * @param {String} displayZone the place where the triangle will be displayed (HTML-file)
 * */

function printPascal(numberOfLines, displayZone) {

	// Variables declaration
	var currentLine = document.getElementById(numberOfLines).value; // as chosen by the user
	var pascal = computePascalTriangle(currentLine); // calling second function
	var lineToAdd = "";

	// array that stores the values
	var arr = String(pascal[currentLine - 1][Math.floor(currentLine / 2)]).length;

	// Loop to display the triangle in the div section of the HTML-file
	for (var i = currentLine - 1; i >= 0; i--) {

		var lineToAdd = "&nbsp;".repeat((currentLine - i) * arr);

		for (var j = 0; j <= i; j++) {
			lineToAdd += " " + "&nbsp;".repeat(arr - String(pascal[i][j]).length) 
			+ pascal[i][j] + "&nbsp;".repeat(arr - String(pascal[i][j]).length); 
		}

		document.getElementById(displayZone).innerHTML = "</br>" + lineToAdd
		+ document.getElementById(displayZone).innerHTML; // display
	}
}

/**
 * @param {int} currentLine index of the current line
 * @returns {array} bi-dimensional array that returns Pascal's triangle
 * */
function computePascalTriangle(currentLine) {

	// Variables declaration
	var i, j;
	var pascal = new Array(); // variable of type Array

	// Putting 1s everywhere we need to
	for (i = 0; i < currentLine; i++) {

		pascal[i] = new Array();
		pascal[i][0] = 1;
		pascal[i][i] = 1;
	}

	// creating Pascal's triangle
	for(i = 0; i < currentLine; i++) {
		for(j = 1; j < i; j++) {

			pascal[i][j] = pascal[i-1][j-1] + pascal[i-1][j];
		}
	}

	return pascal; // returns the triangle
}

var button = document.getElementById("calc"); // Activated by pressing the button
					      // in the HTML-file

button.onclick = function() { // the button that generates Pascal's triangle

  printPascal("linesAmount", "triangleDisplay"); // calling first function
};