const mongoose = require("mongoose");
const User = require("../models/user");
const Transaction = require("../models/transaction");
const { effectiveDate } = require("../commons/util");

const postTransaction = async (req, res) => {

    const transaction = new Transaction({
        transactionType:  req.body.transactionType,
        amount: req.body.amount,
        effectiveDate: effectiveDate()
    });

    if(!transaction.transactionType){
      res.status(400).send({ message: 'The Transaction transactionType is require.' });
    }else if(!transaction.amount){
      res.status(400).send({ message: 'The Transaction Amount is require.' });
    }else{
      if(transaction.transactionType === 'credit' || transaction.transactionType === 'debit'){
        let user = await User.find();
        user = user[0]
        
        if(user.acountMount >= transaction.amount){
          
          transaction.save(error => {
            if(error){
              res.status(500).send({ messsage: `Error on Transaction creation. ${error}` });
            }
            user.acountMount = user.acountMount - transaction.amount
            user.transactions.push(transaction._id)
            user.save(error => {
              if(error){
                res.status(500).send({ messsage: `Error on User Update. ${error}` });
              }
              res.status(200).send({ message: `Transaction save on User ${transaction}` });
            })
          })
        }else{
            res.status(401).send({ message: 'Transaction not Autorize' })
        }
      }else{
        res.status(400).send({ message: 'The Transaction transactionType needs to be credit or debit.' });
      } 
    }
  }

  const findTransaction = (req, res) => {
    const id = req.params.id

    if(!id){
      res.status(400).send({ messsage: 'The transaction Id is require.' });
    }
    if(!mongoose.Types.ObjectId.isValid(id)){
      res.status(400).send({ message: 'The transaction Id is not valid.' });
    }
  
    Transaction.findOne({_id:id})
    .exec((error, result) => {
      if(error){
        res.status(500).send({messsage:'Server Internal Error.', error});
      }
      if(!result){
        res.status(404).send({messsage:'Transaction not found.'});
      }
      res.status(200).send({ result });
    });
  
  }

module.exports = {
    postTransaction,
    findTransaction
}