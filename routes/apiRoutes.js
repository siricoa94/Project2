var db = require("../models");
module.exports = function(app) {
  app.get("/api/savings", function(req, res) {
    db.savingsInput.findAll({
      include: [db.savings]
    }).then(function(dbsavings) {
      res.json(dbsavings);
    });
  });
  app.get("/api/savings/:balance", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.savingsInput.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Post]
    }).then(function(dbAuthor) {
      res.json(dbAuthor);
    });
  });
  app.post("/api/authors", function(req, res) {
    db.Author.create(req.body).then(function(dbAuthor) {
      res.json(dbAuthor);
    });
  });
  app.delete("/api/authors/:id", function(req, res) {
    db.Author.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbAuthor) {
      res.json(dbAuthor);
    });
  });
};