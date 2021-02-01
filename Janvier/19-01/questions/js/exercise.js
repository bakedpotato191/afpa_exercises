var questions = [{
    question: 'Est-ce que tu aimes le JavaScript?',
    reponse: 'Oui'
  },
  {
    question: 'Le JavaScript est une évolution du Java?',
    reponse: 'Non'
  },
  {
    question: 'Le JavaScript est proche du Java?',
    reponse: 'Non'
  },
  {
    question: "Le JavaScript est un langage d'objet par prototypage?",
    reponse: 'Oui'
  },
  {
    question: 'Le JavaScript est souvent utilisé coté client?',
    reponse: 'Oui'
  },
  {
    question: 'Le JavaScript peut être utilisé coté client et serveur?',
    reponse: 'Oui'
  }
];


for (var i = 0; i < questions.length; i++) {
  var resultat = prompt(questions[i].question);
  if (resultat === questions[i].reponse) {
    console.log("Bonne réponse pour la question " + "'" + questions[i].question + "'");
  } else {
    console.log("Faux! La bonne réponse pour la question " + "'" + questions[i].question + "'" + " était " + "'" + questions[i].reponse + "'");
  }
}