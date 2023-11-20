It is live on : https://tttstories.netlify.app/
Two users have been created. Their profile data of which has been saved in  mongodb atlas cluster.The server is deployed on render.com.The username and passwords - 
username = Anuj Gosalia, password = 123
username = Mrinmoy Goswami, password = 123

Functionalities and data flow:
There is no route for userDetails from the server, The login route returns the required data and the data is saved in a global state variable and manipulated using useContext. Hence PLEASE DO NO RELOAD THE PROFILE PAGE . You can go back on the browser and login with different user to see different profile data. The data includes the numbers and Profile picture and Cover picture , which are stored in Firebase Cloud.The photos are not compressed and are of high quality so, might be a bit on the heavier side on the loading for slower network.

The userdata comes from the backend while the posts have been hardcoded inside the folder Data as data.js . This contains an array of four posts containing titles, post and tags.

The post cards shows 3 lines , clicking on the post will expand the post and clicking on it again will clamp the lines again as before.

Components :
The Login Page contains a simple login form with a 3d model rotating in the background. The validated username and password navigates to ProfilePage.

The Profile page renders a Top navigation bar along with coverpic and profile pic and calls different components to render data. The different components called are = ProfileInfo, PhotoContainer,Posts, About.

All the components are organised inside components folder.The two pages are inside the pages folder and for the Context(userContext) of user state, it is inside the Context folder.

Libraries Used :
react-router-dom,axios,icons,tailwindcss

