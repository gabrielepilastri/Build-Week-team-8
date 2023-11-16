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
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
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

// da inserire dentro una funzione
const domanda = document.getElementById("domanda");
const answerBox = document.getElementById("answerBox");
const bottone = document.getElementById("answerButton");
let indiceDomanda = 0;
let oggetto = questions[indiceDomanda];
let punteggio = 0;
let answers;
console.log(questions);


window.addEventListener('load',init());
function init(){
domande();
}
 

/*Popola le risposte per ogni domanda
function risposte() {
  
  
  console.log(answers);
}
*/


function getRandomAnswer(answers) {
  const randIndex = Math.floor(Math.random() * answers.length);
  return answers.splice(randIndex, 1)[0];
}

function domande() {
  // Ripulisci il contenuto precedente delle risposte

  answerBox.innerHTML = "";

  
    
    questions[indiceDomanda].answers = [...questions[indiceDomanda].incorrect_answers];
    questions[indiceDomanda].answers.unshift(questions[indiceDomanda].correct_answer);
    
  
  
  //console.log(answers);
  domanda.innerText = questions[indiceDomanda].question;

  for (let i = 0; i < questions[indiceDomanda].answers.length+4; i++) {
    let label = document.createElement("label");
    let radio = document.createElement("input");
    radio.setAttribute("type", "radio");
    radio.setAttribute("name", "bottone");
    let span = document.createElement("span");

    const randomAnswer = getRandomAnswer(questions[indiceDomanda].answers);
    span.innerText = randomAnswer;

    radio.classList.add("input");
    label.appendChild(radio);
    label.appendChild(span);
    label.classList.add("answers");

    answerBox.appendChild(label);
  }
}

function conferma() {
  // Ottieni la risposta selezionata
  const selezionata = document.querySelector('input[name="bottone"]:checked');

  if (selezionata) {
    // Verifica se la risposta Ã¨ corretta
    const rispostaUtente = selezionata.nextElementSibling.innerText;
    const rispostaCorretta = oggetto.correct_answer;

    if (rispostaUtente === rispostaCorretta) {
      punteggio++;
    }
  }
  indiceDomanda++;
  domande();
}


bottone.addEventListener("click", conferma);
/*
  // Passa alla prossima domanda o mostra il risultato finale
  if (indiceDomanda < questions.length - 1) {
    indiceDomanda++;
    domande();
  } else {
    mostraRisultato();
  }
  domande();
  bottone.addEventListener("click", conferma);
/*
function mostraRisultato() {
  alert(`Quiz completato! Punteggio: ${punteggio}/${questions.length}`);
  // Puoi anche aggiungere logica per mostrare i risultati nell'HTML
}

// Aggiungi l'evento click al bottone
bottone.addEventListener("click", conferma);

// Chiamate alle funzioni principali
domande();



// function selectAnswer() {
//   label.addEventListener("click", colora())
// }


// function colora() {
//   label.classList.add("answersChecked")
// }

// selectAnswer();

// function timer() {
//   setInterval(window.onload, 30000)
// }




  // 




    
  //   answer1.innerText = oggetto.answers[getRandomNum];
  //   answer2.innerText = oggetto.answers[getRandomNum];
  //   answer3.innerText = oggetto.answers[getRandomNum];
  //   answer4.innerText = oggetto.answers[getRandomNum];
    
    
// vogliamo generare un numero random non ripetuto da assegnare all'indice della risposta in modo che le risposte si dispongano casualmente 



// }
//   }








/* function domandaCorrente() {
// if (conferma())
for (let i = 0; i < questions.length; i++) {
  let oggetto = questions[i];
  domanda.innerText = oggetto.question;

  for (let j = 0; j < questions[i].answers.length; j++){
    const getRandomNum = function() {
         const numRisposte = questions[i].answers
         const randIndex = Math.floor(Math.random() * numRisposte.length)
         const random = numRisposte.splice(randIndex, 1)[0]
         console.log(random)
         return random;
       }
       getRandomNum ()
    
  }


}}; */
