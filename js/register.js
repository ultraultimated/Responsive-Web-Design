function validateForm()
{
    var mobileNumber = document.forms["registrationForm"]["mobNo"].value;
    var mobileMessage = document.getElementById("mobile-message");
    if(mobileNumber.length !== 10)
    {
        mobileMessage.style.color = "red";
        mobileMessage.innerHTML = "Mobile number cannot be greater than or less than 10 digits";
    }
    else
    {
        mobileMessage.innerHTML = "";

    }

    var password = document.forms["registrationForm"]["password"].value;
    var confirmPassword = document.forms["registrationForm"]["confPassword"].value;
    var passwordMessage = document.getElementById("password-message");
    var response = false;
    if(password !== confirmPassword)
    {
        passwordMessage.style.color = "red";
        passwordMessage.innerHTML = "Confirm password and password must match";
        passwordMessage.value = "";
    }
    else
    {
        passwordMessage.innerHTML = "";
    }
    console.log(password === confirmPassword);
    console.log(mobileNumber.length === 10);
    response = (password === confirmPassword) &&(mobileNumber.length === 10);
    console.log(response);
    return response;
}