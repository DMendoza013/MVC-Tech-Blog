const { Model, DataTypes, INTEGER } = require('sequelize');
const sequelize = require('../config/connection');

class Blog extends Model {}

Blog.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        content: {
            type: DataTypes.STRING
        },
        creator_username: {
            type: DataTypes.STRING,
            references: {
                model: 'user',
                key: 'name'
            },
        }
    },
    {  
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'blog',     
    }
);

module.exports = Blog;