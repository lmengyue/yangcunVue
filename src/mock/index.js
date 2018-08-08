const Mock = require('mockjs');

Mock.mock('/user/userInfo','get',require('./json/user'));