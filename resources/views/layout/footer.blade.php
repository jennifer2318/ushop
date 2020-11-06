@prepend('styles')
    <!-- Styles -->
    <link rel="stylesheet" href="{{asset('css/app.css')}}">
    <link rel="stylesheet" href="{{asset('css/fontawesome.css')}}">

@endprepend

@stack('styles')

@prepend('scripts')
    <!-- Scripts -->
    <script type="text/javascript" src="{{asset('js/loader.js')}}"></script>
@endprepend

@stack('scripts')

</body>
</html>
