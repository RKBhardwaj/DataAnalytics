const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define our analysis schema
const mongooseObject = {
  name: String,
  description: String,
  companyId: String,
  type: String,
  createdDate: Date,
  lastModifiedDate: Date,
  softDelete: Boolean
};

const collectionObject = {
  collection: String
};

const AnalysisSchema = new Schema(mongooseObject, collectionObject);

module.exports = AnalysisSchema;