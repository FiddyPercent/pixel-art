// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
var height, width, color;

height = $('#input_height');
width = $('#input_width');
color = $('#colorPicker');


 function makeGrid() {
	var cellSize, gridBorder, cellBorder, grid, tCellHeight, tCellWidth;
	
	//Clears Old Grid First
	grid =  $('#grid');
	grid.children().remove();
	gridBorder = grid.css("border-left-width");
	
	for(let h = height.val() - 1 ; h >= 0; h-- ){
		$('#grid').append("<div id=\"" + h + "\"class=\"heightCells cell\"> </div>");
			$("#" + h).click(function() {
				$(this).css("background-color", color.val());
			  return false;
			});
		
		for(let w = width.val() - 2; w >= 0; w-- ){
			$('#grid').append("<div id=\"" + h + "-" + w + "\" class=\"widthCells cell\"> </div>");
			$("#" + h + "-" + w).click(function() {
				$(this).css("background-color", color.val());
			  return false;
			});
		}
	} 
	
	//Adjusts Grid Border Based on Size
	cellSize = $('.cell').height();
	cellBorder = $('.cell').css("border-left-width").replace("px","") * 2;
	tCellHeight = ( cellSize + cellBorder )* height.val();
	tCellWidth = ( cellSize + cellBorder )* width.val();;
	
	grid.css( "min-height" , tCellHeight + "px" );
	grid.css( "width" , tCellWidth + "px" );
	
	return false;
 }


$( '.button' ).on( "click", makeGrid);