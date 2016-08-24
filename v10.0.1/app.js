'use strict;'


function getTranslations(locale) {
	return new Promise(function (resolve, reject) {
		$.ajax('locale.'+locale+'.json', {
			success: function (data, textStatus, jqXHR) {
				console.log("Loaded translation file for locale " + locale, data);
				resolve(data);
			},
			error: function (jqXHR, textStatus, errorThrown) {
				console.log("Unable to load translation file for locale " + locale, errorThrown);
				resolve(null);
			}
		})
	});
}

function applyTranslations() {
	Object.keys(translations.masteries).forEach(function (name) {
		$('#'+name).qtip({
			content: {
				title: translations.masteries[name].label,
				text: translations.masteries[name].description
			},
			position: {
				my: 'bottom center',
				at: 'top center'
			},
			style: 'qtip-jtools'
		});
	});
	$('#help').text(translations.help);
}

function createMastery(name, max, type, xpos, ypos, style) {
	return {
		name,
		max,
		type,
		xpos,
		ypos,
		style
	};
}

var translations;

$(function () {
	restoreState();

	var supportedLocales = ['en'],
		locale = 'en';
	if(supportedLocales.indexOf(window.navigator.language) > -1) locale = window.navigator.language;

	getTranslations(locale)
		.then(function (result) {
			translations = result;
			buildUI();
			applyTranslations();
			defineHash();
		})
})
function restoreState() {
	var hash = location.hash;
	if(!hash) return;
	var digits = hash.substr(1).split('');
	digits.forEach(function (value, index) {
		Config[index].value = parseInt(value, 10);
	});
}
function attachMastery(mastery, $container) {
	var $mastery = $('<div class="mastery icon-'+mastery.name+'">');
	$mastery
		.appendTo($container)
		.css('left', mastery.xpos*52+20)
		.css('top', mastery.ypos*36+20)
		.attr('id', mastery.name)
		.data('config', mastery)
		.addClass(mastery.style)
		.on('click', handleClick)
	mastery.element = $mastery;
	setMasteryValue($mastery, mastery.value || 0);
}
function setMasteryValue($mastery, value) {
	var max = $mastery.data('config').max,
		text = value + '/' + max,
		className = value ? (value === max ? 'max' : 'notnull') : '';
	$mastery
		.data('value', value)
		.removeClass('notnull')
		.removeClass('max')
		.addClass(className)
		.empty()
		.append($('<span>').text(text).on('click', function (event) {
			setMasteryValue($(this).parent(), 0);
			event.stopPropagation();
		}));
	
}
function handleClick(event) {
	var $mastery = $(this), value = $mastery.data('value');
	if(event.ctrlKey || event.shiftKey) {
		value--;
	} else {
		value++;
	}
	value = Math.max(value, 0);
	value = Math.min(value, $mastery.data('config').max);
	setMasteryValue($mastery, value);
	defineHash();
}
function defineHash() {
	location.hash = Config.map(function (mastery) {
		return mastery.element.data('value');
	}).join('');
	var spent = 0, types = [];
	Config.forEach(function (mastery) {
		spent += mastery.element.data('value');
		types[mastery.type] =  (types[mastery.type] || 0) + mastery.element.data('value');
	});
	$('#spent').text(spent+' '+translations.spent);
	var typeNames = ['offensive', 'defensive', 'utility'];
	types.forEach(function (points, type) {
		$('[data-type="'+type+'"] .points').text(translations[typeNames[type]]+" ("+points+")");
	})
}
function buildUI () {
	for(var type=0; type<3; type++) {
		buildPane(type);
	}
}
function buildPane (type) {
	var masteries = Config.filter(function (mastery) {
		return mastery.type === type;
	});
	var $container = $('.container[data-type="'+type+'"]');
	masteries.forEach(function (mastery) {
		attachMastery(mastery, $container);
	});
	var $points = $container.find('.points');
}

