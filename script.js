const quizData = [
    {
        question: "Which HTML tag is used to define an internal style sheet?",
        options: ["<style>", "<css>", "link"],
        correctAnswer: 2
    },
    {
        question: "Which HTML tag is used to create a hyperlink?",
        options: ["<a>", "<hyperlink>", "<href>"],
        correctAnswer: 0
    },
    {
        question: "Which JavaScript method is used to select an element by its ID",
        options: ["getElementByClassName()", "getElementsByTagName()", "getElementById()"],
        correctAnswer: 2
    },
    {
        question: "What is the default display value for a <div> element in CSS?",
        options: [" inline", "block", "inline-block"],
        correctAnswer: 1
    },
];
let score = 0;
let currentQuestionIndex = 0;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextBtnElement = document.getElementById("next-btn");
const scoreElement = document.getElementById("score");

function renderQuestion() {
    questionElement.textContent = quizData[currentQuestionIndex].question;
    optionsElement.innerHTML = "";
    quizData[currentQuestionIndex].options.forEach((option, index) => {
        const optionButton = document.createElement("button");
        optionButton.textContent = option;
        optionButton.addEventListener("click", () => {
            checkAnswer(index);
        });
        optionsElement.appendChild(optionButton);
    });
}
function checkAnswer(selectedOptionIndex) {
    if (selectedOptionIndex === quizData[currentQuestionIndex].correctAnswer) {
        score++;
        scoreElement.textContent = `Score: ${score}`;
    } else {
        alert(`Wrong answer`);
    }
}
nextBtnElement.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        renderQuestion();
    } else {
        alert(`Quiz finished! Your final score is: ${score}`);
    }
});

renderQuestion();