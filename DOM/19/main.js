const child = document.getElementById('child');
const parentLeft = document.getElementById('parent-left');
const parentRight = document.getElementById('parent-right');

const moveAt = (pageX, pageY, shiftX, shiftY) => {
    child.style.left = `${pageX - shiftX}px`;
    child.style.top = `${pageY - shiftY}px`;
}

const dragAndDrop = () => {
    child.addEventListener('mousedown', (e) => {
        let shiftX = e.clientX - child.getBoundingClientRect().left;
        let shiftY = e.clientY - child.getBoundingClientRect().top;

        child.style.position = 'absolute';

        moveAt(e.pageX, e.pageY, shiftX, shiftY);

        const onMouseMove = (e) => {
            moveAt(e.pageX, e.pageY, shiftX, shiftY);

            child.hidden = true;
            let elemBelow = document.elementFromPoint(e.clientX, e.clientY);
            child.hidden = false;

            if (elemBelow === parentLeft) {
                parentLeft.appendChild(child);
            } else {
                parentRight.appendChild(child);
            }
        }

        document.addEventListener('mousemove', onMouseMove);

        child.addEventListener('mouseup', () => {
            document.removeEventListener('mousemove', onMouseMove);
            child.onmouseup = null;
        });
    });

    child.addEventListener('ondragstart', () => {
        return false;
    });
};

document.addEventListener('DOMContentLoaded', () => {
   dragAndDrop();
});
