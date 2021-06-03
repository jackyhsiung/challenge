'use strict';
const mockDBCalls = require('../database/index.js');

const getListOfAgesOfUsersWithHandler = async (request, response) => {
    const { itemToLookup } = request.body
    console.log('itemToLookup', itemToLookup)
    try {
      const data = await mockDBCalls.getListOfAgesOfUsersWith(itemToLookup);
      return response.status(200).send(JSON.stringify(data));
    } catch(err) {
      console.log('catch error')
      return response.status(404).send(JSON.stringify('Cannot Get List Of Ages Of Users'));
      // return next(new Error('Reject'))
    }
    
    
};

module.exports = (app) => {
    app.get('/users/age', getListOfAgesOfUsersWithHandler);
};
