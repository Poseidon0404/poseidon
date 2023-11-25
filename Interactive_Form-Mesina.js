
function handleForm(e) {
    e.preventDefault()
    alert("Your Information is submitted")

    var firstName = document.getElementById('firstName').value
    var lastName = document.getElementById('lastName').value
    var email = document.getElementById("email").value    
    
    console.clear()
    console.log("User Information:")
    console.log("First Name: " + firstName)
    console.log("Last Name: " + lastName)
    console.log("Email: " + email)

}