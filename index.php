<?php

//check if the user coming from  request
if($_SERVER['REQUEST_METHOD']=='POST'){


    // Assign the variables to the
    $firstName = $_POST['first-name'];
    $lastName = $_POST['last-name'];
    $genre  = $_POST['genre'];
    $mail = $_POST['mail'];
    $phone  = $_POST['phone'];
    $address  = $_POST['address'];
    $message  = $_POST['message'];


$headers  = 'From: ' . $mail . '\r\n';
$content = 'Client ' . $firstName . ' ' . $lastName . ' ' . $phone . ' ' . $address . ' ' . $message ;

//the mail function that accept the following parameters [to, subject, header, parameter]

mail('husseinyazane19@gmail.com', 'Contact Form', $content, $headers);
}





?>




<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./Css/normalize.css"type="text/css">
    <link rel="stylesheet" href="./Css/all.min.css"type="text/css">
    <link rel="stylesheet" href="./Css/all.css" type="text/css">
    <link rel="stylesheet" href="./Css/main.css" type="text/css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;500;700;900&family=Open+Sans:wght@300;400;600;700;800&family=Roboto+Condensed:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Work+Sans:ital,wght@0,200;0,400;0,500;1,200;1,300;1,700;1,800&display=swap" rel="stylesheet">
    <title>WaliStop Nuisible</title>
