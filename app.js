// Question Constructor
function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}
Question.prototype.checkAnswer = function (answer) {
    return this.answer === answer
};
// Quiz Constructor
function Quiz(questions) {
    this.questions = questions;
    this.score = 0;
    this.qustionIndex = 0;
}
Quiz.prototype.getQuestion = function () {
    return this.questions[this.qustionIndex];
}
Quiz.prototype.isFinish = function () {
    return this.questions.lenght === this.qustionIndex;
}
Quiz.prototype.quess = function (answer) {
    var question = this.getQuestion();
    if (question.checkAnswer(answer)) {
        this.score++;
    }
    this.qustionIndex++;
};


var q1 = new Question("What is the best programming", ["C#", "JavaScript", "Phyton", "asp.net"], "JavaScript");
var q2 = new Question("What is the most popular language", ["C#", "visual basic", "nedejs", "JavaScript"], "JavaScript");
var q3 = new Question("What is the best modern programming language", ["C#", "JavaScript", "Phyton", "asp.net"], "JavaScript");

var questions = [q1, q2, q3,];

// Start Quiz

var quiz = new Quiz(questions);


console.log(quiz.isFinish());

console.log(quiz.getQuestion());
quiz.quess("JavaScript");

console.log(quiz.getQuestion());
quiz.quess("JavaScript");

console.log(quiz.getQuestion());
quiz.quess("JavaScript");

console.log(quiz.score);
console.log(quiz.isFinish());