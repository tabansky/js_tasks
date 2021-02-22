$(document).ready(function () {
    $(this).keydown(function (e) {
        const player = $('#player');
        const viewport = $('#viewport');

        console.log(parseInt(player.css('marginLeft')))
        switch (e.which) {
            case 37:
                if (player.css('marginLeft') > '0px') {
                    player.css({marginLeft: '-=50px'});
                }
                break;

            case 38:
                if (player.css('marginTop') > '0px') {
                    player.css({marginTop: '-=50px'});
                }
                break;

            case 39:
                if (player.css('marginLeft') < viewport.innerWidth() - 50 + 'px') {
                    player.css({marginLeft: '+=50px'});
                }
                break;

            case 40:
                if (player.css('marginTop') < viewport.innerHeight() - 50 + 'px') {
                    player.css({marginTop: '+=50px'});
                }
                break;
        }
    });
})
