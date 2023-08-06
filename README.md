# Welcome to Wikipedia_Search_Dashboard
Wikipedia Search Dashboard - Web APP

Greetings to all. In this project, we'll build a web application for the MERN stack Wikipedia Search Dashboard.
We'll examine how to use Google OAuth 2.0 for user authentication. Use the Wikipedia app to add search capabilities to our app, record user and user search history, and obtain statistics on the number of users who have used it day and hour by utilising charts.

## Working with the Project

Download this project from the above link. check two configaration files into the project.
First in the client folder and second in the server folder.

In the client folder, check .env file and put this code inside it if it is not present there.

.env
```
REACT_APP_SERVER_DOMAIN='<server_domain>'
# example REACT_APP_SERVER_DOMAIN = 'http://localhost:3001/'
```


In the server folder, check config.env file and put this code inside it if it is not present there.

config.env
```
NODE_ENV = production 
PORT = 3001
DATABASE_LOCAL = mongodb://localhost:27017/wikipedia_database

CLIENT_URL = "http://localhost:3001"
GOOGLE_CLIENT_ID = "Your_Google_Client_ID"
GOOGLE_CLIENT_SECRET = "Your_Google_Client_Secret"
```


*********************** Write command for start front-end and back-end server start************
Download web-app package from this GitHub repo.
1). Now install all dependencies using below command
     Open Terminal and hit this command:-   npm install 
For  frontend & backend.
(For client) some packages need to install forcefully like :- npm install @material-ui/core --force 

2) Start both servers using below command
     Open Terminal and hit this command:-   npm run start
For  frontend & backend.

3) Now open any Browser  
  	Request on this server http://localhost:3000 and login using Google account.

Check below functionality.
a)	Google OAuth 2.0 for user authentication.
b)	Search data :- Use the Wikipedia app to add search capabilities in our app.
c)	record user and user search history.
d)	Charts :- obtain statistics on the number of users who have used it day and hour by utilising charts.

 4) You can Check backend API  using postman collection also.
      Import This collection in your postman – app Wikipedia.postman_collection.json
      Make API request on http://localhost:3001/ back-end server