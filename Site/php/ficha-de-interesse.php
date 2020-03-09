<?php
    include 'PHPMailer/PHPMailerAutoload.php';


    $nome = $_POST['nome'];
    $telefone = $_POST['telefone'];
    $email = $_POST['email'];
    $organizacao = $_POST['organizacao'];
    $assunto = $_POST['assunto'];
    $evento = $_POST['evento'];
    $estimativa = $_POST['estimativa'];
    $mensagemUsuario = $_POST['mensagem'];


    $mail = new PHPMailer();
    $mail->IsSmtp();
    $mail->SMTPDebug = 0;
    $mail->SMTPAuth = true;
    $mail->SMTPSecure = 'tls';
    $mail->Host = "smtp.gmail.com";
    $mail->Port = 587;
    //$mail->IsHtml(true);
    $mail->Username = "ne.cp2ejr@gmail.com";
    $mail->Password = "necp2#ogrooveealenda";
    $mail->SetFrom("ne.cp2ejr@gmail.com", "NE CP2");
    $mail->Subject = "Mensagem do Site da Osa - Ficha de Interesse";
    $mail->AddAddress("felipe.martinsvitor@gmail.com");

    $mail->Body = "O usuário " . $nome . " enviou uma mensagem. \n";
    $mail->Body .= "E-mail: " . $email . "\n";
    $mail->Body .= "Telefone: " . $telefone . "\n";
    $mail->Body .= "Organização: " . $organizacao . "\n";
    $mail->Body .= "Assunto: " . $assunto . "\n";
    $mail->Body .= "Projeto/Evento: " . $evento . "\n";
    $mail->Body .= "Estimativa de Público: " . $estimativa . "\n";
    $mail->Body .= "Mensagem: \n\t" . $mensagemUsuario . "\n";

    if(!$mail->Send()){
        echo "<script>alert('E-mail não pôde ser enviado!');</script>";
    }else{
        header('Location: ../index.html');
        echo "<script>alert('E-mail enivado com sucesso!');</script>";
    }

?>