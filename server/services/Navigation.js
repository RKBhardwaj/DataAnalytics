const mongoose = require('mongoose');
const Promise = require('promise');
const modelObj = mongoose.model('navigation');

class Navigation {
  static getAllNavigation() {
    return new Promise((resolve) => {
      resolve (
        modelObj.find({})
      )
    });
  }

  static getNavigation(navId) {
    return new Promise((resolve) => {
      resolve (
        modelObj.find({ _id: navId })
      )
    });
  }

  static saveNavigation(navObj) {
    const nav = new modelObj({
      title: navObj.title
    });
    return new Promise((resolve) => {
      resolve (
        nav.save()
      )
    });
  }
}

export default Navigation;
