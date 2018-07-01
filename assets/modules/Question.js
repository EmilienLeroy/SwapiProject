import * as random from './random.js';

class Question {
    constructor()
    {
        this.question = null;
        this.answer1 = random.getRandom(1,80);
        this.answer2 = random.getRandom(1,80);
        this.goodAnswer = random.getRandom(0,1);
        this.allAnswer = [];
        this.checkAnswer()
    }

    checkAnswer()
    {
        /**
         * Verify is the 2 answer are different
         */
        while(this.answer1 == this.answer2){
            this.answer2 = random.getRandom(1,80);
        }

        if(this.answer1 != this.answer2){
            Promise.all([this.getAnswer(this.answer1), this.getAnswer(this.answer2)]).then(values => { 
                this.allAnswer.push(values[0],values[1]);
                this.generateQuestion();
            });
        }
    }

    getAnswer(nbQuestion)
    {
        return new Promise((resolve, reject) => {
            let url = "https://swapi.co/api/people/"+nbQuestion;
            let xhttp = new XMLHttpRequest();
            xhttp.responseType = 'json'
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    resolve(this.response)
                }
            };
            xhttp.open("GET", url, true);
            xhttp.send();
        });
    }

    generateQuestion()
    {
        this.question = "Who has hair "+this.allAnswer[this.goodAnswer].hair_color+" ? ";
    }
}

export default Question;