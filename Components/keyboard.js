 
/* *****
 ******** JAVASCRIPT
*/

/* Imports */
import {keyboard_qzerty} from  '../Database/data.js';



/* Variables */
let keys = "";
const choice = []; 



keyboard_qzerty.forEach(element => {

    keys += `<button class ="word">` +  element.toUpperCase() + `</button>`

    
})


document.getElementById('keys-list').innerHTML = keys;

        document.querySelectorAll('.word').forEach(button => {
            button.addEventListener('click', () =>   {
                const fired_button = button.innerHTML;
                console.log(fired_button);

                choice.push(fired_button)
                console.log(choice);
                
               
            });
            
        }); 


            

           
     
   


   
  
  
   





   
  

   

