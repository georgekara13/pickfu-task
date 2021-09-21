The following app, is designed to work with docker, thats why everything is included into a single repo.

Requirements:

1. Docker engine OR docker desktop

Installation instructions:

1. Clone the repo locally
2. copy the contents of '.env.example' to a file named '.env' on the app root
3. Ensure that the docker daemon is up and running (Either you have docker desktop and you can see the icon OR check with systemctl `$ sudo systemctl status docker`)
4. On the command line, navigate to the app root folder and run: `$ docker-compose up` - This should take a while
5. Once all of the services are up, navigate to <a href="http:localhost:3000" target="_blank">localhost</a>

To run the client tests, on your command line, navigate to `client` and run `$ npm test`
