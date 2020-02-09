const mongoose = require('mongoose');
const config = require('../config/database');

const InvitingCodeSchema = mongoose.Schema({
    code: {
        type: String
    },
    source: {
        type: String
    },
    used: {
        type: Boolean
    }
});

const InvitingCode = module.exports = mongoose.model('InvitingCode', InvitingCodeSchema);

module.exports.getValidationByInvitingCode = function(invCode, callback) {
    const query = {code: invCode};
    InvitingCode.findOne(query, callback);
}

module.exports.getCodeUsed = function(invCode, callback){
    InvitingCode.findByIdAndUpdate(invCode.id, {used: true}, callback);
}