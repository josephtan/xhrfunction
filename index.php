<?php
$origin = $_SERVER['HTTP_ORIGIN'];
$allowed_domains = [
    'https://my-json-server.typicode.com/'
];

if (in_array($origin, $allowed_domains)) {
    header('Access-Control-Allow-Origin: ' . $origin);
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