class Elem {
    constructor(id) {
        this.id = id;
        this.elem = this.createDiv();
    }

    createDiv() {
        if (!document.getElementById(this.id.toString())) {
            const div = document.createElement('div');
            div.setAttribute( 'id', this.id );
            document.body.appendChild(div);

            return div;
        }

        return document.getElementById(this.id);
    }

    html(value) {
        this.elem.innerHTML = value.toString();

        return this;
    }

    append(value) {
        this.elem.append(value.toString());

        return this;
    }

    prepend(value) {
        this.elem.prepend(value.toString());

        return this;
    }

    attr(attr, value) {
        this.elem.setAttribute(attr, value);

        return this;
    }
}

const elem = new Elem('test');

elem.html('Hello');
elem.append('!');
elem.prepend('@');
elem.attr('class', 'www');

const elem2 = new Elem('test2');

elem2.html('Hello').append('!').prepend('@').attr('class', 'www');

