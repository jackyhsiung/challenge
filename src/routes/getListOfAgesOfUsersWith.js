'use strict';
const mockDBCalls = require('../database/index.js');

const getListOfAgesOfUsersWithHandler = async (request, response, next) => {
    const { itemToLookup } = request.query
    try {
      const data = await mockDBCalls.getListOfAgesOfUsersWith(itemToLookup);
      return response.status(200).send(JSON.stringify(data));
    } catch(err) {
      next(new Error('Cannot get list of ages of users with the item'))
    }
    
    
};

module.exports = (app) => {
    app.get('/users/age', getListOfAgesOfUsersWithHandler);
};
