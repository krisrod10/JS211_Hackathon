const readline = require('readline');
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});



let given = 'happy' // given is the word we are trying to match
let givenArray = given.split('');
let correctLetterLocation = 0;
let answerArray = Array(givenArray.length)
answerArray.fill('_')
let counter = 0;
let placeLetter;
let answerString = '';

// here we are making the board for user to see the blank word
// this way you can see how many letter are in the word
//for (let i = 0; i < givenArray.length; i++){
// answerArray.push('_')
//}




const runIt = (guess) => { // call process guess
let matched = false;
for (let i = 0; i < givenArray.length; i++) {
if (guess === givenArray[i]) {
// setting the answer array letter in correct place
answerArray[i] = givenArray[i] // adding the letter or letters to the answer array in position
//console.log(answerArray)
//answerString = answerArray.join('');
//console.log(answerString);
matched = true;

}


}
// set a flag and set it to false
// flip it to true only if you find one letter that matches
if(!matched){ // this is equal to (matched == false)
counter += 1;

}
return matched
}

const getPrompt = () => {
rl.question('guess: ', (guess) => {
let correct = runIt(guess);
if(correct == true){
console.log('you have matched a letter')
} else {
console.log('Your letter did not match')
}
console.log('the current board is: ', answerArray)
if (answerArray.toString() === givenArray.toString()) {
console.log('you are a winner');
return
} else if( counter < 3){
getPrompt()
} else {
console.log('you have ran out of turns')
console.log(givenArray.toString())
return
}
})

}

getPrompt();
// call for another guess a function()