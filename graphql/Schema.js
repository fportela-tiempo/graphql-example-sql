import { GraphQLSchema } from 'graphql';
import Query from './RootQuery';
import Mutation from './RootMutation';

const Schema = new GraphQLSchema({
    query: Query,
    mutation: Mutation
});

export default Schema;