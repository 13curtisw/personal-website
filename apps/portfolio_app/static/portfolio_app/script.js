$(document).ready(function(){

	var about_waypoint = new Waypoint({
 	 	element: $("#about"),
  		handler: function() {
  			$(".header td").removeClass("active");
			$(".header td[bookmark=#" + $(this.element[0]).attr("id") + "]").addClass("active");
  		}
	});

	var gallery_waypoint = new Waypoint({
 	 	element: $("#gallery"),
  		handler: function() {
    		$(".header td").removeClass("active");
			$(".header td[bookmark=#" + $(this.element[0]).attr("id") + "]").addClass("active");
  		}
	});

	var resume_waypoint = new Waypoint({
 	 	element: $("#resume"),
  		handler: function() {
    		$(".header td").removeClass("active");
			$(".header td[bookmark=#" + $(this.element[0]).attr("id") + "]").addClass("active");
  		}
	});

	var contact_waypoint = new Waypoint({
 	 	element: $("#contact"),
  		handler: function() {
    		$(".header td").removeClass("active");
			$(".header td[bookmark=#" + $(this.element[0]).attr("id") + "]").addClass("active");
  		}
	});

	$(".header a").click(function(){
		$(".header td").removeClass("active");
		$(this).parent().addClass("active");
		var bookmark = $(this).parent().attr('bookmark');
		about_waypoint.disable();
		gallery_waypoint.disable();
		resume_waypoint.disable();
		contact_waypoint.disable();
		$('html, body').animate({
           'scrollTop':   $(bookmark).offset().top
         }, 300, function(){
         	about_waypoint.enable();
			gallery_waypoint.enable();
			resume_waypoint.enable();
			contact_waypoint.enable();
         });
	});


});