'use strict;'


function getTranslations(locale) {
	return new Promise(function (resolve, reject) {
		$.ajax('locale.'+locale+'.json', {
			success: function (data, textStatus, jqXHR) {
				resolve(data);
			},
			error: function (jqXHR, textStatus, errorThrown) {
				console.log("Unable to load translation file for locale " + locale, errorThrown);
				resolve(null);
			}
		})
	});
}

function createView(rank) {
	var view = {},
		variables = ['X', 'Y', 'Z'];
	if(rank && typeof rank.forEach === "function") {
		rank.forEach(function (item, index) {
			view[variables[index]] = '<span class="variable">'+item+'</span>';
		})
	} else {
		view.X = '<span class="variable">'+rank+'</span>';
	}
	return view;
}

function applyTranslations() {
	Object.keys(translations.masteries).forEach(function (name) {
		var translation = translations.masteries[name],
			$mastery = $('#'+name);

		$mastery.data('label', translation.label);
		$mastery.data('description', translation.description);

	});

	$('#help').text(translations.help);
}

function createMastery(name, max, ranks, type, xpos, ypos, style) {
	if(max !== ranks.length) {
		console.log("Error in mastery "+name+". Defined max different from number of ranks.");
	}
	return {
		name,
		max,
		ranks,
		type,
		xpos,
		ypos,
		style
	};
}

function restoreState() {
	var hash = location.hash;
	if(!hash) return;
	var digits = hash.substr(1).split('');
	digits.forEach(function (rank, index) {
		masteries[index].rank = parseInt(rank, 10);
	});
}

function attachMastery(configObject, $container) {
	var $mastery = $('<div class="mastery icon-'+configObject.name+'">');
	$mastery
		.appendTo($container)
		.css('left', configObject.xpos*52+20)
		.css('top', configObject.ypos*36+20)
		.attr('id', configObject.name)
		.data('config', configObject)
		.data('rank', configObject.rank || 0)
		.addClass(configObject.style)
		.on('click', handleClick)
	configObject.element = $mastery;
}

function setMasteryValue($mastery, rank) {
	var max = $mastery.data('config').max,
		text = rank + '/' + max,
		className = rank ? (rank === max ? 'max' : 'notnull') : '',
		configObject = $mastery.data('config');

	$mastery
		.data('rank', rank)
		.removeClass('notnull')
		.removeClass('max')
		.addClass(className)
		.empty()
		.append($('<span class="rank">').text(text).on('click', function (event) {
			setMasteryValue($(this).parent(), 0);
			defineHash();
			event.stopPropagation();
		}))
		.append($('<span class="help">?</span>').on('click', function (event) {
			event.stopPropagation();
		}))
	;

	var view = createView(rank ? configObject.ranks[rank-1] : 0);
	var text = Mustache.render($mastery.data('description'), view);

	$mastery.find('.help').qtip({
		content: {
			title: $mastery.data('label'),
			text: text
		},
		position: {
			my: 'bottom center',
			at: 'top center'
		},
		style: 'qtip-jtools '+className
	});
}

function handleClick(event) {
	var $mastery = $(this), rank = $mastery.data('rank');
	if(event.ctrlKey || event.shiftKey) {
		rank--;
	} else {
		rank++;
	}
	rank = Math.max(rank, 0);
	rank = Math.min(rank, $mastery.data('config').max);
	setMasteryValue($mastery, rank);
	defineHash();
}

function defineHash() {
	location.hash = masteries.map(function (mastery) {
		return mastery.element.data('rank');
	}).join('');
	var spent = 0, types = [];
	masteries.forEach(function (mastery) {
		spent += mastery.element.data('rank');
		types[mastery.type] =  (types[mastery.type] || 0) + mastery.element.data('rank');
	});
	$('#spent').text(spent+' '+translations.spent);
	$('#spent')[spent>59 ? 'addClass' : 'removeClass']('overspent');
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
	var $container = $('.container[data-type="'+type+'"]');
	masteries.filter(function (mastery) {
		return mastery.type === type;
	}).forEach(function (mastery) {
		attachMastery(mastery, $container);
	});
	var $points = $container.find('.points');
}