</head>
<body>
        <!-- Start Header -->
        <div class="header" id="header">
            <div class="container">
                <a href="#" class="logo">
                    <p>WALI<span>STOP</span></p>
                </a>
                <ul class="main-nav">
                    <li><a href="#accueil">ACCUEIL</a></li>
                    <li><a href="./Documents/2021_12_06_064047(1).pdf" target="_blank">CERTIFICAT</a></li>
                    <li><a href="#about-us">A PROPOS </a></li>
                    <li><a href="#contact">CONTACTE</a></li>
                    <li><a href="#devis">DEVIS</a></li>
                </ul>
            </div>
        </div>
        <!-- End Header -->
        <!-- Start Landing -->
        <div class="landing">
            <div class="container">
                <div class="slider-box">
                    <div class="slider-number" id="slider-number"></div>
                    <img src="./Images/slider_1 (2).jpg"alt="">
                    <img src="./Images/slider_2.jpg"alt="">
                    <img src="./Images/Slider_3.jpg"alt="">
                    <img src="./Images/slider_4.png"alt="">
                    <img src="./Images/slider_5.png"alt="">
                    <img src="./Images/Slider_6.jpg"alt="">
                </div>
                <div class="slider-controls">
                    <span id="prev" class="prev">Precedent</span>
                    <span id="indicator" class="indicator">
                    </span>
                    <span id="next" class="next">Suivant</span>
                </div>
            </div>
        </div>
        <!-- End Landing -->
        <!-- Start About Us -->
        <div class="about-us" id="about-us">
            <h2 class="title">A PROPOS DE NOUS</h2>
            <div class="container">
                <div class="box">
                    <img class="image" src="./Images/insects_about_us_1.webp" alt="" />
                    <div class="content">
                        <h2>Maîtrises des nuisibles</h2>
                        <p>Il s'agit de l'un des services les plus demandé, la maîtrise des nuisibles (rats, insectes, pigeons...).Ce service est essentiel pour nos clients et nous  garantissons sa qualité pour un meilleur quotidien.</p>
                    </div>
                </div>
                <div class="box">
                    <img class="image" src="./Images/a propos_2.jpg" alt="" />
                    <div class="content">
                        <h2>Traitement de mérule (champignons)</h2>
                        <p>Tous nos services, et celui-ci en particulier, ont été conçus pour vous faciliter la vie.
                        Vous pouvez compter sur nous pour vous en débarrasser.</p>
                    </div>
                </div>
                <div class="box">
                    <img class="image" src="./Images/fumigation.jpg" alt="" />
                    <div class="content">
                        <h2>Désinfection / Décontamination</h2>
                        <p>Ce service est essentiel pour nos clients et nous garantissons sa qualité. Avec ce service, les choses seront simples, plus propres.</p>
                    </div>
                </div>
                <div class="box">
                    <img class="image" src="./Images/a propos_4.jpg" alt="" />
                    <div class="content">
                        <h2>Horaires d'ouverture</h2>
                        <p>Pour votre confort nous nous déplaçons à toute heure de la journée et de la soirée.

                            Pour tout renseignement ou prise de rendez-vous, merci de nous contacter directement au 0658011058</p>
                    </div>
                </div>
            </div>
        </div>
        <!-- End About Us -->
        <!-- Start Contact -->
        <div class="contact" id="contact">
            <div class="container">
                <div class="contact-form">
                    <form action="<?php echo $_SERVER['PHP_SELF'] ?>" method="POST" >
                        <h2>Entrez Votre Contact Information</h2>
                        <div class="field">
                        <i class="fa-solid fa-user"></i>
                        <input class="user" type="text" name="last-name"  id="last-name" placeholder="Votre Nom" value="<?php if(isset($lastName)) {echo $lastName;} ?>" required>
                        </div>
                        <br><br>
                        <div class="field">
                        <i class="fa-solid fa-user"></i>
                        <input class="user" type="text" name="first-name"  id="first-name" placeholder="Votre Prenom"value="<?php if(isset($firstName)) {echo $firstName;} ?>" required>
                        </div>
                        <br><br>
                        <div class="radio">
                            <i class="fa-solid fa-venus-mars"></i>
                        <input  type="radio" name="genre" id="masculin" value="masculin">Masculin
                        <input  type="radio" name="genre" id="féminine" value="féminine">Féminine
                        </div>
                        <br><br>
                        <div class="field">
                        <i class="fa-solid fa-envelope"></i>
                        <input class="mail" type="email" name="mail" id="email" placeholder="Votre E-Mail Address" value="<?php if(isset($mail)) {echo $mail;} ?>" required>
                        </div>
                        <br><br>
                        <div class="field">
                        <i class="fa-solid fa-phone"></i>
                        <input class="phone" type="text" name="phone" id="phone" placeholder="Votre Phone Number" value="<?php if(isset($phone)) {echo $phone;} ?>" required>
                        </div>
                        <br><br>
                        <div class="field">
                        <i class="fa-solid fa-house"></i>
                        <input class="address" type="text" id="address" name="address" placeholder="Votre Address" value="<?php if(isset($address)) {echo $address;} ?>">
                        </div>
                        &nbsp;&nbsp;&nbsp;

                        <select id="country" name="country" style="margin: 25px 35px;">
                            <option disabled selected value>-- Choisir Votre Paye --</option>
                            <option value="france">FRANCE</option>
                            <option value="belgique">BELGIQUE</option>
                        </select>
                        <br><br>

                        <div class="checbox">
                        <input type="checkbox" id="newslettre">Recevoir notre newslettres et les deriners option
                        <br><br>
                        </div>
                        <textarea class="msg" name="message" id="text" placeholder="Dite Nous Votre Demande"></textarea>
                        <br><br>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
        <!-- End Contact -->
        <!-- Start Devis  -->
        <div class="devis" id="devis">
            <div class="container">
                <div class="content">
                    <button class="get-devis" type="submit" id="get-devis">Devis gratuit</button>
                    <div class="info">
                        <h3>Devis gratuit pour vous</h3>
                        <p>Nous vous proposerons un devis gratuit correspondant à votre situation et pour faire de notre mieux nous avons besoin d'avoir plus de précisions vous pouvez nous appeler au <strong>05 33 54 84 56</strong> nous sommes disponibles 24h/24h, 7j/7j. merci pour votre intérêt notre but est de vous satisfaire</p>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Devis  -->
        <!-- Start Footer -->
        <div class="footer">
            <div class="container">
                <div class="content">
                    <h2>WALI<span>STOP</span></h2>
                    <p>Vous pouvez nous suivre sur les resaue social et Nous repondons à toute vos questions</p>
                    <div class="social">
                        <a href="http://facebook.com/"><i class="fa-brands fa-facebook fa-2x"></i></a>
                        <a href="http://twitter.com/"><i class="fa-brands fa-twitter fa-2x"></i></a>
                        <a href="http://instagram.com/"><i class="fa-brands fa-instagram fa-2x"></i></a>
                        <a href="http://youtube.com/"><i class="fa-brands fa-youtube fa-2x"></i></a>
                    </div>
                </div>
                <div class="details">
                    Address : <span>4 Rue Jacques prévert Herin 59195</span>
                    Telephone : <span>+33 06 58 01 10 58</span>
                    Email : <span>walistopnuisible@gmail.com</span>
                </div>
                    <p class="copyright">All Rights Reserved &copy; <span> WALISTOP</span> 2022</p>
            </div>
        </div>
        <!-- End Footer -->


    <script type="text/javascript" src="./Js/main.js"></script>
</body>
</html>