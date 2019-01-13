// Test for hot-reload
require('../scss/styles.scss');
import $ from 'jquery';

const isOnScreen = (element) => {
    var curPos = element.offset();
    var curTop = curPos.top;
    var screenHeight = $(window).height();
    return (curTop > screenHeight) ? false : true;
}

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
		$(`.confetti:nth-child(3n+5`).addClass('spin');
	}

	diamonds(){
		this.confetti_size = 1150;
		let squares = Math.floor(($(this.selector).width()*$(this.selector).height())/this.confetti_size);

		let current_square = 0;
		console.log($(this.selector).width())

		while (current_square < squares) {
			current_square ++;
			let new_diamond = `<div class="diamond"></div>`
			$(this.selector).children('.bg-group')
				.append(new_diamond);
		}

		let sparkle;

		$(this.selector+" .bg-group").hover(function() {
			sparkle = window.setInterval(() => {
						let seed = (Math.round(Math.random()*9)+1);

						$(".diamond").removeClass('sparkle');
						$(`.diamond:nth-child(3n+${seed})`).addClass('sparkle');
					}, 500)
		}, function() {
			clearInterval(sparkle);
		});
	}

	hearts(){
		this.bg_size = 550;
		let hearts = Math.floor(($(this.selector).width()*$(this.selector).height())/this.bg_size);

		let current_heart = 0;
		console.log($(this.selector).width())

		while (current_heart < hearts) {
			current_heart ++;
			let new_heart = `<div class="heart"></div>`
			$(this.selector).children('.bg-group')
				.append(new_heart);
		}

		let heart_sparkle;
		$(this.selector+" .bg-group").hover(function() {
			heart_sparkle = window.setInterval(() => {
				let seed = (Math.round(Math.random()*9)+1);

				$(".heart").removeClass('sparkle');
				$(`.heart:nth-child(9n+${seed})`).addClass('sparkle');
			}, 1000)
		}, function() {
			clearInterval(heart_sparkle);
		});
	}
}

let confetti = new BgEffect("confetti", '#header');
let diamonds = new BgEffect("diamonds", '#schedule');
let hearts = new BgEffect("hearts", '#rsvp');



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