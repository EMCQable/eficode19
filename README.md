This is a coding assignment from Eficode for their 2019 Summer job opening.

##Parts

In /backends there are two backends that run in AWS Lambda. The endpoint_poller is run with a cron job (* 37 * * ? * ), that is once an hour 37 minutes past. The data is put into a DynamoDB database.

The http_endpoint works as a backend for the frontend in /src . The API is an AWS API Gateway API, which invokes the endpoint code.

In the frontend, there's a React App with a redux store. The actual visualization is rendered with react-vis.
