<?php
  // Here we get all the information from the fields sent over by the form.
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];
  $campaign = $_POST['campaign'];

  $to = 'c.magnin@energie-perspective.fr';
  $subject = 'Campagne RGE - '.$campaign.' - Message de '.$name.'';

// message
  $message = '
  <html>
    <head>
      <title>'.$subject.'</title>
    </head>
    <body>
      <p>De : '.$name.'</p>
      <p>Email : '.$email.'</p>
      <p>Landing page : '.$campaign.'</p>
      <p>Message :</p>
      <pre>'.$message.'</pre>
    </body>
  </html>
  ';

  $headers  = 'MIME-Version: 1.0' . "\r\n";
  $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
  $headers .= 'From: rge@energie-perspective.fr' . "\r\n";
  
  if ( empty($name) || empty($email) ) {
    echo 'Vous avez omis de remplir un champ';
  }
  else if (filter_var($email, FILTER_VALIDATE_EMAIL)) { // this line checks that we have a valid email address
    mail($to, $subject, utf8_decode($message), $headers) or die ("Arf, quelque chose ne s'est pas bien passé... Veuillez retenter." ); //This method sends the mail.
    echo "Votre message a bien été envoyé !"; // success message
  }
  else {
    echo "Veuillez remplir un email valide afin que nous puissions vous recontacter";
  }
?>