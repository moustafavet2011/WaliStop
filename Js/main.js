// Get the image form the slider container
var sliderImages = Array.from(document.querySelectorAll(".slider-box img"));

// Get the number of slides 
var sliderCount = sliderImages.length;

//set the first slide
var currentSlide = 1;
// get the variables from page
// slide number element
var slideNumber = document.getElementById("slider-number");
// previous and next buttons 
var nextButton = document.getElementById("next");
var prevButton = document.getElementById("prev");

//Handle Click on next and previous buttons
nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;


//Create the main Ul element for the slider
var paginationElement = document.createElement("ul");

//Set an attribute id to the ul element
paginationElement.setAttribute("id", "pagination-ul");



//create the list items for the ul by using a loop
for(var i = 1 ; i <= sliderCount ; i++){
    //Create the the li for every image
    var paginationItem = document.createElement("li");

    //Set an Attribute to the li to recognize
    paginationItem.setAttribute("data-index" , i);

    //set item text into the li
    paginationItem.appendChild(document.createTextNode(i));

    //append items to the main pagination element
    paginationElement.appendChild(paginationItem);
}
//get the span where will contain the pagination element
var paginationSpan = document.getElementById("indicator");

//append the pagination element to the paginationSpan
paginationSpan.appendChild(paginationElement);

// Get the new created pagination Ul
var paginationUl = document.getElementById("pagination-ul");

//get an array from the pagination element
var paginationBullets = Array.from(paginationUl.children);

//loop through all the bullets
for(var i = 0 ; i< paginationBullets.length ; i++) {
    paginationBullets[i].onclick = function() {

        //make the current slide number equal to the clicked bullet using the data-index attribute
        currentSlide = parseInt(this.getAttribute("data-index"));

        //call the checker function
        theChecker();
    }
}
//Trigger the checker function
theChecker();
//function to control next buttons
function nextSlide(){
    if(nextButton.classList.contains("disabled")){

        //Do Nothing
        return false;

    }else{
        currentSlide++;
        theChecker();
    }
}
//function to control previous buttons
function prevSlide(){
    if(prevButton.classList.contains("disabled")){
        //do Nothing
        return false;
    }else{
        currentSlide--;
        theChecker();
    }
}
//create the checker function
function theChecker(){
    // Write the number of the slide into the slide element
    slideNumber.textContent = "Slide #" + (currentSlide) + " De " + (sliderCount);
    //Trigger the remove all active class function
    removeAllActive();
    //add the active class to the current slide
    sliderImages[currentSlide - 1].classList.add("active");
    //add the active class to the current pagination bullet
    paginationUl.children[currentSlide -1].classList.add("active");
        //check if the current slide is the first slide
        if(currentSlide== 1){
            prevButton.classList.add("disabled");
        }else{
            //remove disabled class from the current slide
            prevButton.classList.remove("disabled");
        }

        //check if the current slide is the last slide
        if(currentSlide== sliderCount){
            nextButton.classList.add("disabled");
        }else{
            //remove disabled class from the current slide
            nextButton.classList.remove("disabled");
        }
}
//function to remove all active class from the current images and pagination bullets
function removeAllActive(){
    //loop through the images to remove the active class from
    sliderImages.forEach(function(img){
                //remove the active class to the current image
        img.classList.remove("active");
    });
    //loop through the pagination bullets to remove the active class from
    paginationBullets.forEach(function(bullet){
        //remove the active class to the current pagination bullet
        bullet.classList.remove("active");
    });
}
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


