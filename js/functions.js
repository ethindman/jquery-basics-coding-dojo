// .addClass
// .after
// .append
//Example of document.ready function being called
$(document).ready(function(){
	// $('h3').click(function() {
	// 	alert("something!");
	// })

	//effects methods

	//.hide() and .show();

	$('#hidden').hide();

	$('#hide').click(function() {
		$('#hidden').hide();
	})

	$('#show').click(function() {
		$('#hidden').show();
	})

	$('img').hover(function() {
		$('h4').text("Isn't this cool?");
	}, function(){$('h4').text("Hey! It worked!")});

});

//Example of document.on.click function being called
$(document).on('click', '#alert', function(){
	alert(5);
});



