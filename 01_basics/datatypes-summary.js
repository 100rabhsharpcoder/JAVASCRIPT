// primitive 


//  primitive 7 types: String, Number, Boolean , null, undefined, symbol, BigInt 



// reference types:(Non-Primitive) - Arrays , objects, functions, 

//******************************************************************************************************************************** */
// Stack memory(primitives) and heap memory(Non primetive)

// let myNmae = " saurabh gathade"
// let anothernmae  = myNmae;
// anothernmae = "kuchbhidaaldo" 
// console.log(myNmae);

// console.log(anothernmae);

let user = {
    emial: "saurabhgathade@gmail.com",
    name: "saurabh gathade"
}
let userTwo = user
console.log(user);
userTwo.emial = "a@a.com"
console.log(userTwo);
console.log(user);