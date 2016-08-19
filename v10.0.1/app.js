'use strict;'

function createMastery(name, max, type, xpos, ypos) {
	return {
		name,
		max,
		type,
		xpos,
		ypos
	};
}
var Config = [
	createMastery("strength", 9, 0, 0, 3),
	createMastery("greater strength", 9, 0, 2, 3),
	createMastery("pierce", 3, 0, 4, 2),
	createMastery("courage", 3, 0, 4, 4),
	createMastery("lesser precision", 5, 0, 6, 1),
	createMastery("lesser cruelty", 5, 0, 6, 3),
	createMastery("extended fury", 4, 0, 6, 6),
	createMastery("precision", 5, 0, 8, 1),
	createMastery("cruelty", 5, 0, 8, 3),
	createMastery("enhanced fury", 9, 0, 8, 6),
	createMastery("pure skill", 5, 0, 10, 2),
	createMastery("mutagenesis", 5, 0, 10, 5),
	createMastery("glass cannon", 3, 0, 12, 1),
	createMastery("despair", 3, 0, 12, 5),
	createMastery("recoil", 3, 0, 14, 1),
	createMastery("deep wounds", 3, 0, 14, 4),
	createMastery("unfazed", 3, 0, 14, 6),
	createMastery("liquid courage", 3, 0, 16, 0),
	createMastery("double edge", 3, 0, 16, 2),
	createMastery("assassin", 5, 0, 16, 5),
	
	createMastery("vitality", 9, 1, 0, 3),
	createMastery("greater vitality", 9, 1, 2, 3),
	createMastery("salve", 3, 1, 4, 1),
	createMastery("block proficiency", 4, 1, 4, 5),
	createMastery("energy resistance", 4, 1, 5, 3),
	createMastery("recovery", 3, 1, 6, 1),
	createMastery("perfect block", 4, 1, 6, 5),
	createMastery("physical resistance", 4, 1, 7, 3),
	createMastery("stand your ground", 5, 1, 8, 5),
	createMastery("collar tech", 5, 1, 10, 2),
	createMastery("serum science", 5, 1, 10, 5),
	createMastery("willpower", 3, 1, 12, 1),
	createMastery("coagulate", 3, 1, 14, 0),
	createMastery("inequity", 3, 1, 14, 2),
	createMastery("suture", 3, 1, 16, 0),
	createMastery("resonate", 3, 1, 16, 2),
	
	createMastery("wisdom", 3, 2, 0, 1),
	createMastery("limber", 5, 2, 1, 5),
	createMastery("intelligence", 5, 2, 2, 1),
	createMastery("parry", 3, 2, 3, 4),
	createMastery("dexterity", 3, 2, 3, 6),
	createMastery("stupefy", 3, 2, 5, 3),
	createMastery("petrify", 3, 2, 5, 5),
	createMastery("pittance", 3, 2, 6, 1),
	createMastery("pacify", 3, 2, 7, 5),
	createMastery("prosperity", 3, 2, 8, 1),
	createMastery("cosmic awareness", 5, 2, 10, 2),
	createMastery("mystic dispersion", 5, 2, 10, 5),
	createMastery("detect cosmic", 3, 2, 12, 3),
	createMastery("detect tech", 3, 2, 13, 1),
	createMastery("detect mystic", 3, 2, 13, 5),
	createMastery("scouter lens", 3, 2, 14, 3),
	createMastery("detect mutant", 3, 2, 15, 1),
	createMastery("detect science", 3, 2, 15, 5),
	createMastery("detect skill", 3, 2, 16, 3)
];
$(function () {
	restoreState();
	buildUI();
	defineHash();
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
	var $mastery = $('<div class="mastery icon-'+mastery.name.replace(/ /g, '-')+'" title="'+mastery.name.toUpperCase()+'">');
	$mastery
		.appendTo($container)
		.css('left', mastery.xpos*52+20)
		.css('top', mastery.ypos*36+20)
		.qtip()
		.data('config', mastery)
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
		.append($('<span>').text(text));
	
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
	var spent = 0;
	Config.forEach(function (mastery) {
		spent += mastery.element.data('value')
	});
	console.log(spent);
	$('#spent').text(spent);
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
}