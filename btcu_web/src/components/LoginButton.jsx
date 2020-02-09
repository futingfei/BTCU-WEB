import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import RegisterButton from './RegisterButton.jsx'
import axios from 'axios';

const styles = theme => ({
  paper: {
    position: "absolute",
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4
  },
  layout: {
    width: 'auto',
    display: 'block', // Fix IE11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
});

class SimpleModal extends React.Component {
  constructor(props) {
    super(props);
    this.signIn = this.signIn.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.state = {
      username:'',
      password:'',
      isAuth:false,
      user: {
        id: 0,
        name: '',
        school:'',
        username: '',
        email: '',
        balance: 0,
      },
      msg:'',
      open: false,
    }
  }

  signIn(){
    var self = this;
    axios.post('/users/authenticate',{
      username: this.state.username,
      password: this.state.password
    })
    .then(function (responce){
      console.log(responce);
      self.setState({msg:responce.data.msg});
      if(responce.data.success){
        self.state.user = responce.data.user;
        self.handleIsAuthYes({},()=>{
        });
      }
    })
    .catch(function (error){
      console.log(error);
    })
  }
  

  handleUsernameChange(e){
    this.setState({username:e.target.value})
  }

  handlePasswordChange(e){
    this.setState({password:e.target.value})
  }

  handleIsAuthYes = () => {
    this.setState({isAuth:true},() => {
      this.props.transferMsg(
        this.state.isAuth,
        this.state.user,
      );
    })
  }
  
  handleIsAuthNo = () => {
    this.setState({isAuth:false},() => {
    })
  }

  handleOpen = () => {
    this.setState({open:true});
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Button color="inherit" variant="outlined" onClick={this.handleOpen}>
          登录/注册
        </Button>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
        <React.Fragment>
              <CssBaseline />
              <main className={classes.layout}>
                <Paper className={classes.paper}>
                  <Avatar className={classes.avatar}>
                    <LockIcon />
                  </Avatar>
                  <Typography variant="headline">登录 社区</Typography>
                  <Typography variant="body2" style={{color:"#05122b"}} >{this.state.msg}</Typography>
                  <form className={classes.form}>
                    <FormControl margin="normal" required fullWidth>
                      <InputLabel htmlFor="username">用户名</InputLabel>
                      <Input id="username" name="username"  autoComplete="username" autoFocus onChange={this.handleUsernameChange} />
                    </FormControl>
                    <FormControl margin="normal" required fullWidth>
                      <InputLabel htmlFor="password">密码</InputLabel>
                      <Input
                        name="password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        onChange={this.handlePasswordChange}
                      />
                    </FormControl>
                    <Button
                      fullWidth
                      variant="raised"
                      color="primary"
                      className={classes.submit}
                      onClick={this.signIn}
                    > 
                      登录
                    </Button>
                    <RegisterButton info={'还没注册账号？点击注册'} variantType={'text'}  isFullWidth={true} ></RegisterButton>
                  </form>
                </Paper>
              </main>
            </React.Fragment>
      </Modal>
      </div>
    );
  }
}

SimpleModal.propTypes = {
  classes: PropTypes.object.isRequired
};

// We need an intermediary variable for handling the recursive nesting.
const SimpleModalWrapped = withStyles(styles)(SimpleModal);

export default SimpleModalWrapped;
