function validateForm()
{
    var mobileNumber = document.forms["registrationForm"]["mobNo"].value;
    var mobileMessage = document.getElementById("mobile-message");
    if(mobileNumber.length !== 10)
    {
        mobileMessage.style.color = "red";
        mobileMessage.innerHTML = "Mobile number cannot be greater than or less than 10 digits";
        return false;
    }
    else
    {
        mobileMessage.innerHTML = "";

    }

    var password = document.forms["registrationForm"]["password"].value;
    var confirmPassword = document.forms["registrationForm"]["confPassword"].value;
    var passwordMessage = document.getElementById("password-message");

    if(password !== confirmPassword)
    {
        passwordMessage.style.color = "red";
        passwordMessage.innerHTML = "Confirm password and password must match";
        passwordMessage.value = "";
        return false;
    }
    else
    {
        passwordMessage.innerHTML = "";
    }

    if((password === confirmPassword) && (mobileNumber.length < 10))
    {
        return true;
    }
}