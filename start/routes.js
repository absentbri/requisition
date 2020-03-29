'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/guides/routing
|
*/

const Route = use('Route')

// AUTH endpoints
Route.group(() => {

  Route.get("hello", () => {
    return { greeting: "Hello from the backend" }
  })

  Route.get('session', 'UserSession.index')
  Route.post('session', 'UserSession.create')
  Route.delete('session', 'UserSession.destroy')

}).prefix('auth')
  .formats(['json'])

// API endpoints
Route.group(() => {

  Route.get("hello", () => {
    return { greeting: "Hello from the backend" }
  })

  Route.any('*', () => { return { error: "Route not found!" } })

})
  .prefix('api')
  .middleware(['auth'])
  .formats(['json'])

// VUE endpoints
Route.any('*', 'NuxtController.render')
