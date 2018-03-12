const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define our dataset schema
const CompanySchema = new Schema({
  name: String,
  companyId: String,
  timeCongiguration: String,
  dataSource: String,
  shortName: String,
});

// Export the Mongoose model
module.exports = CompanySchema;