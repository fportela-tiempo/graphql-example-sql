import { GraphQLObjectType } from 'graphql';
import people from './Queries/people';
import posts from './Queries/posts';

const Query = new GraphQLObjectType({
    name: 'Query',
    description: 'This is a root query',
    fields: ()=> {
        return {
            people: people,
            posts: posts
        }
    }
});

export default Query;