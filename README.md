# Graphql exmaple

## Technology Stack
  - Sequelize: SQL ORM
  - Express: Node framework
  - graphql-server-express: is a HTTP GraphQL server
  
## Getting started
  - Run ```npm install```
  - Rename the ```config.example.js``` file ```config.js``` and set up your database configuration
  - Create a database and update the config file with the requried info
  - You might need to install the ```babel-node``` package globaly by running ```npm install -g babel-node```
  - Once the database configuration is ready run ```npm run migrate``` to create the tables and seed them
  - To run the GraphQL server run ```npm run serve```
  - Open http://localhost:3000/graphql

