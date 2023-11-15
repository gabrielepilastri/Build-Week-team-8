const questions = [
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "What does CPU stand for?",
      correct_answer: "Central Processing Unit",
      incorrect_answers: ["Central Process Unit","Computer Personal Unit", "Central Processor Unit",],
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
      incorrect_answers: [
        "Ice Cream Sandwich",
        "Jelly Bean",
        "Marshmallow",
      ],
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
      incorrect_answers: ["Python", "C", "Jakarta"],
    },
  ];

  

  window.onload = function () {}


 const domanda = document.getElementById("domanda");

 const answer1 = document.getElementById("answer1");
 const answer2 = document.getElementById("answer2");
 const answer3 = document.getElementById("answer3");
 const answer4 = document.getElementById("answer4");

 const bottone = document.getElementById("answerButton");

for (let i = 0; i < questions.length; i++){
  questions[i].answers = [...questions[i].incorrect_answers];
  questions[i].answers.unshift(questions[i].correct_answer)
}



/*
Per riuscire a nascondere i div delle rispose che non ci sono (3-4 dei V/F), poniamo visibility nulla e se c'è contenuto di risposta allora appare il div visibile

if (---answer--- !== undefined){
  visibility: visible;    
}

*/


 function eventHandler() {
    domandaCorrente();
    timer();
    selectAnswer(); 

    conferma();

    domandaSuccessiva();
 }


function domandaCorrente() {
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
  
  
  }};




    // 




      
    //   answer1.innerText = oggetto.answers[getRandomNum];
    //   answer2.innerText = oggetto.answers[getRandomNum];
    //   answer3.innerText = oggetto.answers[getRandomNum];
    //   answer4.innerText = oggetto.answers[getRandomNum];
      
      
  // vogliamo generare un numero random non ripetuto da assegnare all'indice della risposta in modo che le risposte si dispongano casualmente 
  
  

// }
//   }



domandaCorrente()
