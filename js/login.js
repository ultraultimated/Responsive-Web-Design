function showPassword() {

    var key_attr = $('#key').attr('type');

    if (key_attr != 'text') {

        $('.checkbox').addClass('show');
        $('#key').attr('type', 'text');

    } else {

        $('.checkbox').removeClass('show');
        $('#key').attr('type', 'password');

    }

}

function showmessage() {
    if (document.getElementById("recovery-email").nodeValue === null) {
        document.getElementById("message").innerHTML = "Please type your Mail Id first!";
    } else {
        document.getElementById("message").innerHTML = "Mail sent successfully, Please check your inbox!";
    }
}