var tableau = [{
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

for (var i = 0; i < tableau.length; i++) {
  if (prompt(tableau[i].question).toLowerCase() === tableau[i].reponse.toLowerCase()) {
    console.log("Bonne réponse pour la question " + "'" + tableau[i].question + "'");
  } else {
    console.log("Faux! La bonne réponse pour la question " + "'" + tableau[i].question + "'" + " était " + "'" + tableau[i].reponse + "'");
  }
}