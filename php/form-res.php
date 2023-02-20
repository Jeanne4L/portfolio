<?php
    $checkNb = strip_tags($_POST['check-number']);

    $to = 'sandra.petereau@outlook.fr';
    $subject = 'Prise de contact depuis le portfolio';
    $name = strip_tags($_POST['name']);
    $email = strip_tags($_POST['email']);
    $message = strip_tags($_POST['message']);
    $message = wordwrap($message, 70, "\r\n");
    $message = '
        <html>
            <head>
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                <title>Contact depuis le portfolio</title>
            </head>
            <body>
                <div style="max-width:600px;">
                    <p>
                        '.$message.'
                    </p>
                    <br>
                    <p style="margin-bottom:0;">
                        '.$name.'
                    </p>
                    <a href="mailto:'.$email.'">
                        '.$email.'
                    </a>
                </div>
            </body>
        </html>';
    
    $headers = 'MIME-Version: 1.0'. "\r\n".
                'Content-type: text/html; charset=utf-8' . "\r\n".
                'From :'.$_POST['name']. "\r\n".
                'Reply-To : '.$_POST['email']. "\r\n";
?>

<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <title>
            Sandra Petereau - Message
        </title>
        <link rel="shortcut icon" href="../images/favicon.ico" type="image/x-icon">

        <link rel="stylesheet" href="../style.css">
            <link href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css" rel="stylesheet">
    </head>

    <body class="form-res">
        <header>
            <div class="container">
                <a href="../index.html" aria-label="accéder à la page principale">
                    <img src="../images/logo.webp" alt="logo avec les lettres s et p" srcset="../images/logo.svg">
                </a>
            </div>
        </header>
        
        <main>
            <?php
                if($checkNb == '7' && empty($_POST['check']) && mail($to, $subject, $message, $headers)): ?>
                    <h1>
                        <?='Message envoyé !'?>
                    </h1>
                    <p>
                        <?='Je vous recontacte au plus vite, à bientôt !'?>
                    </p>
                <?php else: ?>
                    <h1>
                        <?='Une erreur est survenue'?>
                    </h1>
                    <p>
                        <?='vous pouvez toujours me contacter via l\'enveloppe en bas de page. À bientôt !'?>
                    </p>
            <?php endif ?>

            <div class="btn--arrow">
                <a href="../index.html">
                    retourner à la page principale
                </a>
                <div class="arrow">
                    <div class="line"></div>
                    <div class="chevron"></div>
                </div>
            </div>
                </main>

        <footer>
            <a href="https://github.com/Jeanne4L" target="_blank" aria-label="lien github">
                github
            </a>
            <a href="mailto:sandra.petereau@outlook.fr" aria-label="lien envoi email">
                email
            </a>
        </footer>
    </body>
</html>