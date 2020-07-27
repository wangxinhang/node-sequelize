var {
    sequelize,
    Sequelize
} = require("../config/db");

var User = sequelize.import("../models/user");
var Role = sequelize.import("../models/role");
module.exports = {
    /**
     * 获取所有角色（包括用户信息，不包括用户的话去掉include即可）
     */
    getList: (req, res, next) => {
        Role.findAll({
            include: [{
                model: User
            }]
        }).then(function (roles) {
            res.json({
                status: 1,
                data: roles
            });
        }).catch(next);
    },
    /**
     * 获取当前登录信息关联的用户信息
     */
    getUserInfo: (req, res, next) => {
        Role.findOne({
            where: {
                id: req.params.id
            },
            include: [User]
        }).then(function (role) {
            res.json({
                status: 1,
                data: role
            });
        }).catch(next);
    },
    /**
     * 删除
     */
    delete: (req, res, next) => {
        Role.destroy({
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
     * 新增一个角色
     */
    add: (req, res, next) => {
        Role.create(req.body).then(function (role) {
            res.json({
                status: 1,
                data: role
            })
        }).catch(next);
    },
    /**
     * 更新角色
     */
    update: (req, res, next) => {
        Role.update(req.body, {
            where: {
                id: req.params.id
            }
        }).then(function (role) {
            res.json({
                status: 1,
                data: role
            })
        }).catch(next);
    }
}