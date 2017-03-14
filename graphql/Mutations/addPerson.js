import { GraphQLString, GraphQLNonNull } from 'graphql';
import Person from '../ObjectTypes/Person';
import Db from '../../database/db';

const addPerson = {
    type: Person,
        args: {
        firstName: {
            type: new GraphQLNonNull(GraphQLString)
        },
        lastName: {
            type: new GraphQLNonNull(GraphQLString)
        },
        email: {
            type: new GraphQLNonNull(GraphQLString)
        }
    },
    resolve(root, args){
        return Db.models.person.create({
            firstName: args.firstName,
            lastName: args.lastName,
            email: args.email,
        });
    }
};

export default addPerson;