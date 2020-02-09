import React from "react";
import LoginButton from './LoginButton.jsx'
import WalletButton from './WalletButton.jsx'

class LoginAndWallet extends React.Component {
    state = {
        isAuth:false,
        user: {
            id: 0,
            name: '',
            school:'',
            username: 'foo',
            email: '',
            balance: 0,
       },
    };

    transferMsg(isAuth,user) {
        this.setState({
            isAuth,
            user,
        });
    }

    render() {
        if(this.state.isAuth){
            return (
                <WalletButton user = {this.state.user} ></WalletButton>
            );
        }else{
            return (
                <LoginButton transferMsg = { (isAuth,user) => this.transferMsg(isAuth,user)} ></LoginButton>
            );
        }
    }
}

export default LoginAndWallet;