var Config = [
          	createMastery("strength", 9, 0, 0, 3, 'copper'),
          	createMastery("greater-strength", 9, 0, 2, 3, 'copper'),
          	createMastery("pierce", 3, 0, 4, 2, 'bronze'),
          	createMastery("courage", 3, 0, 4, 4, 'copper'),
          	createMastery("lesser-precision", 5, 0, 6, 1, 'copper'),
          	createMastery("lesser-cruelty", 5, 0, 6, 3, 'copper'),
          	createMastery("extended-fury", 4, 0, 6, 6, 'copper'),
          	createMastery("precision", 5, 0, 8, 1, 'bronze'),
          	createMastery("cruelty", 5, 0, 8, 3, 'bronze'),
          	createMastery("enhanced-fury", 9, 0, 8, 6, 'bronze'),
          	createMastery("pure-skill", 5, 0, 10, 2, 'bronze'),
          	createMastery("mutagenesis", 5, 0, 10, 5, 'bronze'),
          	createMastery("glass-cannon", 3, 0, 12, 1, 'bronze'),
          	createMastery("despair", 3, 0, 12, 5, 'silver'),
          	createMastery("recoil", 3, 0, 14, 1, 'silver'),
          	createMastery("deep-wounds", 3, 0, 14, 4, 'silver'),
          	createMastery("unfazed", 3, 0, 14, 6, 'silver'),
          	createMastery("liquid-courage", 3, 0, 16, 0, 'silver'),
          	createMastery("double-edge", 3, 0, 16, 2, 'silver'),
          	createMastery("assassin", 5, 0, 16, 5, 'silver'),
          	
          	createMastery("vitality", 9, 1, 0, 3, 'copper'),
          	createMastery("greater-vitality", 9, 1, 2, 3, 'copper'),
          	createMastery("salve", 3, 1, 4, 1, 'bronze'),
          	createMastery("block-proficiency", 4, 1, 4, 5, 'copper'),
          	createMastery("energy-resistance", 4, 1, 5, 3, 'copper'),
          	createMastery("recovery", 3, 1, 6, 1, 'bronze'),
          	createMastery("perfect-block", 4, 1, 6, 5, 'copper'),
          	createMastery("physical-resistance", 4, 1, 7, 3, 'copper'),
          	createMastery("stand-your-ground", 5, 1, 8, 5, 'bronze'),
          	createMastery("collar-tech", 5, 1, 10, 2, 'bronze'),
          	createMastery("serum-science", 5, 1, 10, 5, 'bronze'),
          	createMastery("willpower", 3, 1, 12, 1, 'silver'),
          	createMastery("coagulate", 3, 1, 14, 0, 'silver'),
          	createMastery("inequity", 3, 1, 14, 2, 'silver'),
          	createMastery("suture", 3, 1, 16, 0, 'silver'),
          	createMastery("resonate", 3, 1, 16, 2, 'silver'),
          	
          	createMastery("wisdom", 3, 2, 0, 1, 'copper'),
          	createMastery("limber", 5, 2, 1, 5, 'copper'),
          	createMastery("intelligence", 5, 2, 2, 1, 'copper'),
          	createMastery("parry", 3, 2, 3, 4, 'bronze'),
          	createMastery("dexterity", 3, 2, 3, 6, 'bronze'),
          	createMastery("stupefy", 3, 2, 5, 3, 'bronze'),
          	createMastery("petrify", 3, 2, 5, 5, 'bronze'),
          	createMastery("pittance", 3, 2, 6, 1, 'bronze'),
          	createMastery("pacify", 3, 2, 7, 5, 'bronze'),
          	createMastery("prosperity", 3, 2, 8, 1, 'bronze'),
          	createMastery("cosmic-awareness", 5, 2, 10, 2, 'bronze'),
          	createMastery("mystic-dispersion", 5, 2, 10, 5, 'bronze'),
          	createMastery("detect-cosmic", 3, 2, 12, 3, 'bronze'),
          	createMastery("detect-tech", 3, 2, 13, 1, 'bronze'),
          	createMastery("detect-mystic", 3, 2, 13, 5, 'bronze'),
          	createMastery("scouter-lens", 3, 2, 14, 3, 'silver'),
          	createMastery("detect-mutant", 3, 2, 15, 1, 'bronze'),
          	createMastery("detect-science", 3, 2, 15, 5, 'bronze'),
          	createMastery("detect-skill", 3, 2, 16, 3, 'bronze')
          ];
