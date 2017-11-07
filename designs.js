// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
var height, width, sButton, color, sform;

height = $('#input_height');
width = $('#input_width');
sButton = $(':submit');
color = $('#colorPicker');
sform = $('#sizePicker');

var grid = $('#grid');


/* function makeGrid(height, width) {

	for(var h = height; h >= 0; h-- ){
		alert("height = " + h);
	}
} */


$( ".button" ).on( "click", function() {
  alert('button pressed');
});


