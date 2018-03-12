const mongoose = require('mongoose');

const AnalysisSchema = require('./AnalysisSchema');
const CompanySchema = require('./CompanySchema');
const DashboardSchema = require('./DashboardSchema');
const DatasetSchema = require('./DatasetSchema');
const NavigationSchema = require('./NavigationSchema');
const SearchSchema = require('./SearchSchema');
const UserSchema = require('./UserSchema');
const VisualizationSchema = require('./VisualizationSchema');

mongoose.model('Analysis', AnalysisSchema, 'analysis');
mongoose.model('company', CompanySchema);
mongoose.model('dashboard', DashboardSchema);
mongoose.model('Dataset', DatasetSchema, 'datasetList');
mongoose.model('navigation', NavigationSchema);
mongoose.model('searches', SearchSchema);
mongoose.model('users', UserSchema);
mongoose.model('visualization', VisualizationSchema);