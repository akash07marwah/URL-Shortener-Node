# URL-Shortener-Node
It is an api designed to shorten URL's like bit.ly, it is made on NodeJS and Dockerized by Docker.

# Initialization
 <h3> Docker Initialization </h3>
 To build docker files and run the docker images install docker from here: https://docs.docker.com/install/
  After installing you can directly run the command:
  
  ```
  docker run akashmarwah007/redis
  ```
  
  or you can go to the root folder and run:
  ```
  docker build .
  ```
  on the terminal and copy the id generated and run the command:

  ```
  docker run <ID>
  ```
 <h3> Node Initialization </h3>
 If node is not installed on your system, download it from here: https://nodejs.org/en/
 then go into the folder and on your terminal run the command:
 ```
 npm install
 ```
 this installa all the dependencies and now to run the server :
  ```
  npm start
  ```
  , also go to https://www.mongodb.com/ and create a Database first and <br>
  now you can test it with Postman ( https://www.getpostman.com/downloads/ ) <br>
  now first send the post request to http://localhost:3001/api/url/shorten in the format:
  ```
  {
    "longUrl":"YOUR_URL"
  }
  ```
  then visit your_short_url in the response.
