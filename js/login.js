function showPassword() {
    var password = document.getElementById("password");
    if (password.type === "password") {
        password.type = "text";
    }
    else {
        password.type = "password";
    }
}

function showMessage()
{
    var email = document.getElementById("recovery-email");
    console.log(email.value);
    var email_valid = validateEmail(email);
    console.log(email_valid);

    if(email.value === "")
    {
        document.getElementById("message").style.color = "red";
        document.getElementById("message").innerHTML = "Email field cannot be empty";
    }
    else if(!email_valid)
    {
        document.getElementById("message").style.color = "red";
        document.getElementById("message").innerHTML = "Invalid email address!";
    }
    else
    {
        document.getElementById("modal-main").style.display = "none";
        document.getElementById("message").style.color = "Green";
        document.getElementById("message").innerHTML = "Email with credentials has been sent to your registered email id";
        document.getElementById("modal-footer").style.display = "none";
    }
}

function validateEmail(email) {
    var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email.value);

}