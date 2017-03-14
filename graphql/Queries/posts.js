import { GraphQLList} from 'graphql';
import Db from '../../database/db';
import Post from '../ObjectTypes/Post';

export default {
    type: new GraphQLList(Post),
    resolve(root, args){
        return Db.models.post.findAll({where: args});
    }
};