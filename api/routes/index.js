'use strict'

const express = require('express');
const api = express.Router();

/* Middlewares */
const {verifyAccountMoney, registerTransaction} = require("../middlewares");

/* Controllers */
const userController = require("../controllers/userController");
const transactionsController = require("../controllers/transactionsController");


/* USER ROUTES */
api.get("/users/:id", userController.getUserInfo);
api.get("/users/:id/transactions", userController.getAllTransactions);


/* TRANSACTIONS ROUTES */
// api.get("/users/transactions/:id", transactionsController.findTransaction);
api.post("/users/:id/debit", verifyAccountMoney, registerTransaction, transactionsController.postTransaction);



/** END ROUTES **/

module.exports = api;
