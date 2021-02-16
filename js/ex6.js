/**
 6.	Guess Number
Write a program that generates a random number between 1 and 100, inclusive.
It then prompts the user to guess the number (assume valid entry).
The program will provide the following feedback after each guess:
•	Too low, guess again
•	Too high, guess again
•	Correct
If correct, also display how many attempts it took.  */

r_num = Math.floor((Math.random() * 100) + 1);

let count = 0;
while(true){
    in_num = Number(prompt("Guess a number between 1 and 100 inclusive"));
    count++;
    if(in_num == r_num){
        console.log(`Correct! It took ${count} attempts to guess the right number`);
        break;
    }else if(in_num > r_num){
        alert("Too high, guess again");
        console.log(`${in_num} is Too high`);
    }else if(in_num < r_num){
        alert("Too low, guess again");
        console.log(`${in_num} is too low`);
    }

}