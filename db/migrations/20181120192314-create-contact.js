// File contains JavaScript that is translated into SQL to run database operations related to schema.

'use strict';
module.exports = {
   up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('Contacts', {
         id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
         },
         name: {
            type: Sequelize.STRING
         },
         phone: {
            type: Sequelize.STRING
         },
         createdAt: {
            allowNull: false,
            type: Sequelize.DATE
         },
         updatedAt: {
            allowNull: false,
            type: Sequelize.DATE
         }
      });
   },
   down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('Contacts');
   }
};
