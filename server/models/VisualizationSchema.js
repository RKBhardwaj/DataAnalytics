const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define our dataset schema
const VisualizationSchema = new Schema({
  name: String,
  companyId: String,
  visState: String,
  searchStr: String,
  filters: String,
  dataSource: String,
});

// Export the Mongoose model
module.exports = VisualizationSchema;