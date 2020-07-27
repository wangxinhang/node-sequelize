var {
    sequelize
} = require("../config/db");

var User = sequelize.import("../models/user");
var Address = sequelize.import("../models/address");
var LoginInfo = sequelize.import("../models/loginInfo");

module.exports = {
    /**
     * 新增一个地址
     */
    add: (req, res, next) => {
        console.log(req.body);
        var user = User.build({
            id: req.query.uid //改地址关联的用户id
        });
        user.createAddress(req.body).then(function (result) {
            res.json({
                status: 1,
                data: result
            });
        }).catch(next);
    },
    /**
     * 删除一个地址
     */
    delete: (req, res, next) => {
        Address.destroy({
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
    /**
     * 更新某个地址
     */
    update: (req, res, next) => {
        Address.update(req.body, {
            where: {
                id: req.params.id
            }
        }).then(function (address) {
            res.json({
                status: 1,
                data: address
            });
        }).catch(next);
    },
    /**
     * 获取所有地址（包括用户信息，不包括用户的话去掉include即可）
     */
    getList: (req, res, next) => {
        Address.findAll({
            include: [{
                model: User
            }]
        }).then(function (addresses) {
            res.json({
                status: 1,
                data: addresses
            });
        }).catch(next);
    },
    /**
     * 获取当前地址关联的用户信息   
     */
    getUserInfoByAddress: (req, res, next) => {
        Address.findOne({
            where: {
                id: req.params.id
            },
            include: [User]
        }).then(function (address) {
            res.json({
                status: 1,
                data: address
            });
        }).catch(next);
    }
}