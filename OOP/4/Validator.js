class Validator {

    static isEmail(str) {
        const validate = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        return validate.test(String(str).toLowerCase());
    }

    static isDomain(str) {
        const validate = /(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        return validate.test(String(str).toLowerCase());
    }

    static isDate(str) {
        const date = str.split('.');

        return date.length === 3 && !isNaN(Number(date[0])) && !isNaN(Number(date[1])) && !isNaN(Number(date[2])) && date[0].length === 2
            && date[1].length === 2 && date[2].length === 4;
    }

    static isPhone(str) {
        const data = str.split('');

        if (data.length < 8) {
            return false;
        } else {
            for (const elem of data) {
                if (isNaN(elem)) {
                    return false;
                }
            }
        }

        return true;
    }
}

console.log(Validator.isEmail('dsad@gmail.com'));
console.log(Validator.isDomain('mail.ru'));
console.log(Validator.isDate('12.12.2021'));
console.log(Validator.isPhone('061234567'));

