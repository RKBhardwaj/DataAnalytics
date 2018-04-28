const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define our analysis schema
const AnalysisSchema = new Schema({
  name: String,
  description: String,
  companyId: String,
  type: String,
  createdDate: Date,
  lastModifiedDate: Date,
  softDelete: Boolean
});

export default AnalysisSchema;
