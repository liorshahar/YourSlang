const express = require("express");
const router = express.Router();
const _ = require("underscore");
const getTvShow = require("../mongooseDB/Controller/getTvShow");
const getTvShowByName = require("../mongooseDB/Controller/getTvShowByName");

router.get("/", function(req, res) {
  getTvShow().then((err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
});

router.get("/:query", function(req, res) {
  let query = encodeURIComponent(req.params.query);
  console.log(query);
  getTvShowByName(query).then((err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
});

module.exports = router;
