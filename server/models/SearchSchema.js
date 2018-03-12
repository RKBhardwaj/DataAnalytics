const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define our dataset schema
const SearchSchema = new Schema({
  name: String,
  companyId: String,
  searchStr: String,
  filters: String,
  dataSource: String
});

// Export the Mongoose model
module.exports = SearchSchema;