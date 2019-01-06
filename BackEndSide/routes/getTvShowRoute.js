const express = require("express");
const router = express.Router();
const _ = require("underscore");
const getTvShow = require("../mongooseDB/Controller/getTvShow");
const getTvShowById = require("../mongooseDB/Controller/getTvShowById");

router.get("/", function(req, res) {
  getTvShow().then((result, err) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

router.get("/:query", function(req, res) {
  getTvShowById(req.params.query).then((result, err) => {
    console.log(req.params.query);
    if (err) {
      res.send(err);
    } else {
      let dataObject = {
        tvshowname: result.tvshowname,
        sentencesArray: []
      };

      result.sentences.forEach(item => {
        dataObject.sentencesArray.push({
          text: item.text,
          tweetCount: item.tweets.length
        });
      });
      res.send(dataObject);
    }
  });
});

module.exports = router;
