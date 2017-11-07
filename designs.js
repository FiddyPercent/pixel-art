// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
var height, width, sButton, color, sform, loads;

height = $('#input_height');
width = $('#input_width');
sButton = $(':submit');
color = $('#colorPicker');
sform = $('#sizePicker');
loads = 0;

var grid = $('#grid');


 function makeGrid() {
	 
	for(var h = height.val() - 1 ; h >= 0; h-- ){
		//alert("<div id=\"" + height.val() + "\"class=\"square\"> hi </div>");
		$('#grid').append("<div id=\"" + h + "\"class=\"height\"> "+ h +" </div>");
		for(var w = width.val() - 1; w >= 0; w-- ){
			$('#' + h).append("<div class=\"width\"> " + w + " </div>");
		}
	} 
	return false;
 }


$( document ).ready(function() {
	loads++;
    console.log( "loaded " + loads + " times" );
	$('#grid').css('background-color', 'purple');
});

$( '.button' ).on( "click", makeGrid);