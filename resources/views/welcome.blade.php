<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
       
        <title>Perspective Quizarama</title>
        <link rel="stylesheet" type="text/css" href="css/app.css">
        <link href="https://fonts.googleapis.com/css?family=Nunito&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet">
        
    </head>
    <body>
    @csrf
        <div id="quiz"></div>
        <script type="text/javascript" src="js/app.js"></script>
    </body>
</html>
