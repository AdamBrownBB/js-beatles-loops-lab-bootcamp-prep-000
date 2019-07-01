/*  create variables that mirror the expected results in the test
Create empty array
There are 4 beatles, so make the FOR loop end at 5.
use PUSH method to add to the array
templ. literal to get the words right, INDEX to match them up. 
*/

var musician = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
var instrument = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musician, instrument) {
  var array = [];
  
  for (let i = 0; i < 4; i++) {
    array.push(`${musician[i]} plays ${instrument[i]}`);
  }
  
  return array;
}


/* copy/paste the facts
make new array to store answers
use a WHILE loop
use PUSH to add next fact from the facts array into the newFacts array and add the "!!!"
increment by 1
*/
const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(facts) {

var newFacts = [];
var i = 0;

  while (i < facts.length) {
    newFacts.push(facts[i] + '!!!')
    i++;
      }
return newFacts;
  
}


/* make empty array to store this
  make a DO WHILE loop
  add text
  increase num by 1 
  return the new array as long as num is less than 15
*/
function iLoveTheBeatles (num) {
  var array = [];
  
  do {
    array.push('I love the Beatles!');
    num++;
  }
  while (num < 15);

  return array;
}

