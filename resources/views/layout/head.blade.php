<?php
    $user = \Illuminate\Support\Facades\Auth::user();
?>
<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>EasyCms</title>

    <script type="text/javascript">
        window.invivoment = {
            <?php
                $paths = [
                    'Admin' => \App\Providers\RouteServiceProvider::ADMIN_PAGE,
                    'Auth' => route('adminAuth'),
                ];

                foreach ($paths as $key => $path) {
                    echo 'path' . $key . ': "' . $path . '",';
                }
            ?>
        };

        const config = {
            js: [
                {index: 0, url: 'http://ushop.loc/js/app.js', type: null},
            ]
        };

        window.LoaderConfig = config;

    </script>

</head>
<body class="{{$bodyClassName ?? ''}}">
