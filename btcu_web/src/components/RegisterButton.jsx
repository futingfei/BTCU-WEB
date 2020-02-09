import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
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


class Register extends React.Component {
  constructor(props) {
    super(props);
    this.signUp = this.signUp.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleRealnameChange = this.handleRealnameChange.bind(this);
    this.handleSchoolChange = this.handleSchoolChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleInvCode = this.handleInvCode.bind(this);
    this.state = {
      username: '',
      realname: '',
        school: '',
         email: '',
      password: '',

      identity: '2',
      balance:  '10',
      invCode:'',

      msg:'',
      open: false,
    }
  }


  signUp(){
    var self = this;
    axios.post('/users/register',{
      username: this.state.username,
      realname: this.state.realname,
      password: this.state.password,
      school: this.state.school,
      email: this.state.email,
      identity: this.state.identity,
      balance: this.state.balance,
      invCode: this.state.invCode,
    })
    .then(function (responce){
      console.log(responce);
      self.setState({msg:responce.data.msg});
      if(responce.data.success){
        setTimeout(self.handleClose({},()=>{}),5000);
        // self.handleClose({},()=>{})
        // self.handleClose({},()=>{
        // });
      }
    })
    .catch(function (error){
      console.log(error);
    })
  }

  // componentDidMount(){
  //   setTimeout(this.setState({msg:'1234'}),3000);
  //   console.log(this.state.msg);
  // }



  handleInvCode(e){
    this.setState({invCode:e.target.value})
  }

  handleUsernameChange(e){
    this.setState({username:e.target.value})
  }

  handlePasswordChange(e){
    this.setState({password:e.target.value})
  }

  handleRealnameChange(e){
    this.setState({realname:e.target.value})
  }

  handleSchoolChange(e){
    this.setState({school:e.target.value})
  }

  handleEmailChange(e){
    this.setState({email:e.target.value})
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Button color="primary" variant="text" onClick={this.handleOpen} fullWidth >
          没有账号？点击注册
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
                  <Typography variant="headline">注册</Typography>
                  <Typography variant="body2">{this.state.msg}</Typography>
                  <form className={classes.form}>
                    <FormControl margin="normal" required fullWidth>
                      <InputLabel htmlFor="username">用户名</InputLabel>
                      <Input id="username" name="username"  autoComplete="username" autoFocus onChange={this.handleUsernameChange} />
                    </FormControl>
                    <FormControl margin="normal" required fullWidth>
                      <InputLabel htmlFor="realname">姓名</InputLabel>
                      <Input id="realname" name="realname"  autoComplete="realname" autoFocus onChange={this.handleRealnameChange} />
                    </FormControl>
                    <FormControl margin="normal" required fullWidth>
                      <InputLabel htmlFor="email">邮箱</InputLabel>
                      <Input id="email" name="email"  autoComplete="email" autoFocus onChange={this.handleEmailChange} />
                    </FormControl>
                    <FormControl margin="normal" required fullWidth>
                      <InputLabel htmlFor="school">学校</InputLabel>
                      <Input id="school" name="school"  autoComplete="school" autoFocus onChange={this.handleSchoolChange} />
                    </FormControl>
                    <FormControl margin="normal" required fullWidth>
                      <InputLabel htmlFor="invCode">邀请码</InputLabel>
                      <Input id="invCode" name="invCode"  autoComplete="invCode" autoFocus onChange={this.handleInvCode} />
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
                      onClick={this.signUp}
                    > 
                      注册
                    </Button>
                  </form>
                </Paper>
              </main>
            </React.Fragment>
      </Modal>
      </div>
    );
  }
}

Register.propTypes = {
  classes: PropTypes.object.isRequired
};

// We need an intermediary variable for handling the recursive nesting.
const SimpleModalWrapped = withStyles(styles)(Register);

export default SimpleModalWrapped;
