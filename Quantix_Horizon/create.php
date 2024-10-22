<?php
include('session.php');
include("mydb.php");

$username = $_POST["username"];
$email = $_POST["email"];
$password = $_POST["password"];
$phone = $_POST["phone"];
$address = $_POST["address"];
$titre = "Tu as rejoins notre NewsLetter, soit informer de toutes les activités pour quitter la Terre";
$contenu = "Bonjour";
$from = $email;


//on reset toutes les valeurs contenues dans la session
session_unset();
//on stocke les variables utilisateurs afin de les sauvegarder et de les réafficher à l'utilisateur
$_SESSION['values'] = ['username' => $username, 'email' => $email, 'password' => $password, 'phone'=> $phone,'address'=> $address];

//on créer un tableau des erreurs que l'on parcours dans un foreach dans la page inscription
$_SESSION['errors'] = [];

if (empty($username)) {
    $_SESSION['errors'][] = 'Nom invalide';
}

if (empty($address)) {
    $_SESSION['errors'][] = 'Adresse invalide';
}

if (empty($password)) {
    $_SESSION['errors'][] = 'Mot de passe invalide';
}

// Email match
$re = '/[a-z0-9!#$%&\'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&\'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/m';
preg_match_all($re, $email, $matches, PREG_SET_ORDER, 0);
if (empty($email) || count($matches) == 0) {
    $_SESSION['errors'][] = 'Email non valide';
}

// Phone match
$re = '/\d{10}/m';
preg_match_all($re, $phone, $matches, PREG_SET_ORDER, 0);
if (empty($email) || count($matches) == 0) {
    $_SESSION['errors'][] = 'Téléphone invalide ';

}

//on ne poursuit le script avec l'insertion que s'il n'y a pas d'erreur
if(count($_SESSION['errors']) == 0){
    // Requête pour savoir si utilisateur déjà existant
    $result = $mysqli->query("SELECT * FROM  users WHERE username = '$username' or email = '$email'");
    if ($result->num_rows <= 0) {
        // on crée la requête
        $requete = "INSERT INTO users(username, address, email, password, phone) VALUES ('$username','$address','$email','$password','$phone')";
        //on execute la requete
        $result = $mysqli->query($requete);
    
        //on vérifie que la requete a bien inséré une ligne (et une ligne seulement)
        if ($result != 1) {
            //si non affichage d'une erreur
            $_SESSION['errors'][] = 'Une erreur est survenue lors de l\'insertion en base ';
        }else{
            //si oui, on reset toutes les valeurs contenues dans la session
            session_unset();
            //on rajoute le message de succes en session
            $_SESSION['success'] = "Utilisateur créé avec succès";
            // mail($email,$titre,$contenu,$from);
        }
    }else{
        $_SESSION['errors'][] = 'Utilisateur déjà existant ';
    }
}

// Les informations de l'expéditeur
$expediteur = "timotheevdbosch@gmail.com";
$destinataire = "timotheevdbosch@gmail.com";
$objet = "Test d'envoi d'e-mail avec PHP";

// Le corps du message
$message = "Bonjour,\nCeci est un test d'envoi d'e-mail avec PHP.";

// En-têtes additionnels
$headers = "From: $expediteur";

// Envoi de l'e-mail
if (mail($destinataire, $objet, $message, $headers)) {
    echo "L'e-mail a été envoyé avec succès.";
} else {
    echo "Erreur lors de l'envoi de l'e-mail.";
}

header('location: formulaire.php');