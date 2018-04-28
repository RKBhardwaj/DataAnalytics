const mongoose = require('mongoose');

import AnalysisSchema from './AnalysisSchema';
import CompanySchema from './CompanySchema';
import DashboardSchema from './DashboardSchema';
import DatasetSchema from './DatasetSchema';
import NavigationSchema from './NavigationSchema';
import SearchSchema from './SearchSchema';
import UserSchema from './UserSchema';
import VisualizationSchema from './VisualizationSchema';
import SettingsSchema from './SettingsSchema';

mongoose.model('Analysis', AnalysisSchema);
mongoose.model('company', CompanySchema);
mongoose.model('dashboard', DashboardSchema);
mongoose.model('Dataset', DatasetSchema);
mongoose.model('navigation', NavigationSchema);
mongoose.model('searches', SearchSchema);
mongoose.model('users', UserSchema);
mongoose.model('visualization', VisualizationSchema);
mongoose.model('Settings', SettingsSchema);
