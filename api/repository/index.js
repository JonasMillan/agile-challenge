const {UsersAccounts, Transactions} = require("../models");

// USERS REPOSITORY
const showUser = (id) => UsersAccounts.find(account => account.id === id)

const UpdateUser = (user) =>{
    const index = UsersAccounts.findIndex( account => account.id === user.id)
    UsersAccounts[index] = user
}

const UpdateUserAmount = (id, amount) => {
    const UserAccount = showUser(id)
    const newAmount = UserAccount.acountMount - amount
    UserAccount.acountMount = newAmount
    UpdateUser(UserAccount)
}

const verifyAmount = (id, amount) => showUser(id).acountMount >= amount


// TRANSACTIONS REPOSITORY
const addRecord = (record) => Transactions.push(record)

module.exports = {
    showUser,
    UpdateUser,
    UpdateUserAmount,
    verifyAmount,
    addRecord
}