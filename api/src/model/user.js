const collection = require('../utilities/connection');
let user = {}

//Verify the user credentials and modify the last logout
user.loginUser = async (username, password) => {
  const userCollection = await collection.getCollection();
  const data = await userCollection.find({ "username": username });
  if (data.length === 1) {
    if (password == data[0]['password']) {
      return userCollection.updateOne({ "username": username },
        { $set: { "Profile.LastLogin": new Date().toISOString() } }).then(res => {
          if (res.nModified === 1) {
            return data;
          }
        });
    } else {
      let err = new Error("The password entered is incorrect!!");
      err.status = 401;
      throw err;
    }
  } else {
    let err_1 = new Error("You are not registered.Please register to login");
    err_1.status = 404;
    throw err_1;
  }
}

//verify and create the user 
user.createNewUser = async (userData) => {
  const userCollection = await collection.getCollection();
  const data = await userCollection.find({ "username": userData.username });
  if (data.length == 0) {
    let uin = await userCollection.create(userData);
    if (uin)
      return userData
  } else {
    let err = new Error("The username entered exists!! Please login");
    err.status = 401;
    throw err;
  }
}

module.exports = user
