$('#btn').on('click', function () {
    const value = $('#input');

    if (value.val()) {
        $('#users').children().last().after(
            '<tr>\n' +
                '<td>' + value.val() + '</td><td class="close">&#10006;</td>' +
             '</tr>'
        );

        value.val('');
    }
});

$('table').each(function () {
    $(this).on('click', '.close', function () {
        $(this).parent('tr').remove();
    });
})

