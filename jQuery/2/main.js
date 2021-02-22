$('#btn').on('click', function () {
    if ($('#input').val()) {
        $('#users').children().last().after(
            '<tr>\n' +
                '<td>' + $('#input').val() + '</td><td class="close">&#10006;</td>' +
             '</tr>'
        );

        $('#input').val('');
    }
});

$('table').each(function () {
    $(this).on('click', '.close', function () {
        $(this).parent('tr').remove();
    });
})

