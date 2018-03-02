export const NAVIGATION_LIST = [{
  id: 'primary_1',
  primaryText: 'Workspace',
  leftIcon: '',
  initiallyOpen: true,
  primaryTogglesNestedList: true,
  nestedItems: [{
    id: 'secondary_1',
    primaryText: 'Discover',
    leftIcon: '',
    link: '/discover'
  }, {
    id: 'secondary_2',
    primaryText: 'Dashboard',
    leftIcon: '',
    link: '/dashboard'
  }, {
    id: 'secondary_3',
    primaryText: 'Visualization',
    leftIcon: '',
    link: '/visualization'
  }]
}, {
  id: 'primary_2',
  primaryText: 'Configuration',
  initiallyOpen: false,
  primaryTogglesNestedList: true,
  nestedItems: [{
    id: 'secondary_1',
    primaryText: 'Company',
    leftIcon: '',
    link: '/configure-company'
  }, {
    id: 'secondary_2',
    primaryText: 'User & Roles',
    leftIcon: '',
    link: '/configure-users'
  }, {
    id: 'secondary_3',
    primaryText: 'Navigation',
    leftIcon: '',
    link: '/configure-navigation'
  }, {
    id: 'secondary_4',
    primaryText: 'App Settings',
    leftIcon: '',
    link: '/app-settings'
  }]
}];
