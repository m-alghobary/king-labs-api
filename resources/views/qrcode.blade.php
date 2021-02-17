<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Invoice</title>
</head>

<body>
    <div class="main">
        <div style="margin-bottom: 2rem">{{ QrCode::generate($id) }}</div>
        <div style="margin-bottom: 2rem">{{ QrCode::generate($id) }}</div>
        <div style="margin-bottom: 2rem">{{ QrCode::generate($id) }}</div>
    </div>
</body>

</html>
