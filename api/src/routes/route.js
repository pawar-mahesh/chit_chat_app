const express = require('express');
const route = express.Router();
const service = require('../service/user');

//To verify the credentials of user
route.post('/login', (req, res, next) => {
    let username = req.body.username;
    let password = req.body.password;
    console.log(req.body)
    return service.loginUser(username, password).then(item => {
        res.json({ data: item });
    }).catch(err => {
        next(err);
    });
});

//To createNew user
route.post('/createNewAccount', (req, res, next) => {
    let userData = req.body;
    return service.createNewUser(userData).then(ele =>
        res.json({ data: ele })
    ).catch(err => next(err))
});

module.exports = route;