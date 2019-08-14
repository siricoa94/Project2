var connection = require("../config/connection.js");


// Object for all our SQL statement functions.
var orm = {
  update: function(table, objColVals, condition, cb) {
    var queryString = "UPDATE " + table;

    queryString += " SET ";
    queryString += objToSql(objColVals);
    queryString += " WHERE ";
    queryString += condition;

    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  }
};
let newQty = data.balance + response.deposit;
connection.query("UPDATE savingsInput set balance=? where id=?", [newQty,response.balance], function (err, res) {
  if (err) throw err;
  console.log('Money Deposited ');
  // console.log();
  connection.end();
});
let newQty = data.balance - response.withdraw
connection.query("UPDATE savingsInput set balance=? where id=?", [newQty,response.balance], function (err, res) {
  if (err) throw err;
  console.log('Money Withdrawn ' + response.withdraw);
  // console.log();
  connection.end();
});