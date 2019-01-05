// Test for hot-reload
require('../scss/styles.scss');
import $ from 'jquery';


class BgEffect {
	constructor(effect, selection){
		this.selector = selection;
		this[effect]();
	}

	confetti(){
		this.confetti_size = 2700;
		this.colors = 8;
		let squares = Math.floor((window.innerWidth*window.innerHeight)/this.confetti_size);

		let current_square = 0;


		while (current_square < squares) {
			current_square ++;
			let new_confett = `<div class="confetti color-${Math.round((Math.random()*this.colors)+1)}"></div>`
			$(this.selector).children('.bg-group')
				.append(new_confett);
		}
	}

	diamonds(){
		this.confetti_size = 2600;
		let squares = Math.floor(($(this.selector).width()*$(this.selector).height())/this.confetti_size);

		let current_square = 0;
		console.log($(this.selector).width())

		while (current_square < squares) {
			current_square ++;
			let new_diamond = `<div class="diamond"></div>`
			$(this.selector).children('.bg-group')
				.append(new_diamond);
		}

		/*setInterval(()=>{
			let seed = (Math.round(Math.random()*9)+1);

			$(".diamond").removeClass('sparkle');
			$(`.diamond:nth-child(3n+${seed})`).addClass('sparkle');
		}, 500)*/
	}
}

let confetti = new BgEffect("confetti", '#header');
let diamonds = new BgEffect("diamonds", '#schedule');



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