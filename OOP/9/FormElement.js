class FormElement {
    constructor(obj, attributes = {}) {
        this.obj = obj;
        this.attributes = attributes;
        this.create();
        this.adaptAttributes();
        this.setAttributes();
    }

    addToDOM(elem) {
        return this.obj.parentId ?
            document.getElementById(this.obj.parentId).appendChild(elem) : document.body.appendChild(elem);
    }

    create() {
        if (!document.getElementById(this.obj.id)) {
            const elem = document.createElement(this.obj.tag);

            elem.setAttribute( 'id', this.obj.id);
            this.addToDOM(elem)
        }

        return true;
    };

    adaptAttributes() {
        const attributes = this.attributes;

        if (attributes.rules) {
            attributes.rules.split('|').forEach((value) => value.includes(':') ?
                attributes[value.slice(0, value.indexOf(':'))] = value.slice(value.indexOf(':') + 1) : attributes[value] = value);
        }

        delete attributes.rules;
        return attributes;
    }

    setAttributes() {
        const tag = document.getElementById(this.obj.id);

        for (const key of Object.keys(this.adaptAttributes())) {
            tag.setAttribute( key, this.attributes[key]);
        }

        return true;
    }

    static resetWarning(elem) {
        elem.addEventListener('keypress', function f() {
            elem.style.border = '';
            elem.innerHTML = ''
            elem.placeholder = elem.placeholder.split(' ').shift();
            elem.removeEventListener('keypress', f);
        });
    }

    static displayWarning(elem) {
        elem.style.border = '2px solid red';
        elem.placeholder = `${elem.placeholder.split(' ').shift()} не соответствует`;
    }

    static validate() {
        const name = document.getElementById('name');
        const age = document.getElementById('age');

        this.resetWarning(name);
        this.resetWarning(age);

        if (!name.value) {
            this.displayWarning(name);
        }

        if (!(Number(age.value) >= 10)) {
            this.displayWarning(age);
        }

        if (!name.value || !age.value) {
            return alert('Ошибка валидации');
        }

        return alert('Данные сохранены');
    }

    static submit() {
        if (!document.getElementById('submit')) {
            return false;
        }

        document.getElementById('submit').addEventListener('click', (e) => {
            e.preventDefault();
            this.validate();
        });

        return true;
    };
}

new FormElement({tag: 'form', id: 'form'});
new FormElement({tag: 'input', id: 'name', parentId: 'form'}, {type: 'text', placeholder: 'Имя', value: 'John', rules: 'required'});
new FormElement({tag: 'input', id: 'email', parentId: 'form'}, {type: 'text', placeholder: 'Е-mail', value: 'mail@mail.com', rules: 'required|mail'});
new FormElement({tag: 'input', id: 'age', parentId: 'form'}, {type: 'text', placeholder: 'Возраст', value: '62', rules: 'required|min:10'});
new FormElement({tag: 'input', id: 'birthdate', parentId: 'form'}, {type: 'text', placeholder: 'Дата рождения', value: '01.01.1970', rules: 'required|date'});
new FormElement({tag: 'input', id: 'submit', parentId: 'form'}, {type: 'submit', value: 'Сохранить'});

FormElement.submit();
