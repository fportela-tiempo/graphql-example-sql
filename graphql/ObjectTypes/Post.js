import { GraphQLObjectType, GraphQLInt, GraphQLString } from 'graphql';
import Person from './Person';

const Post = new GraphQLObjectType({
    name: 'Post',
    description: 'This is a post',
    fields: () => {
        return{
            id: {
                type: GraphQLInt,
                resolve(post){
                    return post.id;
                }
            },
            title: {
                type: GraphQLString,
                resolve(post){
                    return post.title;
                }
            },
            content: {
                type: GraphQLString,
                resolve(post){
                    return post.content;
                }
            },
            person: {
                type: Person,
                resolve(post){
                    return post.getPerson();
                }
            }
        }
    }
});
export default Post;
