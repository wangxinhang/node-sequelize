var express = require('express');
var router = express.Router();

var role = require("../controllers/role");

/**
 * 获取所有角色（包括用户信息，不包括用户的话去掉include即可）
 */
router.get("/", role.getList);

/**
 * 获取当前登录信息关联的用户信息
 */
router.get("/:id/user", role.getUserInfo);

/**
 * 删除
 */
router.get("/:id/del", role.delete);

/**
 * 新增一个角色
 */
router.post("/", role.add);

/**
 * 更新角色
 */
router.post("/:id/update", role.update);

module.exports = router;