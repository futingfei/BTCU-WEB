import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

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
    color:"#0b91a5",
    paddingLeft:theme.spacing.unit * 2,
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




function ContentPage(props) {
  const { classes } = props;

  return (
    <React.Fragment>
    
      {/* 社团组成开始 */}
      <main className={classes.layout2} >
        <div className={classes.heroContent2}>
          <Grid container spacing={24} >
            <Grid item xs={6} >
                <img src="https://i.loli.net/2018/09/01/5b8a578738819.png" alt="新大学2.png" align='center'  />
            </Grid>
            <Grid item xs={5} >
                <div style={{ color:'#ffffff'}}>
                  <br/><br/>
                  <h1 style={{ textAlign:'right'}} >超过万名学生爱好者的 <br/> 技术交流社区</h1>
                  <h4 style={{ textAlign:"right"}} >高校官方注册的学生社团：13 个</h4>
                  <h4 style={{ textAlign:"right"}} >已提交注册申请的拟建学生社团：10 个</h4>
                </div>
            </Grid>
          </Grid>
        </div>
      </main> 
      {/* 社团组成结束*/}

      {/* 价值主张开始 */}
      <main className={classes.layout3}>
        <div className={classes.heroContent2} >
          <Grid container spacing={40} className={classes.card} style={{color:'#ffffff'}} >
            <Grid item xs={3}>
                <br/><br/><br/><br/><br/>
                <h2>人才导向</h2>
                <h4>致力于高校区块链技术普及与人才培养</h4>
                <h4 className={classes.ziti} >人才培养与分级考核方案 👉</h4>
            </Grid>
            <Grid item xs={3}>
              <h1>价值主张</h1>
              <br/>
              <h2>社区驱动</h2>
              <h4>致力于社区良性生态构建 </h4>  
              <h4 className={classes.uequ} >社区成员与出入机制 👉</h4>
            </Grid>
            <Grid item xs={3}>
              <br/><br/><br/><br/><br/>
              <h2>协作自治</h2>
              <h4>致力于以生态通证体系建立社区分布式协作治理机制</h4>
              <h4 className={classes.ziti} >通证激励模型 👉</h4>
            </Grid>
            <Grid item xs={3} >
              <img src="https://i.loli.net/2018/08/28/5b853d2f20d14.png" alt="bctu_big_logo_xrvr2.png" title="bctu_big_logo_xrvr2.png" />
            </Grid>
          </Grid>
        </div>
      </main>
      {/* 价值主张结束 */}

      {/* 社区蓝图开始 */}
      <main className={classes.layout2}>
        <div className={classes.heroContent2}>
          <Grid container spacing={24} >
            <Grid item xs={6}>
              {/* 星云 */}
               <img src="https://i.loli.net/2018/08/28/5b8532ffdd470.png" alt="undraw_data_report_bi6l.png" title="undraw_data_report_bi6l.png" width={450} align='left' />
            </Grid>
            <Grid item xs={6} >
                <div style={{ color:'#ffffff'}}>
                  <h1>蓝图</h1>
                  <br/>
                  <h3>社区建设的时间表计划，进一步了解社区发展目标与愿景</h3>
                  <br/>
                  <Button variant="contained" size="large" color="primary"  >
                  发展路线图
                  </Button>
                </div>
            </Grid>
          </Grid>
        </div>
      </main>
      {/* 社区蓝图结束 */}

      {/* Footer */}
      <footer className={classes.layout4}>
        <Grid container spacing={8}>
          <Grid item xs={4}>
            <img src="https://i.loli.net/2018/08/22/5b7d54bc79ff6.png" alt="底部logo" align='right' width={200} />
          </Grid>
          <Grid item xs={1} >
          </Grid>
          <Grid item xs={2} >
                <h3>联系我们</h3>
                <h5>邮箱: univbc@163.com</h5>
                <h5>关注公众号</h5>
                <img src="https://i.loli.net/2018/08/22/5b7d884a8e46f.png" alt="orwzma.png" title="orwzma.png" width={100} />
          </Grid>
          <Grid item xs={5} >
                <h3>部分成员社团微信公众号</h3>
                <h5>清华大学学生区块链协会（BATS）   &nbsp;公众号微信号：THUblockchain</h5>
                <h5>中财“繁星”区块链研究协会       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   微信公众号：中财繁星</h5>
                <h5>浙江大学区块链协会（ZJUBCA）   &nbsp;&nbsp;  公众号微信号：ZJUBCA</h5>
                <h5>浙江大学区块链俱乐部（BitHacks） 公众号微信号：BItHacks</h5>
          </Grid>
        </Grid>
        
      </footer>
      <div className={classes.layout5} >
            <Grid container spacing={8} >
              <Grid item xs={5}  >
                 ©️ BTCU. ALL RIGHTS RESERVE
              </Grid>
              <Grid item xs={7} >
                Designed by 清华大学学生区块链协会 Developed & Deployed by 中财“繁星”区块链研究协会
              </Grid>
            </Grid>
      </div>
      {/* End footer */}
    </React.Fragment>
   
  );
}

ContentPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContentPage);