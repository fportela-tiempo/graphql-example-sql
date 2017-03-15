import express from 'express';
import schema from './graphql/Schema';
import { graphqlExpress, graphiqlExpress } from 'graphql-server-express';
import bodyParser from 'body-parser';
import cors from 'cors';

const APP_PORT = 3000;

const app = express();

app.use(cors({
    origin: 'http://localhost:8080',
}));

app.use('/graphql', bodyParser.json(), graphqlExpress({
    schema: schema
}));

app.use('/graphiql', graphiqlExpress({
    endpointURL: '/graphql'
}));

app.listen(APP_PORT, () => {
    console.log(`App listening on port ${APP_PORT}`);
});