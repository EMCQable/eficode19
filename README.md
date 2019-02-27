This is a coding assignment from Eficode for their 2019 Summer job opening.

##Parts

In /backends there are two backends that run in AWS Lambda. The endpoint_poller is run with set intervals once every hour.. The data is put into a MongoDB database.

There's a simple backend for GET requests which scan the database.

In the frontend, there's a React App with a redux store. The actual visualization is rendered with react-vis.

The frontend and backend are made into docker images and run with docker-compose.

The app is running at https://eficode19.herokuapp.com/
