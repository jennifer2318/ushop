@prepend('styles')
    <!-- Styles -->
    <link rel="stylesheet" href="{{asset('css/mainStyles.css')}}">
    <link rel="stylesheet" href="{{asset('css/app.css')}}">

@endprepend

@stack('styles')

@prepend('scripts')
    <!-- Scripts -->
    <script type="text/javascript" src="{{asset('js/loader.js')}}"></script>
{{--    <script type="text/javascript" src="{{asset('js/jquery-3.5.1.min.js')}}"></script>--}}
@endprepend

@stack('scripts')

</body>
</html>
