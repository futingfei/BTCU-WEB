import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Register from './RegisterButton.jsx';
import WalletButton from './WalletButton.jsx';
import LoginAndWallet from './LoginAndWalletButton.jsx' 
import ContentPage from './ContentPage.jsx'
import LoginButton from './LoginButton.jsx'


const styles = theme => ({
  '@global': {
    body: {
      color:'#ffffff',
    },
  },
  appBar: {
    position: 'fixed',
    boxShadow: "none",
    backgroundColor:'transparent',
  },
  toolbarTitle: {
    flex: 1,
    color:'#ffffff',
  },
  layout: { 
    paddingBottom: theme.spacing.unit * 15,
    backgroundImage: `url('https://i.loli.net/2018/08/25/5b810c2dc3225.jpeg')`,
    backgroundAttachment: 'fixed',
    backgroundSize: '100% 100%',
    paddingBottom: theme.spacing.unit * 40,
  },
  layout2: {
    //高校组成以及蓝图
    // backgroundColor:'#05122b', //紫黑色
    backgroundColor:'#1d213c', //紫黑色
    // backgroundImage: `url('https://i.loli.net/2018/08/25/5b810c2dc3225.jpeg')`, 
    paddingTop: theme.spacing.unit * 7,
    paddingBottom: theme.spacing.unit * 7,
  },
  layout3: {
    //价值主张
    backgroundColor:'#272b47', //更浅的紫黑色
    paddingTop: theme.spacing.unit * 7 ,
    paddingBottom: theme.spacing.unit * 7 ,
  },
  layout4: {
    backgroundColor:'#16192f', //更深的紫黑色
    paddingTop: theme.spacing.unit * 7,
    paddingBottom: theme.spacing.unit * 7,
  },
  layout5: {
    backgroundColor:'#272b47', 
    color:"#0b91a5"
  },
  heroContent: {
    maxWidth: 1000,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
  },
  mainContent: {
    marginTop:theme.spacing.unit * 8,
    marginBottom:theme.spacing.unit * -8,
  },
  heroContent2: {
    maxWidth: 1200,
    paddingLeft: theme.spacing.unit * 12,
  },
  heroContent3: {
    maxWidth: 1200,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
    paddingLeft: theme.spacing.unit * 12,
  },
  footer: {
    marginTop: theme.spacing.unit * 8,
    borderTop: `1px solid ${theme.palette.divider}`,
    padding: `${theme.spacing.unit * 6}px 0`,
  },
  button:{
    size: 'large',
  },
  navbutton:{
    color: theme.palette.common.white,
  },
  subtitle:{
   color:'primary'
  },
  hr:{
    color:'#234008',
  },
  uequ:{
    marginTop:theme.spacing.unit * 5,
    color:"#1d64d6",
  },
  ziti:{
    color:"#1d64d6",
  },
  Divider:{
    color:'#272b47'
  }
});

class MainPage extends React.Component {

  handleScroll = () => {
    scroll({top:700,behavior:"smooth"});
  }

  render () {
    const { classes } = this.props;
    
    return (
      <React.Fragment>
      <CssBaseline /> 
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography variant="title"  noWrap className={classes.toolbarTitle}>
                ///
          </Typography>
          {/* <Button className={classes.navbutton}>社区介绍</Button> */}
          <Button className={classes.navbutton}>学习</Button>
          <Button className={classes.navbutton}>白皮书</Button>
          {/* <Login></Login> */}

          {/* 功能区 */}
          <LoginAndWallet></LoginAndWallet>
          {/* 功能区 */}

        </Toolbar>
      </AppBar>

      

      {/* 首页信息开始 */}  
      <main className={classes.layout}>
        <div className={classes.heroContent}>
          <div className={classes.mainContent}>
            <center>
              <img src="https://i.loli.net/2018/08/22/5b7d5bd315995.png" width={200} />
            </center>
            <Typography variant="title" align="center" color="inherit" style={{color:'#ffffff'}} component="p">
                高校区块链技术社区BTCU
            </Typography>
            <Typography variant="title" align="center" color="inherit" style={{color:'#ffffff'}} component="p">
               （Blockchain Technology Community of Universities）
            </Typography>
            <Typography variant="subheading" align="center" color="inherit" style={{color:'#ffffff'}} component="p">
              由来自清华大学、北京大学、中央财经大学、浙江大学、上海交通大学、复旦大学、中国人民大学、武汉大学、华中科技大学、南开大学、<br/>四川大学、山东大学、香港科技大学、香港大学等逾20所中国高校的学生区块链协会负责人、区块链爱好者社区负责人联合发起，意在组建高校间区块链技术学习、教育与产业交流的合作社区，属于非营利性、非官方、非法人性质、自发性的联合交流社群。
            </Typography>
            <br/><br/>
            <center>
              {/* <Button variant="contained" size="large" color="primary" className={classes.button} onClick={this.handleScroll} >
              了解更多
              </Button> */}
              <img src="https://i.loli.net/2018/09/02/5b8b81b4be510.png" alt="2dff07c7fcc620f27fb917b962e1a323.png"  onClick={this.handleScroll}  width={90} />
            </center>
          </div>
        </div>
      </main>
      {/* 首页信息结束 */}
      {/* 内容页 */}
      <ContentPage></ContentPage>
      {/* 内容页 */}
    </React.Fragment>
    )
  }


}

MainPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MainPage);
