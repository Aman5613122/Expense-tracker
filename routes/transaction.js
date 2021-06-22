const express = require("express");
const router = express.Router();
const TransactionController = require("../controllers/transaction");

router.get("/get",TransactionController.getTransaction);

router.post("/add",TransactionController.addTransaction);

router.delete("/:id",TransactionController.deleteTransaction);

module.exports = router;