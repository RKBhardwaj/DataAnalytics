const mongoose = require('mongoose');
const Promise = require('promise');
const modelObj = mongoose.model('dashboard');

class Dashboard {
  static getAllDashboard() {
    return new Promise((resolve) => {
      resolve (
        modelObj.find({})
      )
    });
  }

  static getDashboard(dashId) {
    return new Promise((resolve) => {
      resolve (
        modelObj.find({ _id: dashId })
      )
    });
  }

  static saveDashboard(dashObj) {
    const dash = new modelObj({
      title: dashObj.title
    });
    return new Promise((resolve) => {
      resolve (
        dash.save()
      )
    });
  }
}

export default Dashboard;
