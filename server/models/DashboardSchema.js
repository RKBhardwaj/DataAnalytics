const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define our dataset schema
const DashboardSchema = new Schema({
  name: String,
  companyId: String,
  panels: String,
  searchStr: String,
  filters: String,
  options: String,
  saveTime: Boolean,
  dashboardTime: String
});

// Export the Mongoose model
export default DashboardSchema;
