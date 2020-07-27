var express = require('express');
var router = express.Router();

var user = require("../controllers/user");

/**
 * 获取单个用户
 */
router.get('/:id', user.getUserById);

/**
 * 获取所有用户
 */
router.get('/', user.getList);

/**
 * 新增
 */
router.post('/', user.add);

/**
 * 修改
 */
router.post('/:id/update', user.update);

/**
 * 删除
 */
router.get('/:id/del', user.delete);

/**
 * 查找用户的所有地址
 */
router.get("/:id/addresses", user.getUserByAddress);

/**
 * 查询用户的登录信息
 */
router.get("/:id/logininfo", user.getLoginInfo);

/**
 * 查询当前用户所有的角色
 */
router.get("/:id/roles", user.getRole);

module.exports = router;