import { GetAllDashboards, GetDashboard, SaveDashboard, DeleteDashboard } from '../modules/Dashboard';
import { GetAllSearches, GetSearch, SaveSearch, DeleteSearch } from '../modules/Discover';
import { GetAllVisualizations, GetVisualization, SaveVisualization, DeleteVisualization } from '../modules/Visualization';
import { GetAllComapnies, GetComapny, SaveComapny, DeleteCompany } from '../modules/Company';
import { Login, GetAllUsers, GetUser, SaveUser, DeleteUser, UpdateUser } from '../modules/Users';
import { GetAllNavigations, GetNavigation, SaveNavigation, DeleteNavigation } from '../modules/Navigation';
import { GetAllSettingss, GetSettings, SaveSettings, DeleteSetting } from '../modules/AppSettings';

// Login routes
app.post('/api/auth-login', Login);

// User routes
app.get('/api/get-users', GetAllUsers);
app.get('/api/get-user-details/:userId', GetUser);
app.get('/api/delete-user/:userId', DeleteUser);
app.post('/api/save-user', SaveUser);
app.post('/api/update-user', UpdateUser);

// Dashboard routes
app.get('/api/get-dashboards', GetAllDashboards);
app.post('/api/save-dashboard', SaveDashboard);
app.get('/api/get-dashboard/:dashboardId', GetDashboard);
app.get('/api/delete-dashboard/:dashboardId', DeleteDashboard);

// Search routes
app.get('/api/get-searches', GetAllSearches);
app.post('/api/save-search', SaveSearch);
app.get('/api/get-search/:searchId', GetSearch);
app.get('/api/delete-search/:searchId', DeleteSearch);

