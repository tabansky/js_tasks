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

// 16
$('p:first').css('color', 'red');

// 17
$('p:last').css('color', 'red');

// 18
$('li:contains("пункт")').css('color', 'red');

// 19
$('h2:has(i)').css('color', 'red');

// 20
$('h2 > i').css('color', 'red');

// 21
$('li:eq(2)').css('color', 'red');

// 22
$('li:gt(9)').css('color', 'red');

// 23
$('li:lt(9)').css('color', 'red');

// 24
$('li:gt(8)').css('color', 'red');

// 25
$('li:first').css('color', 'red');

// 26
$('li:last').css('color', 'red');

// 27
$('ol li:first').css('color', 'red');

// 28
$('ol li:last').css('color', 'red');

// 29
$('ol li:eq(9)').css('color', 'red');

// 30
$('li:odd').css('color', 'red');

// 31
$('li:even').css('color', 'red');

