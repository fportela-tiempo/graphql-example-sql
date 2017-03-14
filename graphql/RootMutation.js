import { GraphQLObjectType } from 'graphql';
import addPerson from './Mutations/addPerson';

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    description: 'Functions to create stuff',
    fields: {
        addPerson: addPerson
    }
});

export default Mutation;