let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let filtered = numbers.filter(function evenNumbers (numbers) {
  return numbers % 2 === 0;
})

console.log(filtered);

//Translation:
// 1.) new variable named numbers is an array with 10 sperate entries (numbers 1 to 10)
// 2.) new varaible named filtered is equal to the numbers variable connected to a method called filter() that calls/uses a function to filter different values inside an array. The functions defines the filtering parameters.
// 3.) the function is called evenNumbers and the function body code uses the remainder operator to calculate the different values inside the array to see if they are odd numbers
// 4.) any odd numbers will calculate to zero and be directly equal to 0 which will then pass them to them console
// *.) Remainder Operator (%): returns the remainder left over when one number is divided by a second number. (ex: [13 % 5 = 3] - 5 goes into 13 twice and the left over is 3)
