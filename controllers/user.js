var {
    sequelize
} = require("../config/db");

var User = sequelize.import("../models/user");
var Address = sequelize.import("../models/address");
var LoginInfo = sequelize.import("../models/loginInfo");
module.exports = {
    /**
     * 获取单个用户
     */
    getUserById: (req, res, next) => {
        User.getUserById(req.params.id).then(function (result) {
            res.json({
                status: 1,
                data: result
            });
        }).catch(next);
    },
    /**
     * 获取所有用户
     */
    getList: (req, res, next) => {
        User.getUsers({
            limit: parseInt(req.query.limit) || 10, //默认查询10条
            offset: parseInt(req.query.offset) || 0 //默认查询第一页
        }).then(function (result) {
            res.json({
                status: 1,
                data: result
            });
        }).catch(next);
    },
    /**
     * 新增
     */
    add: (req, res, next) => {
        User.create(req.body).then(function (user) {
            return user.createRole({
                roleName: req.body.roleName
            });
        }).then(function (result) {
            res.json({
                status: 1,
                data: result
            });
        }).catch(next);
    },
    /**
     * 修改
     */
    update: (req, res, next) => {
        User.updateUserById(req.body, req.params.id).then(function (result) {
            res.json({
                status: 1,
                data: result
            });
        }).catch(next);
    },
    /**
     * 删除
     */
    delete: (req, res, next) => {
        User.deleteById(req.params.id).then(function (result) {
            res.json({
                status: 1,
                data: result
            });
        }).catch(next);
    },
    /**
     * 查找用户的所有地址
     */
    getUserByAddress: (req, res, next) => {
        var user = User.build({
            id: req.params.id
        });
        user.getAddresses({
            // limit: 1,
            // offset: 1
            order: "id desc" //按照id倒排
        }).then(function (addresses) {
            res.json({
                status: 1,
                data: addresses
            });
        }).catch(next);
    },
    /**
     * 查询用户的登录信息
     */
    getLoginInfo: (req, res, next) => {
        User.findOne({
            where: {
                id: req.params.id
            },
            include: {
                model: LoginInfo
            }
        }).then(function (user) {
            res.json({
                status: 1,
                data: user
            });
        }).catch(next);
    },
    /**
     * 查询当前用户所有的角色
     */
    getRole: (req, res, next) => {
        var user = User.build({
            id: req.params.id
        });
        user.getUserRoles({
            order: "id desc"
        }).then(function (userRoles) {
            res.json({
                status: 1,
                data: userRoles
            });
        }).catch(next);
    }
}