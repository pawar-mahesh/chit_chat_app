const collection = require('../utilities/connection');
const userData = [
  {
    "username": "mahi123",
    "password": "mahi@123",
    "Profile": {
      "firstName": "Mahi",
      "lastName": "Pawar",
      "email": "mahesh.pawar2345@gmail.com",
      "mobileNo": 8055580245,
      "lastLogin": "2021-03-03T11:30:28.340Z"
    }
  }
]

let create = {}

create.setupDB = async () => {
  const userColl = await collection.getCollection();
  const data = await userColl.deleteMany();
  const result = await userColl.insertMany(userData);
  if (result && result.length > 0)
    return result.length;
  else
    return null;
}

module.exports = create