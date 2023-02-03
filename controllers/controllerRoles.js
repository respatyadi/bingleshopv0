const {Role} = require("../models")

class ControllerRole {
    static async getRoles(req, res, next) {
        try {
            let getData=await Role.findAll({})
            res.status(200).json(getData)
        } catch (error) {
            next(error)
            
        }
    }
    static async addRoles(req, res, next) {
        try {
            let {roleName,UserId}=req.body

            let chooseRole=await Role.create({
                roleName,UserId
            })
            res.status(200).json(chooseRole)
        } catch (error) {
    next(error)
    
}
}
}
module.exports = ControllerRole