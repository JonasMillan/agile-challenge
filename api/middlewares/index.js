const { effectiveDate } = require("../commons/util");
const { verifyAmount, addRecord } = require("../repository");

const verifyAccountMoney = (req, res, next) => {
    const {amount} = req.body  
    const {id} = req.params
    const verify = verifyAmount(id, amount)
    verify ? next() : res.status(403).send({ messsage: 'Insufficient funds' });
}

const registerTransaction = (req, res, next) => {

    const {amount, cardType} = req.body
    const {id} = req.params
    
    const record = {
        userId: id,
        amount,
        cardType,
        effectiveDate: effectiveDate()
    }
    addRecord(record)
    next()
}

module.exports = {
    verifyAccountMoney,
    registerTransaction
}