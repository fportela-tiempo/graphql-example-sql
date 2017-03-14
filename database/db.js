import Sequelize from 'sequelize';
import PersonModel from './models/Person';
import PostModel from './models/Post';
import config from '../config';

const connection = new Sequelize(
    config.DB_NAME,
    config.DB_USERNAME,
    config.DB_PASSWORD,
    {
      host: config.DB_HOST,
      dialect: config.DB_DIALECT
    }
);

export const Person =  new PersonModel(connection);
export const Post = new PostModel(connection);

// Relationships
Person.hasMany(Post);
Post.belongsTo(Person);

export default connection;
