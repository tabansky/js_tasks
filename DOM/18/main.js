const player = document.getElementById('player');
const viewport = document.getElementById('viewport');

const movePlayer = (e) => {
    const stylesPlayer = window.getComputedStyle(player);

    let top = parseInt(stylesPlayer.marginTop);
    let left = parseInt(stylesPlayer.marginLeft);

    switch (e.key) {
        case "ArrowLeft":
            if (left > 0) {
                player.style.marginLeft = left - 50 + "px";
            }
            break;

        case "ArrowUp":
            if (top > 0) {
                player.style.marginTop = top - 50 + "px";
            }
            break;

        case "ArrowRight":
            if (Number(left) < viewport.clientWidth - 50) {
                player.style.marginLeft = left + 50 + "px";
            }
            break;

        case "ArrowDown":
            if (top < viewport.clientHeight - 50) {
                player.style.marginTop = top + 50 + "px";
            }
            break;
    }

}

document.addEventListener('DOMContentLoaded', () => {
    addEventListener('keydown', movePlayer);
});
