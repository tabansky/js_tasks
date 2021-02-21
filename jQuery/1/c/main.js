// 1
$('p').click( function() {
    alert($(this).html());
});

// 2, 3
$('a').mouseover(function func() {
    $(this).append('(' + $(this).attr('href') +')');
    $(this).unbind('mouseover', func);
});

// 4
$('input').focusout(function func() {
    $(this).after('<p id="test">'+ $(this).val()+ '</p>');
    $(this).unbind('focusout', func);
});

// 5
$('input').click(function func() {
    alert($(this).val());
    $(this).unbind('click', func);
});

// 6
$('p.numbers').click(function func() {
    $(this).html($(this).html() * $(this).html());
});

// 7
$('p.numbers').click(function func() {
    console.log($(this).html());
    $(this).unbind('click', func);
}).dblclick(function func() {
    $(this).html($(this).html() * $(this).html());
    $(this).unbind('dblclick', func);
});

// 8 9
$('a').on('mouseover', function func() {
    $(this).append('(' + $(this).attr('href') +')');
    $(this).unbind('mouseover', func);
});

// 10
$('p').one('click', function () {
    $(this).append('!');
})

// 11
$('ul').on('click', 'li', function () {
    $(this).append('!');
}).next().on('click', function () {
    $(this).prev().children().last().after('<li>пункт</li>');
});

// 12
$('table').on('click', 'td', function () {
    $(this).html(prompt());
}).nextAll('button').on('click', function () {
    $(this).prevAll('table').children().last().after(
        '<tr>\n' +
            '<td>'+ $(this).prevAll('#name').val() +'</td>\n' +
            '<td>'+ $(this).prevAll('#surname').val() +'</td>\n' +
        '</tr>'
    );
});


