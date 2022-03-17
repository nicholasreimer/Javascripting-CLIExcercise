let room = 'gallery'
let suspect = 'Ms.Van Cleve'
let weapon = 'trophy'
let solved = ''

if(room == 'gallery' && suspect == 'Ms.Van Cleve' && weapon == 'trophy') {
  solved = true

} else if(room == 'ballroom' && suspect == 'Mr. Kalehoff' && weapon == 'poison') {
solved = true

} else if(room == 'dining room' && suspect == 'Mr. Parkes' && weapon == 'knife') {
solved = true  

} else if(room == 'billiards room' && suspect == 'Mrs. Sparr' && weapon == 'pool stick') {
solved = true
} 
else {
console.log('check spelling')}

if(solved){
console.log(suspect + " did it in the " + room + " with the " + weapon + "!");
}