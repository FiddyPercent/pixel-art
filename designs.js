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




 function makeGrid() {
	var grid =  $('#grid');
	grid.children().remove();
	
	
	
	
	for(var h = height.val() - 1 ; h >= 0; h-- ){
		$('#grid').append("<div id=\"" + h + "\"class=\"height grid\"> "+ h +" </div>");
		for(var w = width.val() - 2; w >= 0; w-- ){
			$('#grid').append("<div id=\"" + h + "-" + w + "\" class=\"width grid\"> " + w + " </div>");
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