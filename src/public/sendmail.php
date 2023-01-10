<?php

require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

$fullname = $_POST['fullname'];
$email = $_POST['email'];

isset($_POST["message"]) ? $message = $_POST["message"] : $message = null; // If empty

$title = "New Contact";

$body =
    "<div style='padding:15px;background-color:#DDD;color:#000;border-radius:10px;font-size:18px;font-family:Roboto, Helvetica, Arial, sans-serif'>
        <b>Name:</b> $fullname <hr>
        <b>Email:</b> $email <hr>
        <b>Message:</b> $message
    </div>";

$mail = new PHPMailer\PHPMailer\PHPMailer();

try {
    $mail->isSMTP();
    $mail->isHTML();
    $mail->CharSet  = "UTF-8";
    $mail->SMTPAuth = true;

    $mail->isSMTP();

    $mail->SMTPAuth = true;
    $mail->SMTPSecure = 'tsl';

    $mail->Host     = 'medianly.agency';
    $mail->Username = 'relations@medianly.agency';
    $mail->Password = '2N,6k^0B4p#?';
    $mail->Port     = 587;

//    $mail->Host     = 'smtp.mailtrap.io';
//    $mail->Username = '464f6528ce03de';
//    $mail->Password = 'ad64ec530a4003';
//    $mail->Port     = 2525;

    $mail->setFrom('no-reply@medianly.agency', 'Medianly Agency');
    $mail->addAddress('relations@medianly.agency');

    $mail->Subject = $title;
    $mail->Body = $body;

//    $mail->SMTPDebug = 2;
//    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    $mail->send() ? $result = "success" : $result = "error";
} catch (Exception $e) {
    $result = "error";
//    $status = `{$mail->ErrorInfo}`;
}

echo json_encode([
    "result" => $result,
//    "status" => $status
]);