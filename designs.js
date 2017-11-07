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
	
	alert(height.val());
	for(var h = height.val(); h >= 0; h-- ){
		$('#grid').append("<div> hi </div>");
		
	} 
	return false;
 }


$( document ).ready(function() {
	loads++;
    console.log( "loaded " + loads + " times" );
	$('#grid').css('background-color', 'purple');
});

$( '.button' ).on( "click", makeGrid);