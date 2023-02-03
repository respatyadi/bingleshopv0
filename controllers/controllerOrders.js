const {Order} = require("../models")

class ControllerOrder {
    static async getOrders(req, res, next) {
        try {
            let getData=await Order.findAll({})
            res.status(200).json(getData)
        } catch (error) {
            next(error)
            
        }
    }
    static async addOrders(req, res, next) {
        try {
            let {status,total,UserId}=req.body

            let chooseOrder=await Order.create({
                status,
                total,
                UserId
            })
            res.status(200).json(chooseOrder)
        } catch (error) {
    next(error)
    
}
}
}
module.exports = ControllerOrder