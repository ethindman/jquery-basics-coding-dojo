//Example of document.ready function being called
$(document).ready(function(){
	// $('h3').click(function() {
	// 	alert("something!");
	// })

	//Hide all content with id of hidden from start
	$('.hidden').hide();
	$('input').val("");

	//Click to show hidden content
	$('#show').click(function() {
		$(this).closest('div').find('.hidden').show();
		$('#show').hide();
	})

	//Hide content currently displayed
	$('#hide').click(function() {
		$(this).closest('div').hide();
		$('#show').show();
	})

	//Get value of an item
	$('#get-input').click(function() {
		var $input = $('input').val();
		if ($input != "") {
			$('.output').append($input+"</br>");
			$('input').select();
		} else {
			alert("Oops! You didn't type anything!");
			}
	})

	//Clear the output field
	$('.clear').click(function() {
	var $this = $(this).closest('div');
		$this.find('.output').empty();
	})

	//Change background color on mouseenter $ mouseleave
  $("#graffitti").on("mouseenter", function() {
    $(this).closest('div').css('background', '#F27490');
  });
    $("#graffitti").on("mouseleave", function() {
    	$(this).closest('div').css('background', '#DDD');
  });

  //Toggles a property on a button click
  $('.toggle').click(function() {
  	$(this).closest('div').find('img').toggle();
  	// scrollByLines(100);
  })

  //Hover over image and change text below
	// $('#graffitti').hover(function() {
	// 	$('#change-text').html("<h3 class='pink'>Whoa! Isn't this cool?</h3>");
	// }, function(){$('#change-text').html("<h3 class='light-green'>Hey! It worked!</h3")});

});

function bgChagnge() {
	var bgcolorchange = new Array("#ff5051", "#70d16f", "#6cd4d1", "#6bc0c9", "#5bc1a6","#3aba9a","#f26e53", "#50c0e9","#3aaed9","#ffce55","#f4ba41", "#5386c5");
	document.body.style.background = bgcolorchange[Math.floor(Math.random()*bgcolorchange.length)];
}



