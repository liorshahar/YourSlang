require("./connectDB");
const tvModels = require("../Models/TVshowsModels");

module.exports = query => {
  console.log(query);
  return tvModels.TVShowsModel.aggregate([{ $match: { tvshowname: query } }]);
};
