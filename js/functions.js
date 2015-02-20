//Example of document.ready function being called
$(document).ready(function(){
	// $('h3').click(function() {
	// 	alert("something!");
	// })

	//Hide all content with id of hidden from start
	$('.hidden').hide();
	$('input').val("");

	//Hide content currently displayed
	$('#hide').click(function() {
		$('#hidden').hide();
		$('#show').show();
	})

	//Click to show hidden content
	$('#show').click(function() {
		$('#hidden').show();
		$('#show').hide();
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
    	$('div').css('background', '#DDD');
  });

  //Toggles a property on a button click
  $('.toggle').click(function() {
  	$(this).closest('div').find('img').toggle();
  	scrollByLines(100);
  })

  //Hover over image and change text below
	// $('#graffitti').hover(function() {
	// 	$('#change-text').html("<h3 class='pink'>Whoa! Isn't this cool?</h3>");
	// }, function(){$('#change-text').html("<h3 class='light-green'>Hey! It worked!</h3")});

});



