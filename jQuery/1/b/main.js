// 1
$('li').not('.test');

// 2
$('li').first();

// 3
$('li').last();

// 4
$('li').eq(4);

// 5
$('li').eq(-2);

// 6
$('li').slice(2, 10);

// 7
$('li').filter('.www');

// 8
$('.test').next();

// 9
$('.test').prev();

// 10
$('.test').nextAll();

// 11
$('.test').prevAll();

// 12
$('.www').nextUntil('.test');

// 13
$('.test').prevUntil('.www');

// 14
$('li.www').siblings();

// 15
$('li.www').siblings('.test');

// 16
$('li.www').siblings(':not(.test)');

// 17
$('.test').parent();

// 18
$('b').parents().css('color', 'red');

// 19
$('b').closest('div').css('color', 'red');

// 20
$('h2.www').css('color', 'red').find('.test').css('font-size', '30px');

// 21
$('.www').css('color', 'red').find('p').append('!');

// 22
$('p.www').prepend('!').append('!!').add('h2').css('color', 'red');

// 23
$('h2').is('h2.test');

// 24
$(':header').nextAll().each(function () {
    if ($(this).is('p')) {
        $(this).append($(':header').html());
    }
});

// 25
