
function handleForm(e) {
    e.preventDefault()
    alert("Your Information is submitted")

    var firstName = document.getElementById('firstName').value
    var lastName = document.getElementById('lastName').value
    var gender = document.getElementById('gender').value
    var email = document.getElementById("email").value
    var phone = document.getElementById("phone").value
    var age = document.getElementById("age").value

    console.clear();
    console.log("User Information:")
    console.log("First Name: " + firstName)
    console.log("Last Name: " + lastName)
    console.log("Gender: " + gender)
    console.log("Email: " + email)
    console.log("Phone: " + phone)
    console.log("Age: " + age)
}
