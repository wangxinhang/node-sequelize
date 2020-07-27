var {
    sequelize
} = require("../config/db");
var User = sequelize.import("../models/user");
var LoginInfo = sequelize.import("../models/loginInfo");
module.exports = {
    /**
     * 获取所有地址（包括用户信息，不包括用户的话去掉include即可）
     */
    getList: (req, res, next) => {
        LoginInfo.findAll({
            include: [{
                model: User
            }]
        }).then(function (loginInfos) {
            res.json({
                status: 1,
                data: loginInfos
            });
        }).catch(next);
    },
    /**
     * 获取当前登录信息关联的用户信息
     */
    getUserInfo: (req, res, next) => {
        LoginInfo.findOne({
            where: {
                id: req.params.id
            },
            include: [User]
        }).then(function (loginInfo) {
            res.json({
                status: 1,
                data: loginInfo
            });
        }).catch(next);
    },
    /**
     * 删除
     */
    delete: (req, res, next) => {
        LoginInfo.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (result) {
            res.json({
                status: 1,
                data: result
            });
        }).catch(next);
    },
}