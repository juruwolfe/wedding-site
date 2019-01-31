// Test for hot-reload
require('../scss/styles.scss');
import $ from 'jquery';

const isMobile = window.innerWidth < 950;


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
		$(`.confetti:nth-of-type(3n+5`).addClass('spin');
	}

	diamonds(){
		this.confetti_size = 1150;
		let squares = Math.floor(($(this.selector).width()*$(this.selector).height())/this.confetti_size);

		let current_square = 0;

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
			$(`.diamond:nth-of-type(3n+${seed})`).addClass('sparkle');
		}, 500)
		}, function() {
			clearInterval(sparkle);
		});
	}

	lightening(){
		let bolt_html = `<div class="lightning"><div class="toptri"></div><div class="bottri"></div></div>`;
		this.bg_size = 2200;
		let bolts = Math.floor(($(this.selector).width()*$(this.selector).height())/this.bg_size);

		let current_bolt = 0;

		while (current_bolt < bolts) {
			current_bolt ++;
			$(this.selector).children('.bg-group')
				.append(bolt_html);
		}

		let shoot_bolt;

		$(this.selector+" .bg-group").hover(function() {
			shoot_bolt = window.setInterval(() => {
				let bolt_n = document.querySelectorAll(".lightning").length;
						let seed = (Math.round(Math.random()*bolt_n)+1);

						$(`.lightning:nth-of-type(${seed})`).animate({
							"left": -500, 
							"top": 4000
						}, 500)
					}, 10, function(){
						$(`.lightning:nth-of-type(${seed})`).remove();
					})
		}, function() {
			clearInterval(shoot_bolt);
		});
	}

	wave(){
		$(this.selector+" .bg-group").hover(function() {
			$(".wave").addClass('animate');
		}, function() {
			$(".wave").removeClass('animate');
		});
	}

	dots(){
		this.bg_size = 350;
		let dots = Math.floor(($(this.selector).width()*$(this.selector).height())/this.bg_size);

		let current_dot = 0;

		while (current_dot < dots) {
			current_dot ++;
			let class_list = Math.random()*2 > 1.1 ? "dot large" : "dot";
			let new_dot = `<div class="${class_list}"><div class="radar"><div></div>`
			$(this.selector).children('.bg-group')
				.append(new_dot);
		}


		let dot_pulse;
		$(this.selector+" .bg-group").hover(function() {
			dot_pulse = window.setInterval(() => {
				let seed = (Math.round(Math.random()*9)+1);

				$(".dot").removeClass('pulse');
				$(`.dot:nth-of-type(9n+${seed})`).addClass('pulse');
			}, 3000)
		}, function() {
			$(".dot").removeClass('pulse');
			clearInterval(dot_pulse);
		});
	}

	hearts(){
		this.bg_size = 550;
		let hearts = Math.floor(($(this.selector).width()*$(this.selector).height())/this.bg_size);

		let current_heart = 0;

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
				$(`.heart:nth-of-type(9n+${seed})`).addClass('sparkle');
			}, 1000)
		}, function() {
			clearInterval(heart_sparkle);
		});
	}
}

if (!isMobile) {
	let confetti = new BgEffect("confetti", '#header');
	let diamonds = new BgEffect("diamonds", '#schedule');
	let bolts = new BgEffect("lightening", '#location');
	let wave = new BgEffect("wave", '#boston');
	let dots = new BgEffect("dots", '#contact');
	let hearts = new BgEffect("hearts", '#rsvp');
}




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