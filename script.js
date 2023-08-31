// button cubic
// $(window).ready(function(){
//     $(".boton").wrapInner('<div class=botontext></div>');
        
//         $(".botontext").clone().appendTo( $(".boton") );
        
//         $(".boton").append('<span class="twist"></span><span class="twist"></span><span class="twist"></span><span class="twist"></span>');
        
//         $(".twist").css("width", "25%").css("width", "+=3px");
//     });

//       hero-section display

// var card = $(".card");

// $(document).on("mouseenter",function(e) { 
//   var ax = -($(window).innerWidth()/2- e.pageX)/20;
//   var ay = ($(window).innerHeight()/2- e.pageY)/10;
//   card.attr("style", "transform: rotateY("+ax+"deg) rotateX("+ay+"deg);-webkit-transform: rotateY("+ax+"deg);-moz-transform: rotateY rotateX("+ay+"deg)");
// });


// counter box  

const counters = document.querySelectorAll('.counter');
const speed = 200; // The lower the slower

counters.forEach(counter => {
	const updateCount = () => {
		const target = +counter.getAttribute('data-target');
		const count = +counter.innerText;

		// Lower inc to slow and higher to slow
		const inc = target / speed;

		// console.log(inc);
		// console.log(count);

		// Check if target is reached
		if (count < target) {
			// Add inc to count and output in counter
			counter.innerText = count + inc;
			// Call function every ms
			setTimeout(updateCount, 1);
		} else {
			counter.innerText = target;
		}
	};

	updateCount();
});