function initMasteries () {
	$('div.mastery').each(function (index, element) {
		var $mastery = $(element);
		setMasteryValue($mastery, $mastery.data('rank') || 0);
	});
}

$(function () {

	masteries = Config.map(function (parameters) {
		return createMastery.apply(this, parameters);
	});

	restoreState();

	var language = navigator.languages
			? navigator.languages[0]
			: (navigator.language || navigator.userLanguage);
  var locale = language.substr(0,2);
	var supportedLocales = ['en', 'fr'];
	var defaultLocale = 'en';
	if(supportedLocales.indexOf(locale) === -1) locale = defaultLocale;

	getTranslations(locale)
		.then(function (result) {
			translations = result;
			buildUI();
			applyTranslations();
			initMasteries();
			defineHash();
		})
})

var translations, masteries, Config = [
      	[
     		"strength",
     		9,
     		[
     			6,
     			9,
     			12,
     			15,
     			18,
     			21,
     			24,
     			27,
     			33
     		],
     		0,
     		0,
     		3,
     		"copper"
     	],
     	[
     		"greater-strength",
     		9,
     		[
     			1.6,
     			2,
     			2.4,
     			2.8,
     			3.6,
     			4.4,
     			5.2,
     			6.4,
     			8
     		],
     		0,
     		2,
     		3,
     		"copper"
     	],
     	[
     		"pierce",
     		3,
     		[
     			5,
     			10,
     			15
     		],
     		0,
     		4,
     		2,
     		"bronze"
     	],
     	[
     		"courage",
     		3,
     		[
     			10,
     			20,
     			30
     		],
     		0,
     		4,
     		4,
     		"copper"
     	],
     	[
     		"lesser-precision",
     		5,
     		[
     			0.5,
     			1,
     			1.5,
     			2,
     			2.5
     		],
     		0,
     		6,
     		1,
     		"copper"
     	],
     	[
     		"lesser-cruelty",
     		5,
     		[
     			2,
     			4,
     			6,
     			8,
     			10
     		],
     		0,
     		6,
     		3,
     		"copper"
     	],
     	[
     		"extended-fury",
     		4,
     		[
     			0.2,
     			0.4,
     			0.6,
     			0.8
     		],
     		0,
     		6,
     		6,
     		"copper"
     	],
     	[
     		"precision",
     		5,
     		[
     			2,
     			4,
     			6,
     			8,
     			10
     		],
     		0,
     		8,
     		1,
     		"bronze"
     	],
     	[
     		"cruelty",
     		5,
     		[
     			10,
     			20,
     			30,
     			40,
     			50
     		],
     		0,
     		8,
     		3,
     		"bronze"
     	],
     	[
     		"enhanced-fury",
     		4,
     		[
     			2,
     			4,
     			6,
     			8
     		],
     		0,
     		8,
     		6,
     		"bronze"
     	],
     	[
     		"pure-skill",
     		5,
     		[
     			4,
     			8,
     			16,
     			32,
     			64
     		],
     		0,
     		10,
     		2,
     		"bronze"
     	],
     	[
     		"mutagenesis",
     		5,
     		[
     			0.5,
     			1,
     			1.5,
     			2,
     			2.5
     		],
     		0,
     		10,
     		5,
     		"bronze"
     	],
     	[
     		"glass-cannon",
     		3,
     		[
     			2.4,
     			4.8,
     			7.2
     		],
     		0,
     		12,
     		1,
     		"bronze"
     	],
     	[
     		"despair",
     		3,
     		[
     			5,
     			10,
     			15
     		],
     		0,
     		12,
     		5,
     		"silver"
     	],
     	[
     		"recoil",
     		3,
     		[
     			[
     				10,
     				5
     			],
     			[
     				15,
     				7.5
     			],
     			[
     				20,
     				10
     			]
     		],
     		0,
     		14,
     		1,
     		"silver"
     	],
     	[
     		"deep-wounds",
     		5,
     		[
     			[
     				0.5,
     				0.2
     			],
     			[
     				1,
     				0.4
     			],
     			[
     				1.5,
     				0.6
     			],
     			[
     				2,
     				0.8
     			],
     			[
     				2.5,
     				1
     			]
     		],
     		0,
     		14,
     		4,
     		"silver"
     	],
     	[
     		"unfazed",
     		5,
     		[
     			[
     				17,
     				10
     			],
     			[
     				22,
     				15
     			],
     			[
     				30,
     				20
     			],
     			[
     				40,
     				25
     			],
     			[
     				55,
     				30
     			]
     		],
     		0,
     		14,
     		6,
     		"silver"
     	],
     	[
     		"liquid-courage",
     		3,
     		[
     			10,
     			20,
     			30
     		],
     		0,
     		16,
     		0,
     		"silver"
     	],
     	[
     		"double-edge",
     		3,
     		[
     			[
     				8,
     				10,
     				10
     			],
     			[
     				12,
     				20,
     				15
     			],
     			[
     				16,
     				30,
     				20
     			]
     		],
     		0,
     		16,
     		2,
     		"silver"
     	],
     	[
     		"assassin",
     		5,
     		[
     			[
     				20,
     				12
     			],
     			[
     				30,
     				14
     			],
     			[
     				40,
     				16
     			],
     			[
     				50,
     				18
     			],
     			[
     				60,
     				20
     			]
     		],
     		0,
     		16,
     		5,
     		"silver"
     	],
     	[
     		"vitality",
     		9,
     		[
     			24,
     			36,
     			48,
     			60,
     			72,
     			84,
     			96,
     			120,
     			156
     		],
     		1,
     		0,
     		3,
     		"copper"
     	],
     	[
     		"greater-vitality",
     		9,
     		[
     			1.6,
     			2,
     			2.4,
     			2.8,
     			3.6,
     			4.4,
     			5.2,
     			6.4,
     			8
     		],
     		1,
     		2,
     		3,
     		"copper"
     	],
     	[
     		"salve",
     		3,
     		[
     			1,
     			2,
     			4
     		],
     		1,
     		4,
     		1,
     		"bronze"
     	],
     	[
     		"block-proficiency",
     		4,
     		[
     			2,
     			4,
     			6,
     			8
     		],
     		1,
     		4,
     		5,
     		"copper"
     	],
     	[
     		"energy-resistance",
     		4,
     		[
     			1,
     			2,
     			3,
     			4
     		],
     		1,
     		5,
     		3,
     		"copper"
     	],
     	[
     		"recovery",
     		3,
     		[
     			5,
     			10,
     			15
     		],
     		1,
     		6,
     		1,
     		"bronze"
     	],
     	[
     		"perfect-block",
     		4,
     		[
     			1,
     			2,
     			3,
     			4
     		],
     		1,
     		6,
     		5,
     		"copper"
     	],
     	[
     		"physical-resistance",
     		4,
     		[
     			1,
     			2,
     			3,
     			4
     		],
     		1,
     		7,
     		3,
     		"copper"
     	],
     	[
     		"stand-your-ground",
     		5,
     		[
     			17,
     			20,
     			25,
     			33,
     			50
     		],
     		1,
     		8,
     		5,
     		"bronze"
     	],
     	[
     		"collar-tech",
     		5,
     		[
     			4,
     			6,
     			9,
     			13,
     			18
     		],
     		1,
     		10,
     		2,
     		"bronze"
     	],
     	[
     		"serum-science",
     		5,
     		[
     			2,
     			4,
     			8,
     			16,
     			32
     		],
     		1,
     		10,
     		5,
     		"bronze"
     	],
     	[
     		"willpower",
     		3,
     		[
     			[
     				0.5,
     				2
     			],
     			[
     				0.6,
     				3
     			],
     			[
     				0.7,
     				4
     			]
     		],
     		1,
     		12,
     		1,
     		"silver"
     	],
     	[
     		"coagulate",
     		3,
     		[
     			10,
     			20,
     			30
     		],
     		1,
     		14,
     		0,
     		"silver"
     	],
     	[
     		"inequity",
     		3,
     		[
     			2,
     			4,
     			6
     		],
     		1,
     		14,
     		2,
     		"silver"
     	],
     	[
     		"suture",
     		3,
     		[
     			10,
     			15,
     			20
     		],
     		1,
     		16,
     		0,
     		"silver"
     	],
     	[
     		"resonate",
     		3,
     		[
     			7,
     			10,
     			13
     		],
     		1,
     		16,
     		2,
     		"silver"
     	],
     	[
     		"wisdom",
     		3,
     		[
     			10,
     			20,
     			30
     		],
     		2,
     		0,
     		1,
     		"copper"
     	],
     	[
     		"limber",
     		5,
     		[
     			8,
     			16,
     			24,
     			32,
     			48
     		],
     		2,
     		1,
     		5,
     		"copper"
     	],
     	[
     		"intelligence",
     		5,
     		[
     			4,
     			8,
     			12,
     			16,
     			20
     		],
     		2,
     		2,
     		1,
     		"copper"
     	],
     	[
     		"parry",
     		3,
     		[
     			[
     				1.5,
     				20
     			],
     			[
     				1.7,
     				25
     			],
     			[
     				2,
     				33
     			]
     		],
     		2,
     		3,
     		4,
     		"bronze"
     	],
     	[
     		"dexterity",
     		3,
     		[
     			10,
     			25,
     			33
     		],
     		2,
     		3,
     		6,
     		"bronze"
     	],
     	[
     		"stupefy",
     		3,
     		[
     			0.1,
     			0.3,
     			0.5
     		],
     		2,
     		5,
     		3,
     		"bronze"
     	],
     	[
     		"petrify",
     		3,
     		[
     			10,
     			20,
     			30
     		],
     		2,
     		5,
     		5,
     		"bronze"
     	],
     	[
     		"pittance",
     		3,
     		[
     			1,
     			2,
     			3
     		],
     		2,
     		6,
     		1,
     		"bronze"
     	],
     	[
     		"pacify",
     		3,
     		[
     			10,
     			20,
     			30
     		],
     		2,
     		7,
     		5,
     		"bronze"
     	],
     	[
     		"prosperity",
     		3,
     		[
     			0.4,
     			1.2,
     			2
     		],
     		2,
     		8,
     		1,
     		"bronze"
     	],
     	[
     		"cosmic-awareness",
     		5,
     		[
     			2.5,
     			5,
     			10,
     			20,
     			40
     		],
     		2,
     		10,
     		2,
     		"bronze"
     	],
     	[
     		"mystic-dispersion",
     		5,
     		[
     			2,
     			3,
     			5,
     			8,
     			12
     		],
     		2,
     		10,
     		5,
     		"bronze"
     	],
     	[
     		"detect-cosmic",
     		3,
     		[
     			1,
     			2,
     			3
     		],
     		2,
     		12,
     		3,
     		"bronze"
     	],
     	[
     		"detect-tech",
     		3,
     		[
     			1,
     			2,
     			3
     		],
     		2,
     		13,
     		1,
     		"bronze"
     	],
     	[
     		"detect-mystic",
     		3,
     		[
     			1,
     			2,
     			3
     		],
     		2,
     		13,
     		5,
     		"bronze"
     	],
     	[
     		"scouter-lens",
     		3,
     		[
     			1,
     			2,
     			3
     		],
     		2,
     		14,
     		3,
     		"silver"
     	],
     	[
     		"detect-mutant",
     		3,
     		[
     			1,
     			2,
     			3
     		],
     		2,
     		15,
     		1,
     		"bronze"
     	],
     	[
     		"detect-science",
     		3,
     		[
     			1,
     			2,
     			3
     		],
     		2,
     		15,
     		5,
     		"bronze"
     	],
     	[
     		"detect-skill",
     		3,
     		[
     			1,
     			2,
     			3
     		],
     		2,
     		16,
     		3,
     		"bronze"
     	]
     ];
