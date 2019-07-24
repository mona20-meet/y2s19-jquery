// Write all your JavaScript and JQuery code in this file! :)



function updateSize(newSize) {
  $('#logo').css('width',newSize);
}


function updateLeftPosition(newX) {
	$('#logo').css('transform','rotateX('+newX+'deg)');

}

function updateTopPosition(newY) {
	$('#logo').css('transform',"rotateY("+newY+'deg)');
	// FINISH ME
}

