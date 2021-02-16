/**
 Write a program the creates the following array, then calculates and shows the following:
•	Sum of all array values
•	Minimum value
•	Maximum value
 */

//function to calculate the sum of all elements in the array



function sum_of_array(p_values){
    let sum = 0;
    for(let i=0; i < p_values.length ; i++){
        sum += p_values[i];
    }
    return sum;
}

const values = [3, 11, 7, 2, 9, 10];
console.log(`The array is: ${values}`);
console.log(`The sum of all elements in array is : ${sum_of_array(values)}`);
console.log(`The minimum value in the array is : ${Math.min.apply(Math, values)}`);
console.log(`The maximum value in the array is :${Math.max.apply(Math, values)}`);
