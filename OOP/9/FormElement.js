class FormElement {
    constructor(obj, attributes = {}) {
        this.obj = obj;
        this.attributes = attributes;
        this.create();
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

    setAttributes() {
        const tag = document.getElementById(this.obj.id);

        for (const key of Object.keys(this.attributes)) {
            tag.setAttribute( key, this.attributes[key]);
        }

        return true;
    }

    static validate() {
        if (!document.getElementById('submit')) {
            return false;
        }

        document.getElementById('submit').addEventListener('click', () => {
            const name = document.getElementById('name');
            const age = document.getElementById('age');
            const validateName = name && name.value ? false : name.style.border = '2px solid red';
            const validateAge = (age && Number(age.value) >= 10) ? false : age.style.border = '2px solid red';

            if (validateName || validateAge) {
                return alert('Ошибка валидации');
            }

            return alert('Данные сохранены');
        });

        return true;
    };
}

new FormElement({tag: 'form', id: 'form'});
new FormElement({tag: 'input', id: 'name', parentId: 'form'}, {type: 'text', placeholder: 'Имя', value: 'John', rules: 'required'});
new FormElement({tag: 'input', id: 'email', parentId: 'form'}, {type: 'text', placeholder: 'Е-mail', value: 'mail@mail.com', rules: 'required|mail'});
new FormElement({tag: 'input', id: 'age', parentId: 'form'}, {type: 'text', placeholder: 'Возраст', value: '62', rules: 'required|min:10'});
new FormElement({tag: 'input', id: 'birthdate', parentId: 'form'}, {type: 'text', placeholder: 'Дата рождения', value: '01.01.1970', rules: 'required|date'});
new FormElement({tag: 'input', id: 'submit', parentId: 'form'}, {type: 'button', value: 'Сохранить'});

FormElement.validate();
