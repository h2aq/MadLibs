const readLine = require('readline-sync');

let totalOrder = [];
let totalCost = [];
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







function sandwichQuestion() {
    let mealQuestion = readLine.question("Would you like a chicken($5.25), beef($6.25), or tofu($5.75) sandwich?: ");
    if (mealQuestion == 'tofu'){
        console.log(`Alright! Your order of ${mealQuestion} sandwich has been added to your order.`);
        totalOrder.push(sandwich.tofu);
    } else if (mealQuestion == 'chicken') {
        console.log(`Alright! Your order of ${mealQuestion} sandwich has been added to your order.`);
        totalOrder.push(sandwich.chicken);
    } else if (mealQuestion == 'beef'){
        console.log(`Alright! Your order of ${mealQuestion} sandwich has been added to your order.`);
        totalOrder.push(sandwich.beef);
    } else {
        console.log('Sorry, that is not on the menu..');
    }
}
function beverageQuestion() {
    let bevQuest = readLine.question("Would you like a drink? Y/N:  ");
    if (bevQuest == 'n'){
        console.log(`Your total order is $${totalOrder[0]}`);
    } else {
            let bevQuest2 = readLine.question("Would you like a small($1.00), medium($1.75), or a large($2.25) drink?:  ");
            if (bevQuest2 == 'small'){
                console.log(`Okay! One small coke costing $${drinkSizes.small} coming right up!`);
                totalOrder.push(drinkSizes.small);
                console.log(`Your total order is $${totalOrder[0] + totalOrder[1]} so far.`);
            } else if (bevQuest2 == 'medium'){
                console.log(`Okay! One small coke costing $${drinkSizes.medium} coming right up!`);
                totalOrder.push(drinkSizes.medium);
                console.log(`Your total order is $${totalOrder[0] + totalOrder[1]} so far.`);
            } else if (bevQuest2 == 'large') {
                console.log(`Okay! One small coke costing $${drinkSizes.large} coming right up!`);
                totalOrder.push(drinkSizes.large);
                console.log(`Your total order is $${totalOrder[0] + totalOrder[1]} so far.`);
            }
        }
}




