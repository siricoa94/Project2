var connection = require("../config/connection.js");
var objectUser = require("../public/assets/js/openPage.js");


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
// router.get("/", function(req, res) {
//   cat.all(function(data) {
//     var hbsObject = {
//       cats: data
//     };
//     console.log(hbsObject);
//     res.render("index", hbsObject);
//   });
// });
console.log(objectUser)
connection.query('SELECT * FROM savings WHERE id=1', function (err, data) {
  console.log(data);
});





// connection.query("UPDATE savingsInput set balance=200 where id=1", function (err, res) {
//   if (err) throw err;
//   console.log('Money Deposited ');
//   // console.log();
//   connection.end();

// });
// let newQty = data.balance - response.withdraw
// connection.query("UPDATE savingsInput set balance=? where id=?", [newQty,response.balance], function (err, res) {
//   if (err) throw err;
//   console.log('Money Withdrawn ' + response.withdraw);
//   // console.log();
//   connection.end();
// });