<?php

namespace App\Offer;

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;

class Mailer
{
    public static function sendMail(): void
    {
        if (empty($_POST)) die('$var или 0, или пусто, или вообще не определена');
        $phone = $_POST['phone'];
        $email = $_POST['email'];
        $message = $_POST['message'];

// Создаем письмо
        $mail = new PHPMailer();
        $mail->SMTPDebug = SMTP::DEBUG_SERVER;
        $mail->isSMTP();                                                                    // Отправка через SMTP
        $mail->Host   = $_ENV['SMTP_HOST'];                                                 // Адрес SMTP сервера
        $mail->Port   = $_ENV['SMTP_PORT'];                                                 // Адрес порта
        $mail->SMTPAuth   = true;                                                           // Enable SMTP authentication
        $mail->Username   = $_ENV['SMTP_EMAIL'];                                                // ваше имя пользователя (без домена и @) info@swagelok.su
        $mail->Password   = $_ENV['SMTP_PASSWORD'];                                                   // ваш пароль zRX8r*5Z
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;                                    // шифрование ssl
        $mail->CharSet = "utf-8";
        // порт подключения

        $mail->setFrom($_ENV['SMTP_FROM_EMAIL'], $_ENV['SMTP_FROM_NAME']);                     // от кого (email и имя)
        $mail->addAddress($_ENV['SMTP_TO_EMAIL'], $_ENV['SMTP_TO_NAME']);            // кому (email и имя)
// html текст письма
        $mail->isHTML(true);
        $mail->Subject = $_ENV['SMTP_TITLE'];
//$mail->Body    = 'This is the HTML message body <b>in bold!</b>';

        $mail->msgHTML("<html><body>
                <p><strong>Номер телефона:</strong> $phone</p>
                <p><strong>Email:</strong> $email</p>
                <p>$message</p>
                </body></html>");
// Отправляем
        if ($mail->send()) {
            echo 'Письмо отправлено!';
        } else {
            echo 'Ошибка: ' . $mail->ErrorInfo;
        }
    }
}
