function register() {

let name = prompt("Enter your name")
let gmail = prompt("Enter your Gmail")
let age = Number(prompt("Enter your age"))

    checkAge(age, name)
}


function login() {

let name = prompt("Enter your name")
let age = Number(prompt("Enter your age"))

    checkAge(age, name);
}


function checkAge(age, name) {

if (age < 18) {
alert("You can't enter. You are a student.")

}  else if (age < 30) {
    alert("Keep learning!");

} else if (age <= 80) {
    // Enter the website

} else {
    alert("A horror incident happened... 👻");
}
else if (age < 30) {

 alert("You are not a teacher.")

} else if (age <= 80) {

    document.getElementById("login").style.display = "none"
document.getElementById("website").style.display = "block"

document.getElementById("welcomeMessage").innerText =
    "Welcome " + name + "!"

} else {

        alert("A horror incident happened... 👻")

    }
}
