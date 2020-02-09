const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/user');
const InvitingCode = require('../models/invitingCode');
// Register
router.post('/register', (req, res, next) => {

    let newUser = new User({
        username: req.body.username,
        realname: req.body.realname,
        school: req.body.school,
        email: req.body.email,
        password: req.body.password,
        identity: req.body.identity,
        balance: req.body.balance,
    });

    let username = newUser.username; //ftf
    let invCode = req.body.invCode;

    //ftf
    User.getUserByUsername(username, (err, retNewUser) => {
        if(err) throw err;
        if(retNewUser){
            return res.json({success:false,msg:'用户名已存在'});
        }else{
            InvitingCode.getValidationByInvitingCode(invCode, (err, retInvCode) => {
                if(err) throw err;
                if(!retInvCode) {
                    return res.json({success:false,msg:'验证码无效'});
                }
                if(retInvCode.used) {
                    return res.json({success:false,msg:'验证码已经被使用过'});
                }
                InvitingCode.getCodeUsed(retInvCode, (err, newInvCode) => {
                    User.addUser(newUser, (err, user) => {
                        if(err){
                            res.json({success:false,msg:'注册失败'});
                        } else{
                            res.json({success:true,msg:'注册成功'});
                        }
                    });
                });
            });
        }
    });
});


// Authenticate
router.post('/authenticate', (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;

    User.getUserByUsername(username, (err, user) => {
        if(err) throw err;
        if(!user){
            return res.json({success: false, msg: '此用户不存在'});
        }
        User.comparePassword(password, user.password, (err, isMatch) => {
            if(err) throw err;
            if(isMatch){
                // Bug Fixed 1 : user.toJSON() from user, because plain text is needed
                const token = jwt.sign(user.toJSON(), config.secret, {
                    expiresIn: 604800 // 1 week
                });
                res.json({
                    success: true,
                    // Bug Fixed 3 : 'bearer ' from 'JWT ', later is legacy and 4.0 version updated
                    token: 'bearer ' + token,
                    user: {
                         id: user._id,
                         name: user.name,
                         username: user.username,
                         email: user.email,
                         balance: user.balance,
                         school: user.school,
                    }
                });
            } else {
             return res.json({success: false, msg: '密码错误请重新输入'});
            }
        });
    });
});

//Transfer
router.post('/transfer', (req, res, next) => {
    const fromUser = req.body.fromUser;
    const toUser = req.body.toUser;
    const amount = parseFloat(req.body.amount);

    User.getUserByUsername(fromUser, (err, retFromUser) => {
        if(err) {
            res.json({success: false, msg: err});
            return ;
        }
        if(retFromUser.balance < amount) {
            res.json({success: false, msg: '余额不足！'});
            return ;
        }
        User.getUserByUsername(toUser, (err, retToUser) => {
            if(err) {
                res.json({success: false, msg: err});
                return ;
            }
            if(!retToUser) {
                res.json({success: false, msg: '账户不存在！'});
                return ;
            }

            // User.updateBalance(retFromUser, -amount, (err, retNewFromUser,) => {
            //     if(err) {
            //         res.json({success: false, msg: err});
            //         return ;
            //     }
            //     User.updateBalance(retToUser, amount, (err, retNewToUser) => {
            //         if(err) {
            //             res.json({success: false, msg: err});
            //             return ;
            //         }
            //     });
            // });

            //ftf
            User.updateBalance(retFromUser, -amount, (err, retNewFromUser) => {
                if(err) {
                    res.json({success: false, msg: err});
                    return ;
                }
                User.updateBalance(retToUser, amount, (err, retNewToUser) => {
                    if(err) {
                        res.json({success: false, msg: err});
                        return ;
                    }
                    res.json({
                        success: true, 
                        msg: "转账成功！",
                        retNewFromUser: {
                            id: retNewFromUser._id,
                            name: retNewFromUser.name,
                            username: retNewFromUser.username,
                            email: retNewFromUser.email,
                            balance: retNewFromUser.balance,
                            school: retNewFromUser.school,
                       }
                    });
                });
            });
            //ftf

        });
    });
});


module.exports = router;