const date = new Date();

Vue.component('day', {
    props: ['data'],

    template: `
        <div class="col-sm-6">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">День {{ data.date }}</h5>
                    <p class="card-text">{{ data.desc }}</p>

                    <span class="badge bg-primary">Оценка дню: {{ data.score }}</span>
                </div>
            </div>
        </div>
    `
})

let app = new Vue({
    el: '#app',
    data: {
        currentDay: date.getDate() - 4,
        days: [],

        formNewDay: {
            descDay: '',
            score: 0,
        }
    },

    methods: {
        newDay() {
            this.days.push({
                desc: this.formNewDay.descDay,
                score: this.formNewDay.score,
                date: this.currentDay,
            });

            localStorage.setItem('days', JSON.stringify(this.days));
        },

        setScore(userScore) {
            this.formNewDay.score = userScore;
        }
    }
})

try {
    JSON.parse(localStorage.getItem('days')).forEach((day) => {
        app.days.push(day);
    });
} catch {
    console.log("There is no days in localStorage")
}