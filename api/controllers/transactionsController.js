
const { UpdateUserAmount } = require("../repository");

const postTransaction = async (req, res) => {
  const {amount} = req.body
  const {id} = req.params
  UpdateUserAmount(id, amount)
  res.status(200).send({ messsage: 'Done successfully' });
}


module.exports = {
    postTransaction
}