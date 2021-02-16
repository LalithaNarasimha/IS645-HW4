/**
 5.	Write a program that asks the user for a word.  It then displays the following:
•	Number of vowels in the word (a, e, i, o, u, and y)
•	Whether your word is a palindrome or not
o	A palindrome is a word that is spelled the same way both forward and backwards (e.g. radar, level, madam)*/

//function to check vowels in the word
function check_vowel(p_word){
    f_count = 0;
    for(let i = 0; i < p_word.length;i++){
        if(vowels.includes(p_word[i])){
            f_count++;
        }
    }
    return f_count;

}
//Function to check word is a palindrome
function check_palindrome(p_word){
    const len  = p_word.length; //get the length of the string
    for(let i = 0; i < len/2 ; i++){
        if(p_word[i] !== p_word[len - 1 - i]){
            return 'is not a Palindrome'
        }
    }
    return 'is a Palindrome'
}
//declaration
vowels = ['a','e','i','o','u'];

//input
in_word = prompt("Enter the word");

in_var = in_word.toLowerCase();
count = check_vowel(in_var);//call the function
message = check_palindrome(in_var); // call the function
console.log(`${in_word} contains ${count} vowels and ${message}`);
