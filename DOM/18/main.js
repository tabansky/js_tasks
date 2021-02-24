const player = document.getElementById('player');
const viewport = document.getElementById('viewport');

const movePlayer = (e) => {
    const stylesPlayer = window.getComputedStyle(player);
    const arrows = {
        ArrowLeft() {
            if (left > 0) {
                player.style.marginLeft = `${left - 50}px`;
            }
        },

        ArrowUp() {
            if (top > 0) {
                player.style.marginTop = `${top - 50}px`;
            }
        },

        ArrowRight() {
            if (Number(left) < viewport.clientWidth - 50) {
                player.style.marginLeft = `${left + 50}px`;
            }
        },

        ArrowDown() {
            if (top < viewport.clientHeight - 50) {
                player.style.marginTop = `${top + 50}px`;
            }
        }
    }

    let top = parseInt(stylesPlayer.marginTop);
    let left = parseInt(stylesPlayer.marginLeft);


    if (arrows[e.key]) {
        arrows[e.key]();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    addEventListener('keydown', movePlayer);
});
