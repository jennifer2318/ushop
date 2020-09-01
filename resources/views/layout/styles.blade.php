<?php
    $user = \Illuminate\Support\Facades\Auth::user();
?>
<!-- Styles -->
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700">

<link rel="stylesheet" href="{{asset('css/mainStyles.css')}}">
<link rel="stylesheet" href="{{asset('css/app.css')}}">
@if ($user && $user->isAdminAccess())
{{--    <link rel="stylesheet" href="{{asset('css/plugins.css')}}">--}}
@endif
