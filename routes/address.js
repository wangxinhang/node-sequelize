var express = require('express');
var router = express.Router();
var address = require("../controllers/address");

/**
 * 新增一个地址
 */
router.post("/add", address.add);

/**
 * 删除一个地址
 */
router.get("/:id/del", address.delete);

/**
 * 更新某个地址
 */
router.post("/:id/update", address.update);

/**
 * 获取所有地址（包括用户信息，不包括用户的话去掉include即可）
 */
router.get("/getList", address.getList);

/**
 * 获取当前地址关联的用户信息   
 */
router.get("/:id/user", address.getUserInfoByAddress);

module.exports = router;