const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define our dataset schema
const DatasetSchema = new Schema({
  name: String,
  companyId: String,
  filters: String,
  tableVis: String,
  softDelete: Boolean,
  createdDate: Date,
  lastModified: Date
});

// Export the Mongoose model
export default DatasetSchema;
