import _ from 'lodash';
import Faker from 'faker';
import connection, { Person } from './db';

connection.sync({force: true}).then(() => {
    _.times(100, () => {
        return Person.create({
            firstName: Faker.name.firstName(),
            lastName: Faker.name.lastName(),
            email: Faker.internet.email()
        }).then(person => {
            _.times(10, () => {
                person.createPost({
                    title: `${Faker.lorem.sentence()} by ${person.firstName}`,
                    content: Faker.lorem.paragraph()
                });
            });

        });
    });
});