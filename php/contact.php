<?php


$name = $_POST['name'];


$email = $_POST['email'];

$message = $_POST['message'];

$odkogo = "bartosz.kosiec@gmail.com";


$dokogo = "bartosz.kosiec@gmail.com";


$tytul = "Formularz kontaktowy z portfolio";


$wiadomosc = "";
$wiadomosc .= "Temat wiadomosci: " . $name . "\n";
$wiadomosc .= "Email: " . $email . "\n";
$wiadomosc .= "Wiadomość: " . $message . "\n";


$sukces = mail($dokogo, $tytul, $wiadomosc, "Od: <$odkogo>");

if ($sukces){
  $messageText = "Thanks for your message. We will be in touch!";
echo "<script type='text/javascript'>
alert('$messageText');
window.location = 'http://bartoszkosiec.pl/';
</script>";
}
else{
  $messageText = "Something went wrong, try send me message: bartosz.kosiec@gmail.com.";
echo "<script type='text/javascript'>
alert('$messageText');
window.location = 'http://bartoszkosiec.pl/';
</script>";
}
