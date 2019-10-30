var tester = 0;
var count = 0;

$('#create').on('click', function(){
	if(tester === 0){
		alert('You should click in left or right before creating the list')
		return 0;
	}
	if(tester){
		$('#first').append('<li>' + count + '</li>')
	}else {
		$('#second').append('<li>' + count + '</li>')
	}
	tester = 0;
});
$('#left').on('click', function(){
	tester = true;
	count++;
});
$('#right').on('click', function(){
	tester = false;
	count++;
})
