<?php

$recepient = "your@mail.ru";
$siteName = "Ajax-форма";

$name = trim($_POST["firstname"]);
$name = trim($_POST["lastname"]);
$email = trim($_POST["email"]);

$pagetitle = "Заявка с сайта \"$siteName\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
