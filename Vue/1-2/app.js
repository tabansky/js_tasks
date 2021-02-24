const app = {
    data() {
        return {
            username: 'Alex',
            age: undefined
        }
    },

    method: {
        calculateAge(e) {
            this.age = Math.floor((new Date() - new Date(e.target.value)) / 3.154e+10);
        }
    }
}

Vue.createApp(app).mount('#container');