// Test for hot-reload
require('../scss/styles.scss');
import $ from 'jquery';


class BgEffect {
	constructor(effect){
		this.colors = 8;
		this[effect]();
	}

	confetti(){
		this.confetti_size = 2000;
		let squares = Math.floor((window.innerWidth*window.innerHeight)/this.confetti_size);

		let current_square = 0;


		while (current_square < squares) {
			current_square ++;
			let new_confett = `<div class="confetti color-${Math.round((Math.random()*this.colors)+1)}"></div>`
			$('.bg-group')
				.append(new_confett);
		}
	}
}

let confetti = new BgEffect("confetti");



// Links on main page effect
const linkFillEffect = () => {
	$(".link-schedule").hover(function() {
		$(this).children('.link-fill').addClass('grow')
	}, function() {
		$(this).children('.link-fill').removeClass('grow')
	});
}

linkFillEffect();

// Required on main file to accept hot reload
if (module.hot) {
  module.hot.accept();
}