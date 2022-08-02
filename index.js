
//initialize the count as zero
//listen for the clicks on the increment button
//increment the count variable when the button is clicked
//change the count-el in the HTML to reflect the new count 

//LET variables are block scoped !!
//Working with DOM - Document Object Model ( how you use JS to modify the website)

let CountEl = document.getElementById("count-el") //pass in arguments
console.log(CountEl)

//grab the count-el element , store it in a countEl variable
let count = 0
function increment (){

   count = count+1
   //set countEl's innertext to the count
   CountEl.innerText = count

   console.log(count)
    


}



