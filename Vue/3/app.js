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
            experience: undefined,
            coefficient: undefined
        }
    },

    computed: {
        salary() {
            return this.rate * this.coefficient;
        },

        rate() {
            return this.experience < 1 ? null :
                this.experience > 5 ? this.workExperiences[Object.keys(this.workExperiences).pop()] : this.workExperiences[this.experience];
        }
    }
}

Vue.createApp(app).mount('#container');
