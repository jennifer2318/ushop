<?php
    $user = \Illuminate\Support\Facades\Auth::user();
?>
@include('layout.head')


@if ($user && $user->isAdminAccess())
    <!-- Admin Scripts -->
    @push('scripts')
        <!-- Admin Scripts -->
    @endpush
@endif
@include('layout.footer')
