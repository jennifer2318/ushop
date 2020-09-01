@include('layout.head', array(
    'bodyClassName' => 'bg-default'
))

@push('styles')
    <link rel="stylesheet" href="{{asset('css/font-awesome.css')}}">
    <link rel="stylesheet" href="{{asset('css/nucleo-svg.css')}}">
    <link rel="stylesheet" href="{{asset('css/nucleo-icons.css')}}">
    <link rel="stylesheet" href="{{asset('css/app.css')}}">
@endpush

@push('scripts')
@endpush

@include('layout.footer')
