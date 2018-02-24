'use strict;';


function getTranslations(locale) {
  return new Promise(function (resolve, reject) {
    $.ajax('locale.' + locale + '.json', {
      success: function (data, textStatus, jqXHR) {
        resolve(data);
      },
      error: function (jqXHR, textStatus, errorThrown) {
        console.log("Unable to load translation file for locale " + locale, errorThrown);
        resolve(null);
      }
    });
  });
}

function createView(rank) {
  var view = {};
  Object.keys(rank).forEach(function (key) {
    view[key] = '<span class="variable">' + rank[key] + '</span>';
  });
  return view;
}

function applyTranslations() {
  Object.keys(translations.masteries).forEach(function (name) {
    var translation = translations.masteries[name],
      $mastery = $('#' + name);

    $mastery.data('label', translation.label);
    $mastery.data('description', translation.description);

  });

  $('#help').text(translations.help);
}

function restoreState() {
  var hash = location.hash;
  if (!hash) return;
  var digits = hash.substr(1).split('');
  digits.forEach(function (rank, index) {
    masteries[index].rank = parseInt(rank, 10);
  });
}

function attachMastery(configObject, $container) {
  var $mastery = $('<div class="mastery icon-' + configObject.name + '">');
  $mastery
    .appendTo($container)
    .css('left', configObject.xpos * 52 + 20)
    .css('top', configObject.ypos * 36 + 20)
    .attr('id', configObject.name)
    .data('config', configObject)
    .data('type', configObject.type)
    .data('rank', configObject.rank || 0)
    .data('requirement', configObject.requirement || null)
    .addClass(configObject.style)
    .on('click', handleClick);
  configObject.element = $mastery;
}

function setMasteryValue($mastery, rank) {
  var max = $mastery.data('config').max,
    className = rank > 0 ? (rank === max ? 'max' : 'notnull') : '',
    configObject = $mastery.data('config');

  configObject.rank = rank;

  $mastery
    .removeClass('notnull')
    .removeClass('max')
    .addClass(className)
    .empty()
    .append($('<span class="rank">').text(rank + '/' + max).on('click', function (event) {
      setMasteryValue($(this).parent(), 0);
      updateView();
      event.stopPropagation();
    }))
    .append($('<span class="help">?</span>').on('click', function (event) {
      event.stopPropagation();
    }))
  ;

  var view = createView(configObject.ranks[rank > 0 ? rank - 1 : 0]);
  var text = Mustache.render($mastery.data('description'), view);
  if (configObject.requirement) {
    text += '<br>' + Mustache.render(translations.requirement, { points: configObject.requirement });
  }

  $mastery.find('.help').qtip({
    content: {
      title: $mastery.data('label'),
      text: text
    },
    position: {
      my: 'bottom center',
      at: 'top center'
    },
    style: 'qtip-jtools ' + className
  });
}

function isAllowed(mastery) {
  var requirement = mastery.requirement;

  if (requirement === null) {
    return true;
  }

  if (typeof requirement === "number") {
    return types[mastery.type] >= requirement;
  }

  if (typeof requirement === "string") {
    var target = masteries.find(function (item) {
      return item.name === requirement;
    });
    if(!target) {
      throw new Error('Unknown requirement ' + requirement);
    }

    return target.rank >= 1;
  }

  return true;
}

function handleClick(event) {
  var $mastery = $(this), rank = $mastery.data('config').rank;
  if (!isAllowed($mastery.data('config'))) {
    $mastery.addClass('flash');
    setTimeout(function () {
      $mastery.removeClass('flash');
    }, 300);
    return;
  }
  if (event.ctrlKey || event.shiftKey) {
    rank--;
  } else {
    rank++;
  }
  rank = Math.max(rank, 0);
  rank = Math.min(rank, $mastery.data('config').max);
  setMasteryValue($mastery, rank);
  updateView();
}

function updateView() {
  defineHash();
  updateSpent();
  updatePi();
}

function defineHash() {
  location.hash = masteries.map(function (mastery) {
    return mastery.rank;
  }).join('');
}

function updateSpent() {
  var spent = 0;
  types = [];
  masteries.forEach(function (mastery) {
    spent += mastery.rank;
    types[mastery.type] = (types[mastery.type] || 0) + mastery.rank;
  });
  $('#spent').text(Mustache.render(translations.spent, { spent: spent }));
  $('#spent')[spent > 59 ? 'addClass' : 'removeClass']('overspent');
  var typeNames = ['offensive', 'defensive', 'utility'];
  types.forEach(function (points, type) {
    $('[data-type="' + type + '"] .points').text(translations[typeNames[type]] + " (" + points + ")");
  });
}

function updatePi() {
  var pi = 0;
  var next = [];
  masteries.forEach(function (mastery) {
    for (var i = 0; i < mastery.rank; i++) {
      pi += mastery.ranks[i].pi;
    }
    if(mastery.ranks[mastery.rank] && isAllowed(mastery)) {
      next.push(mastery);
    }
  });
  next = next.sort(function (a,b) { return b.ranks[b.rank].pi - a.ranks[a.rank].pi; });
  var table = [];
  for(var i=0; i<next.length && i<10; i++) {
    table.push([next[i].name, next[i].ranks[next[i].rank].pi]);
  }
  console.table(table);
  $('#pi').text(Mustache.render(translations.pi, { pi: pi.toFixed(2) })).attr('title', Mustache.render('10000 => {{{val}}}', { val: Math.round(10000 * (1 + pi / 100)) }));
}

function buildUI() {
  for (var type = 0; type < 3; type++) {
    buildPane(type);
  }
}

function buildPane(type) {
  var $container = $('.container[data-type="' + type + '"]');
  masteries.filter(function (mastery) {
    return mastery.type === type;
  }).forEach(function (mastery) {
    attachMastery(mastery, $container);
  });
  var $points = $container.find('.points');
}

function initMasteries() {
  $('div.mastery').each(function (index, element) {
    var $mastery = $(element);
    setMasteryValue($mastery, $mastery.data('config').rank || 0);
  });
}

$(function () {

  restoreState();

  var supportedLocales = ['en', 'fr'],
    locale = 'en';
  if (supportedLocales.indexOf(window.navigator.language) > -1) locale = window.navigator.language;

  getTranslations(locale)
    .then(function (result) {
      translations = result;
      buildUI();
      applyTranslations();
      initMasteries();
      updateView();
    });
});

var translations, types = [];
