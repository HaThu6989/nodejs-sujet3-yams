# Yams Game
This app has a game to appreciate the bakery's customers.\
The customer roll 5 dice using a single button. Depending on the combinations he would win or not some pastry(ies). This event will last until 50 pastries are won.\
The game has no time limit. The results page will be displayed with the order in which the pastries were won with their date and time.

## About
 
- This repository implements the backend REST API (built in Express + MongoDB).
- A repository for the frontend (React App) can be found here : https://github.com/HaThu6989/nodejs-sujet3-yams/tree/main/client
 
## Requirements
 
For development, you will need Node.js, a node global package, Mongodb, MySQL installed in your environement.
 
### Node
 
You have to install [nodejs and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm). If the installation was successful, you should be able to run the following command.
 
    node --version
    npm --version
 
### Mongodb
 
Run MongoDB with [MongoDB Compass](https://www.mongodb.com/docs/compass/master/install/).\
  In this repo, the port 27017 is used to connect to the database MongoDB. Note that you have to add advanced connection options with authentication in the mongodb.yml file :
  
  mongodb://localhost:27017/yams
  
 
The server is set on port 5009 : [http://localhost:5009](http://localhost:5009).\
If you want another port, you will change the variable :


## Environments
- Mongodb link : MONGODB_URL (ex : mongodb://localhost:27017/yams)
- Server side : PORT (ex: 5009)
- Client side : FRONT_END_URL (ex: http://localhost:3002)
- JWT token secret : TOKEN_SECRET (ex: yoursecret)
 
## Instructions
 
To run in your computer, follow these steps :
 
### Cloning for server and client
 
    git clone https://github.com/HaThu6989/nodejs-sujet3-yams.git 
    cd server/
 
### Configuration environment variables
 
After downloading the repository there are some things that need to be configured if necessary before you are able to run the app in your local environment .env file
 
### Installing dependencies
 
    npm install
 
This will download and install all the dependencies necessary to run the app correctly.
 
## Running the local server
 
    npm start
 
These commands run NODE_ENV=development nodemon server.js which will initiate a live-updated session on the port selected in the environment variable so that the server can be live updated with any code changes.