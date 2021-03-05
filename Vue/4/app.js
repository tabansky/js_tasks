const app = {
    data() {
        return {
            checked: 'one',
            catalog: [
                {
                    name: 'Laptop',
                    price: 123.45
                },
                {
                    name: 'Smartphone',
                    price: 123.45
                }
            ]
        }
    }
}

Vue.createApp(app).mount('#container');
