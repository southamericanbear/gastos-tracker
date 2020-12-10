// get all transactions
//  /api/v1/transactions
// access Public
exports.getTransactions = (req, res, next) => {
  res.send("get transactions");
};

// add  transactions
//  POST /api/v1/transactions
// access Public
exports.addTransactions = (req, res, next) => {
  res.send("post transactions");
};

// delete transactions
//   DELETE /api/v1/transactions/:id
// access Public
exports.deleteTransactions = (req, res, next) => {
  res.send("delete transactions");
};
