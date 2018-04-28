import { Router } from 'express';
import { GetAllDashboards, GetDashboard, SaveDashboard, DeleteDashboard } from '../modules/Dashboard';
import { GetAllSearches, GetSearch, SaveSearch, DeleteSearch } from '../modules/Discover';
import { GetAllVisualizations, GetVisualization, SaveVisualization, DeleteVisualization } from '../modules/Visualization';
import { GetAllComapnies, GetComapny, SaveComapny, DeleteCompany } from '../modules/Company';
import { Login, GetAllUsers, GetUser, SaveUser, DeleteUser, UpdateUser } from '../modules/Users';
import { GetAllNavigations, GetNavigation, SaveNavigation, DeleteNavigation } from '../modules/Navigation';
import { GetAllSettings, GetSettings, SaveSettings, DeleteSetting } from '../modules/AppSettings';

const AuthRoutes = Router();
// Login routes
AuthRoutes.post('/auth-login', Login);

const AppRoutes = Router();
// User routes
AppRoutes.get('/get-users', GetAllUsers);
AppRoutes.get('/get-user-details/:userId', GetUser);
AppRoutes.get('/delete-user/:userId', DeleteUser);
AppRoutes.post('/save-user', SaveUser);
AppRoutes.post('/update-user', UpdateUser);

// Dashboard routes
AppRoutes.get('/get-dashboards', GetAllDashboards);
AppRoutes.post('/save-dashboard', SaveDashboard);
AppRoutes.get('/get-dashboard/:dashboardId', GetDashboard);
AppRoutes.get('/delete-dashboard/:dashboardId', DeleteDashboard);

// Search routes
AppRoutes.get('/get-searches', GetAllSearches);
AppRoutes.post('/save-search', SaveSearch);
AppRoutes.get('/get-search/:searchId', GetSearch);
AppRoutes.get('/delete-search/:searchId', DeleteSearch);

// visualization routes
AppRoutes.get('/get-visualizations', GetAllVisualizations);
AppRoutes.post('/save-visualization', SaveVisualization);
AppRoutes.get('/get-visualization/:vizId', GetVisualization);
AppRoutes.get('/delete-visualization/:vizId', DeleteVisualization);

// company routes
AppRoutes.get('/get-companies', GetAllComapnies);
AppRoutes.post('/save-company', SaveComapny);
AppRoutes.get('/get-company-details/:companyId', GetComapny);
AppRoutes.get('/delete-company/:companyId', DeleteCompany);

// settings routes
AppRoutes.get('/get-AppRoutes-settings', GetAllSettings);
AppRoutes.post('/save-setting', SaveSettings);
AppRoutes.get('/get-setting/:settingId', GetSettings);
AppRoutes.get('/delete-setting/:settingId', DeleteSetting);

// navigation routes
AppRoutes.get('/get-navigations', GetAllNavigations);
AppRoutes.post('/save-navigation', SaveNavigation);
AppRoutes.get('/get-navigation/:navId', GetNavigation);
AppRoutes.get('/delete-navigation/:navId', DeleteNavigation);

export { AppRoutes, AuthRoutes };

