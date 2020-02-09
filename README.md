# 高校区块链技术社区网站说明文档

---

## 目录

[toc]

## 服务器启动

1. 登录服务器

```js

ssh root@47.90.29.137

```

2. 启动数据库

```js
cd /usr/local/mongodb/mongodb-linux-x86_64-ubuntu1604-4.0.2/bin
nohup ./mongod &  // 不挂运行
```

3. 启动服务

```js
cd ~/P012-BTCU/btcu_web/server
nohup node server.js & // 不挂运行
```

4. 注意在当shell中提示了nohup成功后还需要按终端上键盘任意键退回到shell输入命令窗口，然后通过在shell中输入exit来退出终端

## 技术框架

此次项目开发采取了MERN框架，是一款基于JavaScript的全栈框架，即

> - 数据库：MongoDB
> - 前端：React
> - 后端：Node + Express
