<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $website = $_POST['website'];
    $message = $_POST['message'];

    if (!empty($email) && !empty($message)) {
        if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $to = "julesatt.pro@gmail.com";
            $subject = "De: $name <$email>";
            if (!empty($website)) {
                $body = "Nom: $name\nEmail: $email\nTéléphone: $phone\nSite web: $website\nMessage:\n$message";
            } else {
                $body = "Nom: $name\nEmail: $email\nTéléphone: $phone\nMessage:\n$message";
            }
            $sender = "From: $email";

            if (mail($to, $subject, $body, $sender)) {
                echo "Votre message a bien été envoyé, yahou !";
            } else {
                echo "Une erreur est survenue lors de l'envoi du message, mince...";
            }
        } else {
            echo "L'adresse email n'est pas valide";
        }
    } else {
        echo "Les champs email et message ne sont pas remplis";
    }

?>