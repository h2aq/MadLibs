const readLine = require('readline-sync');

let totalOrder = [];
let comboCount = 0;
let comboGoal = 3;



let sandwich = {
    tofu:5.75,
    beef:6.25,
    chicken:5.25

}
let drinkSizes = {
    small:1.00,
    medium:1.75,
    large:2.25
}
let frySize = {
    smallf:1.00,
    mediumf:1.50,
    largef:2.00
}
let ketchupprice = {
    price:.25
}




sandwichQuestion();
beverageQuestion();
frenchfry();
ketchupbags();

let sum = 0;
for (let i=0; i< totalOrder.length; i++){
    sum+=totalOrder[i]
}
if (comboCount == comboGoal){
    console.log(`Your meal will cost $${sum-1.00}, hope you enjoy your meal combo!`);
} else {
    console.log(`Your meal will cost $${sum}, hope you enjoy your meal!`);
}







function sandwichQuestion() {
    let mealQuestion = readLine.question("Would you like a chicken($5.25), beef($6.25), or tofu($5.75) sandwich?: ");
    if (mealQuestion == 'tofu'){
        console.log(`Alright! Your order of ${mealQuestion} sandwich has been added to your order.`);
        totalOrder.push(sandwich.tofu);
        comboCount++;
    } else if (mealQuestion == 'chicken') {
        console.log(`Alright! Your order of ${mealQuestion} sandwich has been added to your order.`);
        totalOrder.push(sandwich.chicken);
        comboCount++;
    } else if (mealQuestion == 'beef'){
        console.log(`Alright! Your order of ${mealQuestion} sandwich has been added to your order.`);
        totalOrder.push(sandwich.beef);
        comboCount++;
    } else {
        console.log('Sorry, that is not on the menu..');
    }
}
function beverageQuestion() {
    let bevQuest = readLine.question("Would you like a drink? Y/N:  ");
    if (bevQuest == 'N'){
        console.log(`Okie dokie, onto the french fries.`);
    } else {
            let bevQuest2 = readLine.question("Would you like a small($1.00), medium($1.75), or a large($2.25) drink?: ");
            if (bevQuest2 == 'small'){
                console.log(`Okay! One small drink coming right up!`);
                totalOrder.push(drinkSizes.small);
                comboCount++;
            } else if (bevQuest2 == 'medium'){
                console.log(`Okay! One medium drink coming right up!`);
                totalOrder.push(drinkSizes.medium);
                comboCount++;
            } else if (bevQuest2 == 'large') {
                console.log(`Okay! One large drink coming right up!`);
                totalOrder.push(drinkSizes.large);
                comboCount++;
            } else {
                console.log('Please input a valid drink size.');
            }
        }
}
function frenchfry(){
    let frenchQuest = readLine.question('Would you like some french fries? Y/N: ');
    if (frenchQuest == 'N'){
        console.log(`Okay, onto the ketchup bags.`);
    } else {
        let frenchQuest2 = readLine.question('Would you like small($1.00), medium($1.50), or large($2.00) fries?: ')
        if (frenchQuest2 == 'small'){
            let megasize = readLine.question('Would you like to Mega-Size your fries? Y/N: ')
            if (megasize == 'N'){
                console.log('One order of small fries coming up!');
                totalOrder.push(frySize.smallf);
                comboCount++;
            } else {
                console.log('One order of Mega-Sized fries coming up!');
                totalOrder.push(frySize.largef);
                comboCount++;
            }
        } else if (frenchQuest == 'medium') {
            console.log('One order of medium fries coming up!');
            totalOrder.push(frySize.mediumf);
            comboCount++;
        } else if (frenchQuest2 == 'large') {
            console.log('One order of large fries coming up!');
            totalOrder.push(frySize.largef);
            comboCount++;
        } else {
            console.log('Please input a valid french fry size.');
        }
    }
}

function ketchupbags(){
    let ketchupQuest = readLine.question('Would you like some ketchup bags with your fries as well? Y/N: ');
    if (ketchupQuest == 'N') {
        console.log(`Thanks for ordering.`);
    } else {
        let ketchupQuest2 = readLine.question('How many bags would you like? (Please enter number): ');
        totalOrder.push(ketchupprice.price*ketchupQuest2);
        console.log(`That amount of ketchup bags will cost you $${ketchupprice.price*ketchupQuest2}`);
    }
}