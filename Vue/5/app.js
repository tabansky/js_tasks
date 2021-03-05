const app = {
    data() {
        return {
            count: 0,
            arrow: '',
            catalog: [
                {
                    name: 'Laptop',
                    price: 123.45
                },
                {
                    name: 'Smartphone',
                    price: 123.00
                }
            ]
        }
    },

    computed: {
        sortPrice() {
            if (!this.count) {
                this.arrow = ''

                return this.catalog;
            } else if (this.count === 1) {
                this.arrow = '&#8593;'

                return this.catalog.map(e => e).sort((a, b) => a.price - b.price)
            }
            this.arrow = '&#8595;'

            return this.catalog.map(e => e).sort((a, b) => b.price - a.price);
        }
    },

   watch: {
        count() {
            if (this.count === 3) {
                this.count = 0;
            }
        }
    }
}

Vue.createApp(app).mount('#container');
