<?php

    include 'PHPMailer/PHPMailerAutoload.php';

    $tipo = $_POST['tipo'];

    $nome = $_POST['nome'];
    $telefone = $_POST['telefone'];
    $email = $_POST['email'];
    $organizacao = $_POST['organizacao'];
    $assunto = $_POST['assunto'];
    $mensagem = $_POST['mensagem'];

    if($tipo == 'geral'){
        $area = $_POST['area'];
        emailGeral($nome, $email, $telefone, $organizacao, $assunto, $area, $mensagem);
    }else{
        $setor = $_POST['departamento'];
        emailSetor($nome, $email, $telefone, $organizacao, $assunto, $setor, $mensagem);
    }
    
    function emailGeral($nome, $email, $telefone, $organizacao, $assunto, $area, $mensagem){
        $body = "O usuario " . $nome . " enviou uma mensagem. \n";
        $body .= "E-mail: " . $email . "\n";
        $body .= "Telefone: " . $telefone . "\n";
        $body .= "Organizacao: " . $organizacao . "\n";
        $body .= "Assunto: " . $assunto . "\n";
        $body .= "Area: " . $area . "\n";
        $body .= "Mensagem: \n" . $mensagem . "\n";

        enviarEmail($body);
    }

    function emailSetor($nome, $email, $telefone, $organizacao, $assunto, $setor, $mensagem){
        $body = "O usuario " . $nome . " enviou uma mensagem. \n";
        $body .= "E-mail: " . $email . "\n";
        $body .= "Telefone: " . $telefone . "\n";
        $body .= "Organizacao: " . $organizacao . "\n";
        $body .= "Assunto: " . $assunto . "\n";
        $body .= "Departamento: " . $setor . "\n";
        $body .= "Mensagem: \n" . $mensagem . "\n";
       
        enviarEmail($body);
    }

    function enviarEmail($body){

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
        $mail->Subject = "Mensagem do Site da Osa - Contato";
        $mail->AddAddress("felipe.martinsvitor@gmail.com");
    
        $mail->Body = $body;
    
        if(!$mail->Send()){
            echo "<script> alert('E-mail não pôde ser enviado!''); </script>";
        }else{
            header('Location: ../contato.html');
            echo "<script> alert('E-mail enviado com sucesso!'); </script>";
        }
    }
?>

