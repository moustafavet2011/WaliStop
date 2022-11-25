/*
//Start The Contact Form
//Create an object to collect all the data
var fields = {};

//add all the variables to the object
document.addEventListener("DOMContentLoaded", function(){
    fields.lastName = document.getElementById("last-name");
    fields.firstName = document.getElementById("first-name");
    fields.email = document.getElementById("email");
    fields.phone = document.getElementById("phone");
    fields.address = document.getElementById("address");
    fields.country = document.getElementById("country");
    fields.genre = document.getElementById("genre");
    fields.newsletter = document.getElementById("newsletter");
    fields.text = document.getElementById("text");
});

//Create function to check the values if they are empty
function isNotEmpty(value){
    if(value == null || typeof value == "undefined"){
        return false;
    }
    return value.length > 0;
};
function isEmail(email) {
    let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return regex.test(String(email).toLowerCase());
};

function getGenre() {
    return document.querySelector('input[name="genre"]:checked')
    }

//create the main fields validation function
function fieldValidation(field, validationFunction){
    if(field = null) return false;

    let isFieldValid = validationFunction(field.value);

    if(!isFieldValid) {
        field.className = "placeholderRed";
    }
    else{
        field.className = "";
    }
    return isFieldValid;
}

//create the validation central validationFunction
function isValid() {
    var valid = true;

    valid &= fieldValidation(fields.firstName, isNotEmpty);
    valid &= fieldValidation(fields.lastName, isNotEmpty);
    valid &= fieldValidation(fields.genre, isNotEmpty);
    valid &= fieldValidation(fields.address, isNotEmpty);
    valid &= fieldValidation(fields.phone, isNotEmpty);
    valid &= fieldValidation(fields.country, isNotEmpty);
    valid &= fieldValidation(fields.email, isEmail);
    valid &= fieldValidation(fields.text, isNotEmpty);

    return valid;
    };@gmail


    //Create User Class Constructor
    class User {
        constructor(firstName, lastName, genre, phone, address, country, email, newsletter, text) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.genre = genre;
        this.address = address;
        this.phone = phone;
        this.country = country;
        this.email = email;
        this.newsletter = newsletter;
        this.text = text;
        }
        };

        //Send the Contact form information by clicking the button
        function sendContact(){
            fields.genre = getGenre();
            if(isValid()){
                let usr = new User(firstName.value, lastName.value, genre.value, phone.value, address.value, country.value, email.value, newsletter.value, text.value);
                alert(`${usr.firstName} Merci De Nous Contacter .`);
            }else{
                alert("Il Y Une Error");
            }
        }
        sendContact();
        */

        function sendEmail(){
            Email.send({
                Host : "smtp.gmail.com",
                Username : "",
                Password : "",
                To : '',
                From : document.getElementById("email").value,
                Subject : "Nouveau Contact",
                Body : "Name : " + document.getElementById("last-name").value + document.getElementById("first-name").value + "<br> Email : "+ document.getElementById("email").value
                + "<br> Phone Number : "+ document.getElementById("phone").value +
                + "<br> Address : " + document.getElementById("address").value +
                + "<br> Message : " + document.getElementById("text").value
            }).then(
                message => alert("Merci Pour Votre Message On Va vous Repondre BienTôt")
            );
    }
    //show the devis container div
    //get the main button
    let devBtn = document.getElementById("get-devis");
    //add click function to show the dev
    devBtn.addEventListener("click", function(){
        //add class active to the info div
        let infoDev = document.querySelector(".info");
        infoDev.classList.toggle("active");
    });
    //slider Animation
    //Get the variables for the elements
    var $slider = document.getElementById("slider");
    var $toggle = document.getElementById("toggle");
    var $sliderSpan = document.getElementById("urgent-span");
    $toggle.addEventListener("click", function(){
        //var $isOpen = $slider.classList.contains("slide-in");
        $sliderSpan.classList.toggle("active");
        //set the attribute to the element's value'
        //$slider.setAttribute("class", $isOpen ? "slide-out" : "slide-in");
    });
    //read more or less function
    function readMore(info){
        let dots = document.querySelector(`.content[data-info = '${info}'] .dots`);
        console.log(dots);
        let moreText = document.querySelector(`.content[data-info = '${info}'] .text-more-less`);
        console.log(moreText);
        let moreBtn = document.querySelector(`.content[data-info = '${info}'] .more-btn`);
        console.log(moreBtn);
        if(dots.style.display === 'none'){
            dots.style.display = 'inline';
            moreBtn.innerHTML= 'Lire Plus';
            moreText.style.display='none';
        }else{
            dots.style.display = 'none';
            moreBtn.innerHTML= 'Lire Moin';
            moreText.style.display='inline';
        }
    }


