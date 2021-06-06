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
    // map age to count
    const ageCountObj = {} 
    const userArray = _.map(db.usersById, userInfo => userInfo)
    
    Object.keys(db.itemsOfUserByUsername).map(name => {
      if (db.itemsOfUserByUsername[name].includes(item)) {
        const userAge = userArray.find(user => user.username === name).age
        if (ageCountObj.hasOwnProperty(userAge)) {
          ageCountObj[userAge] += 1
        } else {
          ageCountObj[userAge] = 1
        }
      }
    })

    const ageCountArray = []
    Object.keys(ageCountObj).forEach(age => {
      ageCountArray.push({
        age: age,
        count: ageCountObj[age]
      })
    })
    return ageCountArray
  }
  return mockDBCall(dataAccessMethod);
}
const getItems = () => {
  const dataAccessMethod = () => {
    const items = []
    Object.values(db.itemsOfUserByUsername).map(itemsOfUser => {
      itemsOfUser.forEach(item => {
        if (!items.includes(item)) {
          items.push(item)
        }
      })
    })
    return items
  }
  return mockDBCall(dataAccessMethod);
}
module.exports = {
  getUsers,
  getListOfAgesOfUsersWith,
  getItems
};
