const {Item} = require("../models")

class ControllerItem {
    static async getItems(req, res, next) {
        try {
            let getData=await Product.findAll({})
            res.status(200).json(getData)
        } catch (error) {
            next(error)
            
        }
    }
    static async addItems(req, res, next) {
        try {
            let {qty,price,OrderId,ProductId}=req.body

            let chooseItem=await Item.create({
                qty,
                price,
                OrderId,
                ProductId
            })
            res.status(200).json(chooseItem)
        } catch (error) {
    next(error)
    
}
}
}
module.exports = ControllerItem