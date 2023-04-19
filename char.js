const readLine = require('readline-sync');

let diceRolled = [];
let eyeColors = ['BLUE', 'GREEN', 'BROWN', 'HAZEL', 'RED', 'BLACK', 'AMBER'];
let races = ['Vesperian', 'Saiyan', 'Human', 'Dwarf', 'Elf', 'Snake'];
let jobs = ['Fighter', 'Rogue', 'Magician', 'Thief', 'Archer', 'Engineer', 'Merchant', 'Dragoon'];
let backgrounds = ['Warrior, you\'re trying to retire after many years of service for your people, but seems like it was a waste of time after all.', 'Voidwalker, after bounty hunting for your people it really seemed that the money wasn\'t worth it after all.', 'Deep Diver, even after all the horrors you\'ve faced in the past, it still wasn\'t enough to financially support you.', 'Peasant, you\'re finally making it up in the world, congrats on being an adventurer.', 'Royal, you\'ve always wondered what it was like to be an average adventurer, you\'ve always had looked up to them and wanted to be one but your family declined of that request.', 'Mentor, after a horrible tragedy that occurred in the temple you\'re forced to retire and find another way to make money.']
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

function pickRandomChoice(choices){
    let randomNum = Math.floor(Math.random()*choices.length);
    return choices[randomNum];
}
function randomRace (race){
    let RandNum = Math.floor(Math.random()*race.length);
    return race[RandNum];
}
function randomJobs (jobss){
    let Randjob = Math.floor(Math.random()*jobss.length);
    return jobss[Randjob];
}
function randomBackground (backgrounnd){
    let randombackgrounds = Math.floor(Math.random()*backgrounnd.length);
    return backgrounnd[randombackgrounds];
}

function createChar(character, list){
    character.name = readLine.question('Enter your character name: ');
    character.name2 = readLine.question('Enter your 2nd character name: ');
    character.name3 = readLine.question('Enter your 3rd character name: ');
    character.eyeColor = pickRandomChoice(eyeColors);
    character.eyeColor2 = pickRandomChoice(eyeColors);
    character.eyeColor3 = pickRandomChoice(eyeColors);
    character.race = randomRace(races);
    character.race2 = randomRace(races);
    character.race3 = randomRace(races);
    character.job = randomJobs(jobs);
    character.job2 = randomJobs(jobs);
    character.job3 = randomJobs(jobs);
    character.background = randomBackground(backgrounds);
    character.background2 = randomBackground(backgrounds);
    character.background3 = randomBackground(backgrounds);
    console.log("Rolling Strength")
    character.str = rollStat(diceRolled);
    character.str2 = rollStat(diceRolled);
    character.str3 = rollStat(diceRolled);
    console.log("Rolling Dexterity")
    character.dex = rollStat(diceRolled);
    character.dex2 = rollStat(diceRolled);
    character.dex3 = rollStat(diceRolled);
    console.log("Rolling Constitution")
    character.consti = rollStat(diceRolled);
    character.consti2 = rollStat(diceRolled);
    character.consti3 = rollStat(diceRolled);
    console.log("Rolling Intelligence")
    character.intel = rollStat(diceRolled);
    character.intel2 = rollStat(diceRolled);
    character.intel3 = rollStat(diceRolled);
    console.log("Rolling Wisdom")
    character.wis = rollStat(diceRolled);
    character.wis2 = rollStat(diceRolled);
    character.wis3 = rollStat(diceRolled);
    console.log("Rolling Charisma")
    character.charis = rollStat(diceRolled);
    character.charis2 = rollStat(diceRolled);
    character.charis3 = rollStat(diceRolled);
    character.luck = rolld6();
    character.luck2 = rolld6();
    character.luck3 = rolld6();
    displayChar(character);
    displayChar2(character);
    displayChar3(character);
}

function displayChar(char){
    console.log('--------------------------------------')
    console.log(`Name: ${char.name}`);
    console.log(`EyeColor: ${char.eyeColor}`);
    console.log(`Race: ${char.race}`);
    console.log(`Background: ${char.background}`)
    console.log(`Job: ${char.job}`);
    console.log(`STR: ${char.str}`);
    console.log(`DEX: ${char.dex}`);
    console.log(`CON: ${char.consti}`);
    console.log(`INT: ${char.intel}`);
    console.log(`WIS: ${char.wis}`);
    console.log(`CHA: ${char.charis}`);
    console.log(`LUCK: ${char.luck}`);
    console.log('--------------------------------------')
}
function displayChar2(char){
    console.log('--------------------------------------')
    console.log(`Name: ${char.name2}`);
    console.log(`EyeColor: ${char.eyeColor2}`);
    console.log(`Race: ${char.race}`);
    console.log(`Background: ${char.background2}`)
    console.log(`Job: ${char.job2}`);
    console.log(`STR: ${char.str2}`);
    console.log(`DEX: ${char.dex2}`);
    console.log(`CON: ${char.consti2}`);
    console.log(`INT: ${char.intel2}`);
    console.log(`WIS: ${char.wis2}`);
    console.log(`CHA: ${char.charis2}`);
    console.log(`LUCK: ${char.luck2}`);
    console.log('--------------------------------------')
}
function displayChar3(char){
    console.log('--------------------------------------')
    console.log(`Name: ${char.name3}`);
    console.log(`EyeColor: ${char.eyeColor3}`);
    console.log(`Race: ${char.race3}`);
    console.log(`Background: ${char.background3}`)
    console.log(`Job: ${char.job3}`);
    console.log(`STR: ${char.str3}`);
    console.log(`DEX: ${char.dex3}`);
    console.log(`CON: ${char.consti3}`);
    console.log(`INT: ${char.intel3}`);
    console.log(`WIS: ${char.wis3}`);
    console.log(`CHA: ${char.charis3}`);
    console.log(`LUCK: ${char.luck3}`);
    console.log('--------------------------------------')
}