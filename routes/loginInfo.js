var express = require('express');
var router = express.Router();

var loginInfo = require("../controllers/loginInfo");

/**
 * 获取所有地址（包括用户信息，不包括用户的话去掉include即可）
 */
router.get("/", loginInfo.getList);

/**
 * 获取当前登录信息关联的用户信息
 */
router.get("/:id/user", loginInfo.getUserInfo);

/**
 * 删除
 */
router.get("/:id/del", loginInfo.delete);

module.exports = router;