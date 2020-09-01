<?php

namespace App\Http\Middleware;

use App\Providers\RouteServiceProvider;
use Closure;
use Illuminate\Support\Facades\Auth;

class AdminAuthenticated
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @param  string|null  $guard
     * @return mixed
     */
    public function handle($request, Closure $next, $guard = null)
    {
        $user = Auth::guard($guard);

//        Auth::logout();
        if (!$user->user() || (!$user->check() && !$user->user()->isAdminAccess())) {
            return redirect(RouteServiceProvider::ADMIN_LOGIN);
        }

        return $next($request);
    }
}
