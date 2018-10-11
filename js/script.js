//Gallery
$(function () {
    $("#galleryAll").load("gallery-all.html");
    $("#gallerySports").load("gallery-sports.html");
    $("#galleryGatherings").load("gallery-gatherings.html");
    $("#galleryCelebrations").load("gallery-celebrations.html");
});

function doCollapse(clickedLink) {

    var allCollapsibleDivs = document.getElementsByClassName("collapse");

    for (const element of allCollapsibleDivs) {
        element.classList.remove("in");
    }

    if (document.getElementById("link1").classList.contains("link-active")) {
        document.getElementById("link1").classList.remove("link-active");
    }
    if (document.getElementById("link2").classList.contains("link-active")) {
        document.getElementById("link2").classList.remove("link-active");
    }
    if (document.getElementById("link3").classList.contains("link-active")) {
        document.getElementById("link3").classList.remove("link-active");
    }
    if (document.getElementById("link4").classList.contains("link-active")) {
        document.getElementById("link4").classList.remove("link-active");
    }

    clickedLink.classList.add("link-active");

}

//Gallery ends

//GOOGLE MAP
function initMap() {
    var uluru = {lat: 23.105851, lng: 72.593756};
    var map = new google.maps.Map(
        document.getElementById('map-display'), {zoom: 15, center: uluru});
    var marker = new google.maps.Marker({position: uluru, map: map});
}

//gmap ends

//navbar and footstyle
$(function () {
    $("#navbar").load("navbar.html");
    $("#footer").load("footer.html");
});
// navbar and footstyle ends


//Index

// For News Container

$('#news .news-container img, #news .news-container h3').mouseover(function () {
    var parent = $(this).parent();
    parent.children('img').addClass('zoom');
    parent.children('h3').addClass('textColor');
});

$('#news .news-container img, #news .news-container h3').mouseout(function () {
    var parent = $(this).parent();
    parent.children('img').removeClass('zoom');
    parent.children('h3').removeClass('textColor');
});

// For Event Container

$('#events .events-container img').mouseover(function () {
    var parent = $(this).parent('.event-column');
    parent.children('img').addClass('zoom');
    parent.find('h3').addClass('textColor');
});

$('#events .events-container img').mouseout(function () {
    var parent = $(this).parent('.event-column');
    parent.children('img').removeClass('zoom');
    parent.find('h3').removeClass('textColor');
});

$('#events .events-container h3').mouseover(function () {
    var parent = $(this).parent('.content').parent('.event-column');
    parent.children('img').addClass('zoom');
    parent.find('h3').addClass('textColor');
});

$('#events .events-container h3').mouseout(function () {
    var parent = $(this).parent('.content').parent('.event-column');
    parent.children('img').removeClass('zoom');
    parent.find('h3').removeClass('textColor');
});
//Index ends

//Login
function showPassword() {
    var password = document.getElementById("password");
    if (password.type === "password") {
        password.type = "text";
    }
    else {
        password.type = "password";
    }
}


function showMessage() {
    var email = document.getElementById("recovery-email");
    console.log(email.value);
    var email_valid = validateEmail(email);
    console.log(email_valid);

    if (email.value === "") {
        document.getElementById("message").style.color = "red";
        document.getElementById("message").innerHTML = "Email field cannot be empty";
    }
    else if (!email_valid) {
        document.getElementById("message").style.color = "red";
        document.getElementById("message").innerHTML = "Invalid email address!";
    }
    else {
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

function login_success() {
    window.alert("You have been logged in successfully!");
}
//login ends

//register
function validateForm() {
    var mobileNumber = document.forms["registrationForm"]["mobNo"].value;
    var mobileMessage = document.getElementById("mobile-message");
    if (mobileNumber.length !== 10) {
        mobileMessage.style.color = "red";
        mobileMessage.innerHTML = "Mobile number cannot be greater than or less than 10 digits";
    }
    else {
        mobileMessage.innerHTML = "";

    }

    var password = document.forms["registrationForm"]["password"].value;
    var confirmPassword = document.forms["registrationForm"]["confPassword"].value;
    var passwordMessage = document.getElementById("password-message");
    var response = false;
    if (password !== confirmPassword) {
        passwordMessage.style.color = "red";
        passwordMessage.innerHTML = "Confirm password and password must match";
        passwordMessage.value = "";
    }
    else {
        passwordMessage.innerHTML = "";
    }
    console.log(password === confirmPassword);
    console.log(mobileNumber.length === 10);
    response = (password === confirmPassword) && (mobileNumber.length === 10);
    console.log(response);
    return response;
}

function register() {
    window.alert("You have been registered successfully!");
}

//register ends