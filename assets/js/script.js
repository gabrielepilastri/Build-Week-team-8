const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn't get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question:
      "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: [
      "Counter Strike: Source",
      "Corrective Style Sheet",
      "Computer Style Sheet",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C+", "Jakarta"],
  },
];

// prova






// da inserire dentro una funzione
const domanda = document.getElementById("domanda");
const answerBox = document.getElementById("answerBox");
const bottone = document.getElementById("answerButton");
let indiceDomanda = 0;
let punteggio = 0;
let h3 = document.getElementById("questionNumber");
let quiz = document.getElementById("quiz");
let numeroDomanda = 1;
let timer;
let divDeiRisultati = document.getElementById("resultContainer");
let myChart; 
window.addEventListener('load', init);

function init() {
  const ctx = document.getElementById('myChart').getContext('2d');
  myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Correct', 'Wrong'],
      datasets: [{
        label: '# of Votes',
        data: [0, 0],
        backgroundColor: ['#00FFFF', '#d20094'],
        borderWidth: 1
      }]
    },
    plugins: [
      {
        id: 'text',
        beforeDraw: function (chart, a, b) {
          let width = chart.width,
            height = chart.height,
            ctx = chart.ctx;
          ctx.restore();
          let fontSize = (0.5).toFixed(2);
          ctx.font = fontSize + 'em sans-serif';
          ctx.textBaseline = 'middle';
          let text;
          if(punteggio>6){
            text =`Congratulations! You passed the exam.`
          } else{
            text=`You Failed the exam`
          }
            textX = Math.round((width - ctx.measureText(text).width) / 2),
            textY = height / 2;
          ctx.fillText(text, textX, textY);
          ctx.fillStyle = 'white';
          ctx.save();
        },
      },
    ],
  });
  domande();
}




function startTimer() {
  timer = setTimeout(() => {
    // Funzione chiamata quando il timer scade
    domande();
  }, 60000); // 5 secondi
}

function resetTimer() {
  clearTimeout(timer); // Resetta il timer
  startTimer();
}

function getRandomAnswer(answers) {
  const randIndex = Math.floor(Math.random() * answers.length);
  return answers.splice(randIndex, 1)[0];
}


function domande() {
  // Ripulisci il contenuto precedente delle risposte
  answerBox.innerHTML = "";

  if (indiceDomanda < questions.length) {
    let oggetto = questions[indiceDomanda];
    oggetto.answers = [...oggetto.incorrect_answers];
    oggetto.answers.unshift(oggetto.correct_answer);

    domanda.innerText = oggetto.question;

    for (let i = 0; i < oggetto.answers.length * 4; i++) {
      let label = document.createElement("label");
      let radio = document.createElement("input");
      radio.setAttribute("type", "radio");
      radio.setAttribute("name", "bottone");
      let span = document.createElement("span");

      const randomAnswer = getRandomAnswer(oggetto.answers);
      span.innerText = randomAnswer;

      radio.classList.add("input");
      label.appendChild(radio);
      label.appendChild(span);
      label.classList.add("answers");

      answerBox.appendChild(label);
    }
    h3.innerText = `DOMANDA ${numeroDomanda}/10`;
    indiceDomanda++;
    numeroDomanda++;
    resetTimer();
  } else {

    quiz.classList.add("hidden");
    quiz.innerText = "";
    divDeiRisultati.style.visibility = "visible";
    
  }
}





bottone.addEventListener("click", conferma);
function conferma() {
  // Ottieni la risposta selezionata
  const selezionata = document.querySelector('input[name="bottone"]:checked');

  if (selezionata) {
    // Verifica se la risposta è corretta
    const rispostaUtente = selezionata.nextElementSibling.innerText;
    const rispostaCorretta = questions[indiceDomanda - 1].correct_answer;

    if (rispostaUtente === rispostaCorretta) {
      punteggio++;
    }
    console.log(punteggio);
  }

  domande();

  
let correct = document.getElementById("corrette");
let wrong = document.getElementById("sbagliate");
  // Aggiorna il testo nel grafico
  correct.innerText = `${punteggio * 10}%`;
  wrong.innerText = `${(10 - punteggio) * 10}%`;

  // Aggiorna il grafico
  
  
    updateChart();
}

function updateChart() {
  
  // Aggiorna il grafico con i nuovi dati
  myChart.data.datasets[0].data = [punteggio, 10 - punteggio];
  myChart.update();
}
















