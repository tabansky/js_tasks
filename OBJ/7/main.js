let person = {
    name: `Person`,
    age: 123,
    salary: 1542.33,
    contacts: {
        phone: `112`,
        email: 'email@domain.com'
    },
    address: `Moldova`,

    get getName()  {
        return this.name;
    },

    get getAge()  {
        return this.age;
    },

    get getSalary()  {
        return this.salary;
    },

    get getPhone()  {
        return this.contacts.phone;
    },

    get getMail()  {
        return this.contacts.email;
    },

    get getAddress()  {
        return this.address;
    }
};

console.log(person.getName, person.getAge, person.getSalary, person.getPhone, person.getMail, person.getAddress);


