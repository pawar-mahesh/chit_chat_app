const { Schema } = require('mongoose');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.set('useCreateIndex', true);

const url = "mongodb://localhost:27017/ChitChatUsersDB"

const usersSchema = Schema({
    username: { type: String, required: [true, 'username is required'] },
    password: { type: String, required: [true, 'password is required'] },
    Profile: {
        firstName: { type: String },
        lastName: { type: String },
        email: { type: String },
        mobileNo: { type: Number },
        lastLogin: { type: Date, default: new Date().toISOString() }
    }

}, { collection: "Users", timestamps: true })

let connection = {}

//Returns model object of "Users" collection
connection.getCollection = () => {
    //Establish connection and return model as promise
    return mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }).then(database => {
        return database.model('Users', usersSchema)
    }).catch(error => {
        let err = new Error("Could not connect to the database");
        err.status = 500;
        throw err;
    });
}

module.exports = connection;