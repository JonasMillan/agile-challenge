const User = require("../models/user");


const getAllTransactions = (req, res) => {
    User.find().populate('transactions')
    .exec((error, result) => {
        if(error){
          res.status(500).send({messsage:'Server Internal Error.', error});
        }
        if(!result){
          res.status(404).send({messsage:'Transactions not found.'});
        }
        res.status(200).send({ result });
      });
} 



module.exports = {
  getAllTransactions,
}