class FormElement {
    constructor(tag, id, parentId = '', type = '', placeholder = '', value = '', rules = '', innerTxt = '') {
        this.tag = tag;
        this.type = type;
        this.parentId = parentId;
        this.id = id;
        this.placeholder = placeholder;
        this.value = value;
        this.rules = rules;
        this.innerTxt = innerTxt;
        this.create();
    }

    create() {
        if (!document.getElementById(this.id)) {
            const elem = document.createElement(this.tag);

            elem.setAttribute( 'id', this.id);

            if (this.parentId) {
                document.getElementById(this.parentId).appendChild(elem);
            } else {
                document.body.appendChild(elem);
            }

            this.tag = document.getElementById(this.id);
            this.setAttributes();
        } else {
            this.tag = document.getElementById(this.id);
            this.setAttributes();
        }
    };

    setAttributes() {
        if (this.type) {
            this.tag.setAttribute( 'type', this.type);
        }

        if (this.placeholder) {
            this.tag.setAttribute( 'placeholder', this.placeholder);
        }

        if (this.value) {
            this.tag.setAttribute( 'value', this.value);
        }

        if (this.rules) {
            this.tag.setAttribute( 'rules', this.rules);
        }

        if (this.innerTxt) {
            this.tag.value = this.innerTxt;
        }
    }

    getValue() {
        return this.tag.innerText;
    };

    static validate() {
        if (!document.getElementById('submit')) {
            return;
        }

        document.getElementById('submit').addEventListener('click', () => {
            const name = document.getElementById('name');
            const age = document.getElementById('age');
            const validateName = name && name.value ? false : name.style.border = '2px dashed red';
            const validateAge = (age && Number(age.value) >= 10) ? false : age.style.border = '2px dashed red';

            if (validateName || validateAge) {
                return alert('Ошибка валидации');
            }

            return alert('Данные сохранены');
        });
    };
}

new FormElement('form', 'form');
new FormElement('input', 'name', 'form', 'text', 'Имя', 'John', 'required');
new FormElement('input', 'email', 'form', 'text', 'Е-мэйл', 'mail@mail.com', 'required|mail');
new FormElement('input', 'age', 'form', 'text', 'Возраст', '62', 'required|min:10');
new FormElement('input', 'birthdate', 'form', 'text', 'Дата рождения', '01.01.1970', 'required|date');
new FormElement('input', 'submit', 'form', 'button', '', '', '', 'Сохранить');

FormElement.validate();
