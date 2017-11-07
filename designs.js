// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
var height, width, sButton, color;

height = $('#input_height');
width = $('#input_width');
sButton = $(':submit');
color = $('#colorPicker');

var grid = $('#grid');

function makeGridPink() { 
 grid.css('background-color', 'pink');
 //alert('mouse enter');
}
function makeGridOrange() { 
 grid.css('background-color', 'orange');
  //alert('mouse leave');
}
//grid.css('background-color', 'orange');

//grid.keypress(makeGrid());

grid.live("click", makeGridPink());
//grid.mouseleave(makeGridOrange());





