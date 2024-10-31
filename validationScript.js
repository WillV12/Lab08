    // JavaScript code for form validation
const myForm = document.getElementById('myForm')
const expression = /^[a-zA-Z0-9]+$/ // Regular expression pattern for alphanumeric input


myForm.addEventListener('submit', (event) =>{
      
      // Prevent form from submitting
      event.preventDefault()

      // Retrieve the input field value
      let input = document.getElementById('inputField').value
      
      if (expression.test(input)){  // Check if the input value matches the pattern
        alert("Form has been submitted")
        // Valid input: display confirmation and submit the form
      }
      else if (expression.test(input) == false){
        alert("Invalid input\nForm has not been submitted")
        // Invalid input: display error message
      }


})


      

      



