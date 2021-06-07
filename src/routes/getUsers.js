'use strict';
const mockDBCalls = require('../database/index.js');

const getUsersHandler = async (request, response, next) => {
  try {
    const data = await mockDBCalls.getUsers();
    return response.status(200).send(JSON.stringify(data));
  }
  catch(err) {
    return next(new Error("Cannot get users"));
  }
    
};

module.exports = (app) => {
  app.get('/users', getUsersHandler);
};
