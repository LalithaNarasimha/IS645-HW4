/**
 1.	Calculator
Input
Ask the user for the following
•	Number1
•	Number2
•	Mathematical Operation (+, -, *, /)
Assume valid input
Output
The result of the mathematical operation in the following format:
Number1 operation Number2 = result.
 */

//function to calculate the operations
function calculate(p_num1,p_num2,p_opr){
    if(p_opr == '+'){
        return p_num1 + p_num2;
    }else if(p_opr == '-'){
        return p_num1 - p_num2;
    }else if(p_opr == '*'){
        return p_num1 * p_num2;
    }else if(p_opr == '/'){
        return p_num1 / p_num2
    }
    
}
//Start of main program
num1 = Number(prompt("Enter Number1 "));
num2 = Number(prompt("Enter Number2 "));
operator = prompt("Enter the operator to perform arithmethic operation ");

result = calculate(num1,num2,operator);
console.log(`Enter numbers and operator are ${num1},${num2},${operator}`);
console.log(`The output of ${num1} ${operator} ${num2} = ${result}`);

