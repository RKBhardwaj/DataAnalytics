const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define our dataset schema
const NavigationSchema = new Schema({
  name: String,
  companyId: String,
  navigations: String
});

// Export the Mongoose model
module.exports = NavigationSchema;