const mongoose = require('mongoose');
const config = require('../server/config/database');
const InvitingCode = require('../server/models/invitingCode');
const random = require('string-random');

mongoose.connect(config.database);

mongoose.connection.on('connected', () => {
   console.log('Connected to database ' + config.database);
});

mongoose.connection.on('error', (err) => {
    console.log('Failed to connect to database ' + config.database);
});

let InvCodes = {};

for(let i =0; i<=60; i++ ){
    InvCodes[i] = new InvitingCode({
        code: random(16),
        source: "CUFE zixishi",
        used: false,
    });
    InvCodes[i].save(err => {
        if(err) {
            console.log(err);
            return ;
        }
        // console.log('success!');
        console.log(InvCodes[i].code);
    });
}

