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
            coefficient: undefined
        }
    },

    methods: {
        setCoefficient(e) {
            this.coefficient = e.target.value;
        },

        getRate(value) {
            if (value < 1) {
                return;
            }

            return value > 5 ? this.workExperiences[Object.keys(this.workExperiences).pop()] : this.workExperiences[value];
        },

        calculateSalary(e) {
            this.salary = this.getRate(e.target.value) * this.coefficient;
        }
    }
}

Vue.createApp(app).mount('#container');