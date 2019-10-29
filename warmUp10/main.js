$('button').on('click', function(){
	if($('ul')[0].childNodes.length % 2 === 0){
		$('ul').append('<li class ="greenColor"> ' + $('input').val() + '</li>');
	}else {
		$('ul').append('<li class ="blueColor"> ' + $('input').val() + '</li>');
	}
})


