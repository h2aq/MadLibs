const readLine = require('readline-sync');
let answers = ['Quite certain', 'Decidedly so..', 'Without a doubt', 'Yes, yes most definitely', 'You may rely on it', 'As the way I see it, yes', 'Yeah, most likely', 'YESSSSS.', 'signs point to the yes answer', 'Reply hazy, try again..', 'Your questions are boring', 'Better not tell you now', 'Ask again later', 'I ran out of predictions', 'Concentrate and ask again', 'Don\'t count on it', 'No.', 'My sources say no', 'Outlook not so good', 'Very very VERY doubtful..'];
let randomNum = Math.floor(Math.random()*answers.length);
let answer = answers[randomNum];
console.log("Hello! I'm a magic 8 ball! Please type to provide me a question in the prompt below. To quit, simply type 'quit'");

let word = readLine.question('Ask me a question: ');
console.log(answer);

