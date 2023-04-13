const readLine = require('readline-sync');
let nouns = []
let adjectives = []
let number = []
let person = []
let verb = []
let nounplural = []
let game = []
let place = []
let x = 0
let y = 0
let z = 0
let v = 0
let a = 0
let b = 0
let c = 0
let d = 0

//number
while (y <= 0) {
    let word = readLine.question('Input number: ')
    y++;
    number.push(word);
}
//adjectives
while (x <= 8) {
    let word = readLine.question('Input an adjective: ');
    x++;
    adjectives.push(word);
}
//noun plural
while (z <= 0) {
    let word = readLine.question('Input a plural noun: ')
    z++;
    nounplural.push(word);
}
//verb
while (v <= 2) {
    let word = readLine.question('Input a verb: ')
    v++;
    verb.push(word);
}
//person
while (a <= 1) {
    let word = readLine.question('Input a person name: ')
    a++;
    person.push(word);
}
//noun
while (b <= 1) {
    let word = readLine.question('Input a noun: ')
    b++;
    nouns.push(word);
}
//game
while (c <= 1) {
    let word = readLine.question('Input a game: ')
    c++;
    game.push(word);
}
//place
while (d <= 1) {
    let word = readLine.question('Input a place: ')
    d++;
    place.push(word);
}

console.log(`There was once upon a time in ${number[0].toUpperCase()} BC where a little bunny was roaming around with its ${adjectives[0].toUpperCase()} family finding a ${adjectives[1].toUpperCase()} 
     place to move in that they have to pay with ${nounplural[0].toUpperCase()} from the ${adjectives[2].toUpperCase()} place called ${place[0].toUpperCase()} located at the top of ${place[1].toUpperCase()}
     where they have to ${verb[0].toUpperCase()} to the death with ${person[0].toUpperCase()}. Suddenly, ${person[1].toUpperCase()} came in challenging the bunnies because he heard that they were strong.
     After they were done paying for their ${adjectives[3].toUpperCase()} place with the ${nounplural[0].toUpperCase()} they’ve paid for. As they were spending their ${adjectives[4].toUpperCase()} sabbatical with their ${adjectives[5].toUpperCase()} descendants,
     some ${adjectives[6].toUpperCase()} fellers were approaching them, as if they were making a deal.
     In truth, they were wondering if they can make ${nouns[0].toUpperCase()} out of them, but the bunnies ${adjectives[7].toUpperCase()} declined.
     The bunny family bloodline was having the most of fun they’ve had in a year. Suddenly, like for the millionth time, a human of the male gender
     who had an affable aura to them approached the bunnies as they were playing ${game[0].toUpperCase()} which could be easily mistaken as a professional game when viewed from afar.
     The humane man asked the bunnies if they wanted a ${verb[1].toUpperCase()} the ${adjectives[7].toUpperCase()} bunnies kindly accepted, and they were all happy. Then the Earth ${verb[2].toUpperCase()} due to the number of apples
     there were. The end.`)
//yipee