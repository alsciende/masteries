'use strict;'

function createMastery(name, max, type, xpos, ypos, description) {
	return {
		name,
		description,
		max,
		type,
		xpos,
		ypos
	};
}
var Config = [
	createMastery("strength", 9, 0, 0, 3, "Increase the Attack of all Champions by X."),
	createMastery("greater strength", 9, 0, 2, 3, "Increase the Attack of all Champions by X%."),
	createMastery("pierce", 3, 0, 4, 2, "Critical Hits from your Champions ignore an additional X% Armor."),
	createMastery("courage", 3, 0, 4, 4, "Increase the Attack of all Champions by X% while they're below 50% Health."),
	createMastery("lesser precision", 5, 0, 6, 1, "Increase the Critical Rate of all Champions by X%."),
	createMastery("lesser cruelty", 5, 0, 6, 3, "Increase the Critical Damage of all Champions by X%."),
	createMastery("extended fury", 4, 0, 6, 6, "Increase the duration of Fury by X second(s)."),
	createMastery("precision", 5, 0, 8, 1, "Increase the Critical Rate of all Champions by X%."),
	createMastery("cruelty", 5, 0, 8, 3, "Increase the Critical Damage of all Champions by X%."),
	createMastery("enhanced fury", 9, 0, 8, 6, "Increase the effectiveness of Fury by X%."),
	createMastery("pure skill", 5, 0, 10, 2, "With extensive field training, Skill Champions ignore an additional X% enemy Armor with Critical Hits."),
	createMastery("mutagenesis", 5, 0, 10, 5, "Rapid mutagenesis closes Bleed wounds in your Mutant Champions X second(s) faster than non-Mutants."),
	createMastery("glass cannon", 3, 0, 12, 1, "Increase the Attack of all Champions by X%, but reduce their maximum Health by X%."),
	createMastery("despair", 3, 0, 12, 5, "Debuffs applied to enemies reduce their healing and Regeneration effects by X% each."),
	createMastery("recoil", 3, 0, 14, 1, "Increase Special Attack damage for all Champions by X%, but they sacrifice Y% Health for each activation."),
	createMastery("deep wounds", 3, 0, 14, 4, "Bleed your Champions inflict last Xs longer. If they have more Health Points than their target, their Bleed instantly strikes down an additional Y% max Health from enemies."),
	createMastery("unfazed", 3, 0, 14, 6, "When an enemy evades, your Champions have a X% chance to stack +Y% Critical Damage for their next Critical Hit and become Unstoppable for 1.0 second(s)."),
	createMastery("liquid courage", 3, 0, 16, 0, "Increase the Attack of all Champions by X%, but they suffer an eternal Poison that drains X% Health each second."),
	createMastery("double edge", 3, 0, 16, 2, "Increase the Attack of all Champions by X%, but up to Y% Health is lost by Bleeding over Z seconds."),
	createMastery("assassin", 5, 0, 16, 5, "Against enemies below 18% Health, your Champions gain X% Attack and decrease enemies( defensive Ability Accuracy by Y%. If enemies start the fight below 18%, your Champions also gain 30% offensive Ability Accuracy."),
	
	createMastery("vitality", 9, 1, 0, 3, "Increase the Health of all Champions by X."),
	createMastery("greater vitality", 9, 1, 2, 3, "Increase the Health of all Champions by X%."),
	createMastery("salve", 3, 1, 4, 1, "Your Champions recover X Health twice per second for 60 seconds. No effect on robots."),
	createMastery("block proficiency", 4, 1, 4, 5, "Increase the Block Proficiency of your Champions by X%."),
	createMastery("energy resistance", 4, 1, 5, 3, "Increase Resistance against Energy damage by X% for all Champions."),
	createMastery("recovery", 3, 1, 6, 1, "Increase any Health your Champions recover during a fight by X%."),
	createMastery("perfect block", 4, 1, 6, 5, "While Blocking, your Champions have a X% chance to perform a Perfect Block."),
	createMastery("physical resistance", 4, 1, 7, 3, "Increase Resistance against Physical damage by X% for all Champions."),
	createMastery("stand your ground", 5, 1, 8, 5, "While Blocking, your Champions have a X% chance to resist a Block Break."),
	createMastery("collar tech", 5, 1, 10, 2, "Retrofit Tech Champions with a field that inhibits enemy Power Gain by X%."),
	createMastery("serum science", 5, 1, 10, 5, "Give Science Champions a Serum of +X% Energy Resistance."),
	createMastery("willpower", 3, 1, 12, 1, "For each new type of detrimental effect your Champions suffer, they regenerate X% Health per second and gain +Y Armor until that effect expires. No effect on robots."),
	createMastery("coagulate", 3, 1, 14, 0, "Your Champions take X% less damage from any Bleed effect they suffer."),
	createMastery("inequity", 3, 1, 14, 2, "Decrease opponent's Attack by X% for each detrimental effect they suffer, up to a maximum of 36% reduction."),
	createMastery("suture", 3, 1, 16, 0, "Reduce the duration of enemy Bleed effects by X%."),
	createMastery("resonate", 3, 1, 16, 2, "Contact with Physical Attacks resonates in enemies, reducing their Attack by X% for Y seconds."),
	
	createMastery("wisdom", 3, 2, 0, 1, "Earn +X XP with all Summoner XP rewards."),
	createMastery("limber", 5, 2, 1, 5, "Rigorous mental and physical training reduces the duration of enemy Stun effects by X%."),
	createMastery("intelligence", 5, 2, 2, 1, "Increase all Summoner XP rewards by X%."),
	createMastery("parry", 3, 2, 3, 4, "Timing a Block right when attacked reduces damage by X%. If contact is made, Stun attackers for up to Y second(s). Stun duration increases with Perfect Block Chance."),
	createMastery("dexterity", 3, 2, 3, 6, "Evade all attacks while dodging back. Dodging an attack in this way grants +X% Critical Rate for your next attack."),
	createMastery("stupefy", 3, 2, 5, 3, "When your Champions inflict Stun, it lasts for X additional second(s)."),
	createMastery("petrify", 3, 2, 5, 5, "When your Champions inflict Stun, they also reduce enemy Health and Power gains by up to X% for the duration of the Stun."),
	createMastery("pittance", 3, 2, 6, 1, "Earn +X Gold with all Gold rewards."),
	createMastery("pacify", 3, 2, 7, 5, "When your Champions inflict Stun, they also reduce enemy ability triggers by X% for the duration of the Stun."),
	createMastery("prosperity", 3, 2, 8, 1, "Increase all Gold rewards by X%."),
	createMastery("cosmic awareness", 5, 2, 10, 2, "Imbue Cosmic Champions with perception rivalling Heimdall, reducing enemy Armor Up effectiveness by X%."),
	createMastery("mystic dispersion", 5, 2, 10, 5, "Your Mystic Champions accrue X% Power each time an enemy beneficial effect expires."),
	createMastery("detect cosmic", 3, 2, 12, 3, "Reveal the hidden Class of Cosmic enemies up to X steps away on a Quest Map. This information is shared with alllies."),
	createMastery("detect tech", 3, 2, 13, 1, "Reveal the hidden Class of Tech enemies up to X steps away on a Quest Map. This information is shared with alllies."),
	createMastery("detect mystic", 3, 2, 13, 5, "Reveal the hidden Class of Mystic enemies up to X steps away on a Quest Map. This information is shared with alllies."),
	createMastery("scouter lens", 3, 2, 14, 3, "Reveal the hidden Hero Rating and Star Rating of enemies up to X steps away on a Quest Map. This information is shared with allies."),
	createMastery("detect mutant", 3, 2, 15, 1, "Reveal the hidden Class of Mutant enemies up to X steps away on a Quest Map. This information is shared with alllies."),
	createMastery("detect science", 3, 2, 15, 5, "Reveal the hidden Class of Science enemies up to X steps away on a Quest Map. This information is shared with alllies."),
	createMastery("detect skill", 3, 2, 16, 3, "Reveal the hidden Class of Skill enemies up to X steps away on a Quest Map. This information is shared with alllies.")
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
	var $mastery = $('<div class="mastery icon-'+mastery.name.replace(/ /g, '-')+'">');
	$mastery
		.appendTo($container)
		.css('left', mastery.xpos*52+20)
		.css('top', mastery.ypos*36+20)
		.qtip({
			content: {
				title: mastery.name.toUpperCase(),
				text: mastery.description
			},
			position: {
				my: 'bottom center',
				at: 'top center'
			},
			style: 'qtip-jtools'
		})
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
	var spent = 0;
	Config.forEach(function (mastery) {
		spent += mastery.element.data('value')
	});
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