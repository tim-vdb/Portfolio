<?php
include('session.php');
?>

<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://use.typekit.net/tln2edd.css">
    <link rel="stylesheet" href="formulaire.css">
    <title>Inscription</title>
</head>

<body>
<header>
        <div>
            <img id="logo_header" src="images/LogoTransparent.png" alt="">
        </div>

        <h1>Quantix Horizon</h1>
        
        <nav>
            <ul>
                <li><a href="Quantix.html">Présentation</a></li>
                <li><a href="">|</a></li>
                <li><a href="formulaire.php">Inscription</a></li>
            </ul>
        </nav>
    </header>
    <main>
        <form action="create.php" method="post">

            <label for="username">Nom<br></label>
            <input type="text" name="username"
                value="<?php echo isset($_SESSION['values']['username']) ? $_SESSION['values']['username'] : ""; ?>">
            <br>

            <label for="email">Email<br></label>
            <input type="text" name="email"
                value="<?php echo isset($_SESSION['values']['email']) ? $_SESSION['values']['email'] : ""; ?>">
            <br>

            <label for="password">Mot de Passe<br></label>
            <input type="password" name="password"
                value="<?php echo isset($_SESSION['values']['password']) ? $_SESSION['values']['password'] : ""; ?>">
            <br>

            <label for="phone">Téléphone<br></label>
            <input type="phone" name="phone"
                value="<?php echo isset($_SESSION['values']['phone']) ? $_SESSION['values']['phone'] : ""; ?>">
            <br>

            <label for="address">Adresse<br></label>
            <input type="text" name="address"
                value="<?php echo isset($_SESSION['values']['address']) ? $_SESSION['values']['address'] : ""; ?>">

            <button type="submit">Envoyer</button>

        </form>
        <?php
        if (array_key_exists('errors', $_SESSION)) {
            foreach($_SESSION['errors'] as $error){
                echo '<p style="color:red;">'.$error.'</p>';
            }
        }
        if (array_key_exists('success', $_SESSION)) {
            echo '<p style="color:green;">'.$_SESSION['success'].'</p>';
        }
    ?>
    </main>
    <footer></footer>
</body>

</html>