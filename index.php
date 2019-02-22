<?php
$origin = $_SERVER['HTTP_ORIGIN'];
$allowed_domains = [
    'https://my-json-server.typicode.com/',
    'http://13.211.249.108/'
];

if (in_array($origin, $allowed_domains)) {
    header('Access-Control-Allow-Origin: ' . $origin);
    header('Access-Control-Allow-Methods: GET, POST');
    header("Access-Control-Allow-Headers: X-Requested-With");
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