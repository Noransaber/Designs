'use strict';

const quizData = [
  {
    question: 'Where is the correct place to insert a JavaScript?',
    a: 'The <head> section',
    b: 'The <body> section',
    c: 'Both the <head> and the <body> section are correct',
    d: 'none of the above',
    correct: 'c',
  },

  {
    question: 'Which language runs in a web browser?',
    a: 'Java',
    b: 'C',
    c: 'Python',
    d: 'JavaScript',
    correct: 'd',
  },
  {
    question: 'What does CSS stand for?',
    a: 'Central Style Sheets',
    b: 'Cascading Style Sheets',
    c: 'Cascading Simple Sheets',
    d: 'Cars SUVs Sailboats',
    correct: 'b',
  },
  {
    question: 'What does HTML stand for?',
    a: 'Hypertext Markup Language',
    b: 'Hypertext Markdown Language',
    c: 'Hyperloop Machine Language',
    d: 'Helicopters Terminals Motorboats Lamborginis',
    correct: 'a',
  },
  {
    question: 'What year was JavaScript launched?',
    a: '1996',
    b: '1995',
    c: '1994',
    d: 'none of the above',
    correct: 'b',
  },
];
const quiz = document.querySelector('.quiz-body');
const question = document.getElementById('question');
const answerEls = document.querySelectorAll('.answer');
const a_txt = document.getElementById('a_text');
const b_txt = document.getElementById('b_text');
const c_txt = document.getElementById('c_text');
const d_txt = document.getElementById('d_text');
const footerEl = document.querySelector('.quiz-footer');
const quizDetailEl = document.querySelector('.quiz-details');
const submitBtn = document.getElementById('btn');

let currentQuiz = 0;
let score = 0;

loadQuiz();
// ------------------------ Load Quiz function -------------------------
function loadQuiz() {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];
  question.innerText = currentQuizData.question;
  a_txt.innerText = currentQuizData.a;
  b_txt.innerText = currentQuizData.b;
  c_txt.innerText = currentQuizData.c;
  d_txt.innerText = currentQuizData.d;
  quizDetailEl.innerHTML = `<p>${currentQuiz + 1} of ${quizData.length}</p>`;
}
// ---------------------- deselectAnswers() fucntion------------------------------------
function deselectAnswers() {
  answerEls.forEach(function (answerEl) {
    answerEl.checked = false;
  });
}
// --------------------------- getselected() function -------------------------
function getSelected() {
  let answer;
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}
// ----------------------- on submit ----------------------------
submitBtn.addEventListener('click', function () {
  const answers = getSelected();

  if (answers) {
    if (answers === quizData[currentQuiz].correct) {
      score++;
    }
    nextQuestion();
  }
});
// ---------------------------------- nextQuestion--------------------------------
function nextQuestion() {
  currentQuiz++;
  if (currentQuiz < quizData.length) {
    loadQuiz();
  } else {
    quiz.innerHTML = `<h2>You answered ${score}/${quizData.length} question correctly</h2>
    <button type="button" onclick="location.reload()">Reload</button>
    `;
    footerEl.style.display = 'none';
  }
}
