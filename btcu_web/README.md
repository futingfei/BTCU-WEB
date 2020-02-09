# 高校区块链技术社区网站开发文档

## 一、需求

### 运行

npm run watch

### 网站样例图

![网站样例图.jpg](https://i.loli.net/2018/08/12/5b6fc004d79dc.jpg)

现在需要完成的是网站一级开发工作，整个开发建设我预想分三个级别，一级开发只是需要有几个板块介绍一下社区的基本情况，理念啊资源啊团队啊联系我们等等，比较通用的模板即可，唯一需要附加实现的功能是一个注册接口，点进去进入一个表单完成成员注册，需要填写邀请码，邀请 码不符不能完成注册。还有一件事我希望完成的是，在注册后有一个引导页，引导其生成自己的公私钥地址，并填入自己的地址，并在数据库中将这个人与这个地址绑定，并给地址打入一定额度的咱们发的币

二级建设需要完成可上传下载资料的资料库，以及发布任务榜单，如果有必要还要建设论坛等。当然不属于短期必须

## 技术框架

**MERN**即Mongo/EXPRESS/React/Nodev

## 图片云地址

favicon   https://i.loli.net/2018/08/15/5b743d14e8749.png

small_logo https://i.loli.net/2018/08/15/5b74406a366c8.png

big_logo https://i.loli.net/2018/08/15/5b74406a37dfa.png

backgrounp.png https://i.loli.net/2018/08/16/5b745b1e37e92.png

bctu_logo_word.png https://i.loli.net/2018/08/22/5b7d54bc79ff6.png

https://i.loli.net/2018/08/22/5b7d5bd315995.png bctu_big_logo.png

![新大学.png](https://i.loli.net/2018/08/28/5b8526acf30b5.png)
![新大学2.png](https://i.loli.net/2018/08/28/5b852a54977f4.png)

![bctu_big_logo_xrvr.png](https://i.loli.net/2018/08/22/5b7d8189e1a72.png)
![bctu_big_logo_xrvr2.png](https://i.loli.net/2018/08/28/5b853d2f20d14.png)

undraw_data_report_bi6l.png https://i.loli.net/2018/08/25/5b81030f2610d.png

## 遗留问题

1.锚点链接的平滑跳转
2.忘记密码
3.点击登录后引导新用户到注册页面