let quiz = [
  {
    question: "What is capital of India?",
    a: "Mumbai",
    b: "delhi",
    c: "hyderabad",
    d: "bhopal",
    correct: "b",
  },
  {
    question: "What is capital of Austraila?",
    a: "Melourne",
    b: "Sydney",
    c: "Canberra",
    d: "brisbane",
    correct: "c",
  },
  {
    question: "What is capital of Brazil?",
    a: "Brasillia",
    b: "Sau Paullo",
    c: "Rio de jenario",
    d: "Natal",
    correct: "a",
  },
  {
    question: "What is capital of columbia?",
    a: "Bogota",
    b: "Calli",
    c: "Medellin",
    d: "Pereira",
    correct: "a",
  },
  {
    question: "What is capital of Switzerland?",
    a: "Zurich",
    b: "Basei",
    c: "Lugano",
    d: "Bern",
    correct: "d",
  },
];
let count = 0;
let score = 0;

const question = document.querySelector("#question");
const aText = document.querySelector("#a-text");
const bText = document.querySelector("#b-text");
const cText = document.querySelector("#c-text");
const dText = document.querySelector("#d-text");
const submit = document.querySelector(".btn");
const answer = document.querySelectorAll(".answer");

updateQuiz();

function updateQuiz() {
  unCheck();
  let currenquiz = quiz[count];
  question.innerText = quiz[count].question;
  aText.innerText = quiz[count].a;
  bText.innerText = quiz[count].b;
  cText.innerText = quiz[count].c;
  dText.innerText = quiz[count].d;
}

submit.addEventListener("click", function () {
  const isAnswer = validateAnswer();
  if (isAnswer == true) {
    count++;
    if (count < quiz.length) {
      updateQuiz();
    } else {
      alert(`your score is ${score}`);
      location.reload()
    }
  } else {
    console.log("select an anwer");
  }
});

function validateAnswer() {
  for (let answers of answer) {
    if (answers.checked) {
      updateScore(answers);
      return true;
    }
  }
  return false;
}

function updateScore(value) {
  if (value.id == quiz[count].correct) {
    score++;
  }
}

function unCheck() {
  answer.forEach((answerEl) => {
    answerEl.checked = false;
  });
}
