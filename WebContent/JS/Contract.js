
function printSetup() {
	$('td').width('115px');
	$('td').css('padding', '2.25px');
	$('.inputReplace').replaceWith(function(){ 
		return '<span class="'+$(this).attr("class")+'">'+$(this).val()+'</span>'  
	});
	window.print();
}

function clearReset() {
	$('td').width('0px');
	$('td').css('padding', '1px');
	$('.inputReplace').replaceWith(function(){ 
		return '<input class="'+$(this).attr("class")+'">'  
	});
}