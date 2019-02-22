<?php
$origin = $_SERVER['HTTP_ORIGIN'];
$allowed_domains = [
    '*'
];

if (in_array($origin, $allowed_domains)) {
    header('Access-Control-Allow-Origin: ' . $origin);
    header('Access-Control-Allow-Methods: POST,GET,PUT,DELETE');
    header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
}?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<script type="application/javascript" src="js/main.js"></script>
</body>
</html>