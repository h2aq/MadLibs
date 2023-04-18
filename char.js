const readLine = require('readline-sync');

let diceRolled = [];
let character1 = {
    //empty for now
}

createChar(character1, diceRolled);

function rolld6(){
    return Math.ceil(Math.random()*6);
}
function rollDice(amount, list){
    for (let i=0; i<amount; i++){
        let roll = rolld6();
        console.log(`You rolled a ${roll}!`);
        list.push(roll);
    }
}
function sum(list){
    let sum = 0;
    for (let i=0; i<list.length; i++){
        sum+=list[i]
    }
    console.log(`The total was: ${sum}.`)
    return sum;
}
function rollStat(list){
    list = [];
    rollDice(4, list);
    return sum(list);
}
function createChar(character, list){
    character.name = readLine.question('Enter your character name: ');
    console.log("Rolling Strength")
    character.str = rollStat(diceRolled);
    console.log("Rolling Dexterity")
    character.dex = rollStat(diceRolled);
    console.log("Rolling Constitution")
    character.consti = rollStat(diceRolled);
    console.log("Rolling Intelligence")
    character.intel = rollStat(diceRolled);
    console.log("Rolling Wisdom")
    character.wis = rollStat(diceRolled);
    console.log("Rolling Charisma")
    character.charis = rollStat(diceRolled);
    displayChar(character);
}

function displayChar(char){
    console.log('--------------------------------------')
    console.log(`Name: ${char.name}`)
    console.log(`STR: ${char.str}`)
    console.log(`DEX: ${char.dex}`)
    console.log(`CON: ${char.consti}`)
    console.log(`INT: ${char.intel}`)
    console.log(`WIS: ${char.wis}`)
    console.log(`CHA: ${char.charis}`)
    console.log('--------------------------------------')
}