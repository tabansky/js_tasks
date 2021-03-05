const app = {
    data() {
        return {
            username: 'Alex',
            currentDate: new Date(),
            age: undefined
        }
    },

    methods: {
        calculateAge(e) {
            this.age = Math.floor((this.currentDate - new Date(e.target.value)) / 3.154e+10);
            console.log('ss')
        }
    }
}

Vue.createApp(app).mount('#container');
