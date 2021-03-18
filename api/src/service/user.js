const db = require('../model/user');

let user = {}

//Verfying the credentials of user
user.loginUser = (username, password) => {
  return db.loginUser(username, password).then(response => {
    return response
  })
}

//Verifying whether the user exits
user.createNewUser = (userData) => {
  return db.createNewUser(userData).then(ele => {
    return ele
  })
}

module.exports = user