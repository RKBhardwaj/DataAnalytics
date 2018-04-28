const mongoose = require('mongoose');
const Promise = require('promise');
const modelObj = mongoose.model('searches');

class Discover {
  static getAllSearch() {
    return new Promise((resolve) => {
      resolve (
        modelObj.find({})
      )
    });
  }

  static getSearch(searchId) {
    return new Promise((resolve) => {
      resolve (
        modelObj.find({ _id: searchId })
      )
    });
  }

  static saveSearch(searchObj) {
    const search = new modelObj({
      title: searchObj.title
    });
    return new Promise((resolve) => {
      resolve (
        search.save()
      )
    });
  }
}

export default Discover;
