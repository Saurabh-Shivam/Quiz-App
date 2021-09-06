const quizDb = [{
        question: "Q1: What is the full form of HTML?",
        a: "Hello To My Land",
        b: "Hyper Text Markup Language",
        c: "Hyper Makeup Language",
        d: "Hover The Making Language",
        ans: "ans2"
    },
    {
        question: "Q2: What is the full form of CSS?",
        a: "Cascading Style Sheet",
        b: "Common Style Sheet",
        c: "Continue Source System",
        d: "Can Save Source",
        ans: "ans1"
    },
    {
        question: "Q3: Where is Patna?",
        a: "India",
        b: "USA",
        c: "Bangladesh",
        d: "Pakistan",
        ans: "ans1"
    },
    {
        question: "Q4: World's dangerous dog breed?",
        a: "Rottwiller",
        b: "German Shepard",
        c: "Pit Bull",
        d: "Labrador",
        ans: "ans3"
    },
    {
        question: "Q5: Who founded Amazon?",
        a: "Elon Musk",
        b: "Bill Gates",
        c: "Steve Jobs",
        d: "Jeff Bezos",
        ans: "ans4"
    }
];

const question = document.querySelector('.ques');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer'); // This will give us an array

const showScore = document.querySelector('#showScore');

let questionCount = 0;
let score = 0;

const loadQuestion = () => {
    const questionList = quizDb[questionCount];

    question.innerText = questionList.question;

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;

}

loadQuestion();

const getCheckAns = () => {
    let answer;

    answers.forEach((currAnsElm) => {
        if (currAnsElm.checked) {
            answer = currAnsElm.id;
        }
    });

    return answer;
}

const AutoOptionCheckOff = () => {
    answers.forEach((currAnsElm) => currAnsElm.checked = false);
}

submit.addEventListener('click', () => {
    const checked_ans = getCheckAns();
    // console.log(checked_ans);

    if (checked_ans == quizDb[questionCount].ans) {
        score++;
    };

    questionCount++;

    AutoOptionCheckOff();

    if (questionCount < quizDb.length) {
        loadQuestion();
    } else {
        showScore.innerHTML = `
        <h3> You Scored ${score}/${quizDb.length} ✌ </h3>
        <button class= "btn" onclick="location.reload()"> Play Again</button> `;
        showScore.classList.remove('showArea');
    }

});