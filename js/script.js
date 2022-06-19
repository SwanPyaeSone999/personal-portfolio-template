$(document).ready(function () {	
		$win = $(window);
		$header = $('#header');
		$toggle_button = $('.toggle-button');
		var width =$header.width();

		toggle_onclick($win,$header,width);

		$win.resize(function(){
			toggle_onclick($win,$header,width);
		})
		$toggle_button.click(function(){
			$header.toggleClass('toggle-left');
		})
})
function toggle_onclick($win,$header,width){
		if ($win.width() < 768) {
		
			//$header.css({left:"-200px"});
			$header.css({left: '-'+width+'px'});
		}
		else{
		
			$header.css({left:"0px"})
		}
}


var typed = new Typed('#typed',{
	strings:[
		'Web Developer.',
		'Freelancer.'
	],
	typeSpeed:100,
	backSpeed:100,
	loop:true
})
var typed = new Typed('#typed1',{
	strings:[
		'Web Developer.',
		'Freelancer.'
	],
	typeSpeed:100,
	backSpeed:100,
	loop:true
})
var typed = new Typed('#typed-info',{
	strings:[
	'Freelancer.',
	'Web developer.'
	],
	typeSpeed:50,
	backSpeed:50,
	loop:true
})
