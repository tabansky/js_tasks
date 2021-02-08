class Elem {
    elem;

    constructor(id) {
        if (!document.getElementById(id.toString())) {
            const div = document.createElement('div');
            div.setAttribute( 'id', id );
            document.body.appendChild(div);
        }

        this.elem = document.getElementById(id);
    }

    html(value) {
        this.elem.innerHTML = value.toString();
    }

    append(value) {
        this.elem.append(value.toString());
    }

    prepend(value) {
        this.elem.prepend(value.toString())
    }

    attr(attr, value) {
        this.elem.setAttribute(attr, value);
    }
}

const elem = new Elem('test');

elem.html('Hello');
elem.append('!');
elem.prepend('@');
elem.attr('class', 'www');

const elem2 = new Elem('test2');

elem2.html('Hello').append('!').prepend('@');

