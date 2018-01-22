'/'
/*
Our 'logged out landing page'. Probably a nice looking home page and
buttons for sign up via email or login via facebook
 */
'/register'
/*
If someone is not logging in via facebook they will be taken to this route. This will be a form
that signs them up (hopefully does a verify email) and then will take them to 'profile' once logged in
 */
'/login/facebook'
/*
If a user clicks on the login via facebook button they will be taken
to this route. This route starts the facebook authorisation (pop up)
 */
'/login/facebook/return'
/*
When the facebook authorisation is completed, this is the route we will be sent
to. This will RES.REDIRECT to /profile. Nothing exists here.
*/
'/profile'
/*
This is the 'logged in landing page'. Will probably show a 'Welcome NAME' and their picture
and a 'Find a Movie button'
*/
'/movies'
/*
We come to this route from the button mentioned above. We can see all movie events here.
 */
'/movies/:id'
/*
When a specific movie is clicked we can see all comments associated with that movie.
 */
