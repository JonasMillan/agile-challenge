'use strict'

const express = require('express');
const api = express.Router();

//Middleware de autenticacion basada en token
// const auth = require("../middlewares/auth");

/* Controllers */
const userController = require("../controllers/userController");
const transactionsController = require("../controllers/transactionsController");


/* USER ROUTES */
api.get("/users/transactions", userController.getAllTransactions);

/* TRANSACTIONS ROUTES */
api.get("/users/transactions/:id", transactionsController.findTransaction);
api.post("/tansaction", transactionsController.postTransaction);
/* AFFILLIATES ROUTES */


/** END ROUTES **/

module.exports = api;
