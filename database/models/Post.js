import Sequelize from 'sequelize';

export default (connection) => {
    return connection.define('post', {
        title: {
            type: Sequelize.STRING,
            allowNull: false
        },
        content: {
            type: Sequelize.TEXT,
            allowNull: false
        }
    });
};
