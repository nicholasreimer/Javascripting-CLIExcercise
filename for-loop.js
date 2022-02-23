var total = 0;              
var limit = 10;             //these two variable are used in the below for(loop)

for(i=0 ; i<limit ; i++) {  
total += i;
}

console.log(total);

//Translation:
// 1.) two var have been created
// 2.) for loop(new variable defined as 'I' has been created and is also the starting point for the loop ; ...
// 3.) the loop will continue to run until var 'I' is less then var limit (set at 10 as per original var declaration)
// 4.) each time the loop runs add 1 to "I" (the starting point of the loop) until loop meets the conditional
// *.) inside the curly brackets of the function is an action that takes place each loop
// 5.) every succesfull run of the loop add the current number of "I" to the var total
// 6.) print the var total to the console