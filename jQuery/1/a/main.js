// 1
$('h2').html('!');

// 2
$('h3').css('color', 'red');

// 3
$('h2').css({'color': 'blue', 'font-size': '30px'});

// 4
$('.test').css('color', 'red');

// 5
$('h2.test').css('color', 'red');

// 6
$('p + p').css('color', 'red');

// 7
$('li + li.www').css('color', 'red');

// 8
$('h2 i').css('color', 'red');

// 9
$('h2 > i').css('color', 'red');

// 10
$(':header').css('color', 'red');

// 11
$('h2:not(.test)').css('color', 'red');

// 12
$(':header:not(.test)').css('color', 'red');

// 13
$(':header + :header').css('color', 'red');

// 14
$(':header.test + :header.test').css('color', 'red');

// 15
$(':empty').css('color', 'red');


