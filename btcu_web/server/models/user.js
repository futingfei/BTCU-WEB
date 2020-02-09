const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

const UserSchema = mongoose.Schema({
    username: {
        type: String
    },
    realname: {
        type: String
    },
    school: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    identity: {
        type: Number
    },
    balance: {
        type: Number
    },
});

const User = module.exports = mongoose.model('User', UserSchema);


module.exports.getUserById = function(id, callback){
    User.findById(id, callback);
};

module.exports.getUserByUsername = function(username, callback){
    const query = {username: username};
    User.findOne(query, callback);
};

module.exports.addUser = function (newUser, callback) {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            if(err) throw err;
            newUser.password = hash;
            newUser.save(callback);
        });
    });
};

module.exports.comparePassword = function (candidatePassword, hash, callback) {
    bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
        if(err) throw err;
        callback(null, isMatch);
    });

};

module.exports.updateBalance = function (user, amount, callback) {
    User.findByIdAndUpdate(user.id, {balance: user.balance + amount}, callback);
};