const app = {
    data() {
        return {
            languages: {"JavaScript": 1, "Python": 0.7, "Java": 1.3},
            workExperiences: {
                1: 10000,
                2: 12000,
                3: 13500,
                4: 14000,
                5: 15000
            },
            salary: undefined,
            rate: undefined,
            exp: undefined,
            coefficient: undefined
        }
    },

    methods: {
        calculateRate() {
            this.rate = this.exp < 1 ? null :
                this.exp > 5 ? this.workExperiences[Object.keys(this.workExperiences).pop()] : this.workExperiences[this.exp];
        }
    },

    computed: {
        calculateSalary() {
            return this.salary = this.rate * this.coefficient;
        }
    },

    watch: {
        exp() {
            if (this.exp > 0) {
                this.calculateRate();
            } else {
                this.rate = null;
            }
        },
    }

}

Vue.createApp(app).mount('#container');
