import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import axios from 'axios';


const styles = theme => ({
  layout: {
    // backgroundColor:'#1d213c', //紫黑色
    // color: theme.palette.common.white,
    width: 350,
  },
  navBar: {
    backgroundColor:'#7a8cd6',
  },
  navbutton:{
    color: theme.palette.common.white,
  },
  cardHeader: {
    backgroundColor: theme.palette.grey[200],
  },
  cardPricing: {
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing.unit * 2,
  },
  cardActions: {
    [theme.breakpoints.up('sm')]: {
      paddingBottom: theme.spacing.unit * 2,
    },
  },
  navtitle1:{
    color:"#077abc",
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2,
  },
  navtitle2:{
    color:"#758087",
  },
  walletContent:{
    paddingTop: theme.spacing.unit * 10,
    paddingBottom: theme.spacing.unit * 3,
    paddingLeft: theme.spacing.unit * 2,
    backgroundColor:"",
    color: theme.palette.common.black,
  },
  historyTop:{
    backgroundColor:"#bcc4d1"
  },
  historyContent:{
    paddingTop: theme.spacing.unit * 5,
    color: theme.palette.common.black,
  }
});

class TemporaryDrawer extends React.Component {
  constructor(props){
    super(props);
    this.Transfer = this.Transfer.bind(this);
    // this.handleFromUserChange = this.handleFromUserChange.bind(this);
    this.handleToUserChange = this.handleToUserChange.bind(this);
    this.handleAmountChange = this.handleAmountChange.bind(this);
    this.state = {
      fromuser : props.user.username,
      toUser : '',
      amount : 0,
      right:false,
      msg:'',
      balance:props.user.balance,
    }
  }

  handleAmountChange(e){
    this.setState({amount:e.target.value})
  }

  handleToUserChange(e){
    this.setState({toUser:e.target.value})
  }

  Transfer(){
    var self = this;
    axios.post('/users/transfer',{
      fromUser: this.state.fromuser,
      toUser: this.state.toUser,
      amount: this.state.amount
    })
    .then(function (responce){
      console.log(responce);
      self.setState({msg:responce.data.msg});
      self.setState({balance:responce.data.retNewFromUser.balance},()=>{
      });
    })
    .catch(function (error){
      console.log(error);
    })
  }

  toggleDrawer = (open) => () => {
    this.setState({
      right: open,
    });
  };

  render() {
    const { classes } = this.props;


    const sideList = (
      <main className={classes.layout} >
      <CssBaseline />
        <AppBar className={classes.navBar}>
          <Toolbar>
               <img src="https://i.loli.net/2018/09/02/5b8bae8058c75.png" alt="BTT.png" width={30} />
               
                <h2 className={classes.navtitle1} >BTCU WALLET</h2>
                <img src="https://i.loli.net/2018/09/03/5b8c969447fc1.png" alt="关闭.png" align='right' width={20} onClick={this.toggleDrawer(false)}  />
          </Toolbar>
        </AppBar>

        <div className={classes.walletContent}>
          <Typography variant="headline" color="textPrimary">
            {this.props.user.username}
          </Typography>
          <Typography variant="subheading" color="textPrimary">
            {this.props.user.school}
          </Typography>
          <Typography variant="subheading" color="textPrimary">
              账户 &nbsp; {this.props.user.id}
          </Typography>
          <br/>
          <Grid container spacing={8} alignItems="flex-end"  >
            <Grid item xs={6} >
              <Typography variant="subheading" color="textPrimary">
                {/* 余额 &nbsp; {this.props.user.balance} /BTT */}
                余额 &nbsp; {this.state.balance} /BTT
              </Typography>
            </Grid>
            <Grid item xs={6} >
            </Grid>
          </Grid>

          <form className={classes.form}>
            <Grid container spacing={8} alignItems="flex-end"  >
              <Grid item xs={6} >
                  <FormControl margin="normal" required fullWidth>
                    <InputLabel htmlFor="toUser">接收用户</InputLabel>
                    <Input id="toUser" name="toUser"  autoComplete="toUser" autoFocus onChange={this.handleToUserChange} />
                  </FormControl>
              </Grid>
              <Grid item xs={6} >
                  <FormControl margin="normal" required fullWidth>
                    <InputLabel htmlFor="amount">金额</InputLabel>
                    <Input id="amount" name="amount"  autoComplete="amount" autoFocus onChange={this.handleAmountChange} />
                  </FormControl>
              </Grid>
              <Grid item xs={6} >
                  <Button
                      fullWidth
                      variant="raised"
                      color="primary"
                      className={classes.submit}
                      onClick={this.Transfer}
                    > 
                      转账
                  </Button>
              </Grid>
              <Grid item xs={6} >
                <Typography variant="subheading" color="textPrimary">
                {this.state.msg}
                </Typography>
              </Grid>
           </Grid>
          </form>
        </div>
        <div className={classes.historyTop}>
          <center>
             <strong>HISTORY</strong> 
          </center>
        </div>
        {/* <div className={classes.historyContent} >
          <center>
            <strong>
              历史交易记录...
            </strong>
          </center>
        </div> */}
      </main>
    );

    return (
      <div>
        <Button className={classes.navbutton} onClick={this.toggleDrawer(true)}> 我的钱包 </Button>
        <Drawer anchor="right" open={this.state.right} >
          <div
            tabIndex={0}
            role="button"
          >
            {sideList}
          </div>
        </Drawer>
      </div>
    );
  }
}

TemporaryDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TemporaryDrawer);