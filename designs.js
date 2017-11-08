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
	var cellSize, gridBorder, cellBorder, grid, tCellHeight, tCellWidth;
	
	grid =  $('#grid');
	grid.children().remove();
	gridBorder = grid.css("border-left-width");
	
	for(var h = height.val() - 1 ; h >= 0; h-- ){
		$('#grid').append("<div id=\"" + h + "\"class=\"height cell\"> "+ h +" </div>");
		for(var w = width.val() - 2; w >= 0; w-- ){
			$('#grid').append("<div id=\"" + h + "-" + w + "\" class=\"width cell\"> " + w + " </div>");
		}
	} 
	
	cellSize = $('.cell').height();
	cellBorder = $('.cell').css("border-left-width").replace("px","") * 2;
	tCellHeight = ( cellSize + cellBorder )* height.val();
	tCellWidth = ( cellSize + cellBorder )* width.val();;
	console.log(cellSize + " = Total Cell Size " + cellBorder  );
	
	grid.css("height" , tCellHeight + "px");
	grid.css("width" , tCellWidth + "px");
	
	return false;
 }


$( document ).ready(function() {
	loads++;
    console.log( "loaded " + loads + " times" );
	$('#grid').css('background-color', 'purple');
});

$( '.button' ).on( "click", makeGrid);