'use strict';
const _ = require('lodash');
const db = require('./db.js');


// UTILS
//----------------
// This is a mock db call that waits for # milliseconds and returns
const mockDBCall = (dataAccessMethod) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(dataAccessMethod());
    }, 500);
  });
};

// MOCK DB CALLS
//----------------
const getUsers = () => {
  const dataAccessMethod = () => _.map(db.usersById, userInfo => userInfo)
  return mockDBCall(dataAccessMethod);
};

const getListOfAgesOfUsersWith = (item) => {
  const dataAccessMethod = () => {
    // fill me in :)

    const result = {} // map age to count
    
    // userArray 
    const userArray = _.map(db.usersById, userInfo => userInfo)
    
    Object.keys(db.itemsOfUserByUsername).map(name => {
      // first see who has the item
      if (db.itemsOfUserByUsername[name].includes(item)) {
        const userAge = userArray.find(user => user.username === name).age
        if (result.hasOwnProperty(userAge)) {
          result[userAge] += 1
        } else {
          result[userAge] = 1
        }
      }
    })
    return result
  }
  return mockDBCall(dataAccessMethod);
}

module.exports = {
  getUsers,
  getListOfAgesOfUsersWith
};
