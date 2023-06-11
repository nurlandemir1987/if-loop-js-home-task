let btn = document.getElementById("btn");

function mail_checker() {
    let mail = "admin@gmail.com";
    let password = "12345"

    let email_input = document.getElementById("email_input").value;
    let password_input = document.getElementById("password_input").value;

    if (mail == email_input && password == password_input) {
        alert ("Dogrudur");
    }
    else{
        alert ("Yanlisdir");
    }

}
