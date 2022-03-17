77 % 3

while(x <= 20) {                           //STEP2:logical condtion that determines stop
  if(x % 3 === 0 && x % 5 === 0) {    // the conditional statement that runs each loop cycle
    console.log('JuliaJames');            // what will print if the above conditional is a match

  } else if(x % 5 === 0) {                     //if the above conditional didnt execute try this one...             
    console.log('James');                 //if it matched print this

  } else if(x % 3 === 0) {                     //repeat of above
    console.log('Julia');
  } 
  else {                                //if none of the three conditionals above match then do this
    console.log(x)
  }