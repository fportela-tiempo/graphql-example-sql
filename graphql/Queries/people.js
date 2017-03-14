import { GraphQLList, GraphQLInt, GraphQLString } from 'graphql';
import Db from '../../database/db';
import Person from '../ObjectTypes/Person';

export default {
    type: new GraphQLList(Person),
    args: {
        id: {
            type: GraphQLInt
        },
        email: {
            type: GraphQLString
        }
    },
    resolve(root, args){
        return Db.models.person.findAll({where: args});
    }
};