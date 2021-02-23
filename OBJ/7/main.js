const person = {
    name: "Person",
    age: 123,
    salary: 1542.33,
    contacts: {
        phone: "112",
        email: "email@domain.com"
    },
    address: "Moldova",

    getName() {
        return this.name;
    },

    getAge() {
        return this.age;
    },

    getSalary() {
        return this.salary;
    },

    getPhone() {
        return this.contacts.phone;
    },

    getMail() {
        return this.contacts.email;
    },

    getAddress() {
        return this.address;
    }
};

console.log(person.getName(), person.getAge(), person.getSalary(), person.getPhone(), person.getMail(), person.getAddress());


