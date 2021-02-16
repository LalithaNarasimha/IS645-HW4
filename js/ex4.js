/**
 Write a program that asks the user for a word until the user types "stop" (case insensitive: e.g.: STOP, stop, Stop, StOp, …).  The program then shows each of these words, except "stop".  If "stop" is the first word entered, display an appropriate message.
Notes:
•	Use a loop to accept user input and exit when "stop" is entered (case insensitive)
•	If "stop" is not entered, add the words to an array
•	When "stop" is entered, display the words in the array.
•	If "stop" */

let words = [];
while(true){
    in_word = prompt("Enter a word");

    if(in_word.toLowerCase() === 'stop'){
        break;
    }else {
        words.push(in_word);
    }
}
if(words.length == 0) {
    console.log("No words to display, Stop was the first word entered.");
}else {
    words.forEach(word => {
        console.log(word);
      });
}


  