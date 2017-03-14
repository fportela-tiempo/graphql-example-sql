import { GraphQLSchema } from 'graphql';
import Query from './graphql/RootQuery';
import Mutation from './graphql/RootMutation';

const Schema = new GraphQLSchema({
    query: Query,
    mutation: Mutation
});

export default Schema;