
# The Gull

This is an e-commerce website powered by React on the frontend and NodeJs on the backend. It uses Redux for state management, React-Router for routing, Express for running the server, Passport for authentication, MongoDB for database and Bcrypt for hashing and salting passwords.


## Screenshots

![App Screenshot](https://i.ibb.co/xzXxG1T/iMac-13.png)


## Installation

After cloning the repo, the packages on both 
the server and client folders need to be installed.

```bash
  cd client/ && npm install
  npm start
```
on a seperate CLI

```bash
  cd server/ && npm install 
  npm run watch
```

nodemon is installed as a dev dependency to prevent the need to restart
the server with every change.

sample .env files can be used as a reference of the variables needed for
full functionality. Right now, only the google authentication will break
For database, the project uses MongoDB Atlas, however,
a json folder is created inside server/data to provide the data used in the app.
Please note that _id and password sections are removed and need to be redone.

    
## Tech Stack

Libraries used in the making of frontend: 

●	React

●	Redux

●	React-Router

●	Stripe

●	Sass

●	Uuid

●	Reselect

●	Redux-Thunk

●	Axios 

Libraries used in the making of backend:

●	Express

●	Mongoose

●	Passport

●	Uuid

●	Bcrypt

●	Express-session

●	Multer

●	Cors

●	Dotenv

The project does not depend on any outer APIs/Web sites to function. 



## Sitemap

![project diagram](https://i.ibb.co/ChW1vbj/project-diagram.png)



## Authentication

Users can register with their e-mail/password combination and authentication is done using PassportJs. Passwords are hashed and salted using the Bcrypt library and the database only store the encrypted passwords. Users can also use google sign-in for easy, convenient and more secure type of login. Admin users have extra functionality of being able to upload products to the database.
## Future

Phase 2

•	Give Admin account extra powers like editing a product or removing a product. 

•	Have a better dataset with more information about the products. 

•	Make the website responsive.

Phase 3

•	Add a user profile page where users can see their purchase history or save their address and credit card information for future purchases.

•	Allow users to change their passwords and have email confirmation for forgotten passwords.

•	A feedback form for potential problems and solutions.
