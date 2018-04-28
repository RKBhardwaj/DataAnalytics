const mongoose = require('mongoose');
const Promise = require('promise');
const modelObj = mongoose.model('company');

class Company {
  static getAllCompanies() {
    return new Promise((resolve) => {
      resolve (
        modelObj.find({})
      )
    });
  }

  static getCompany(compId) {
    return new Promise((resolve) => {
      resolve (
        modelObj.find({ _id: compId })
      )
    });
  }

  static saveCompany(compObj) {
    const comp = new modelObj({
      title: compObj.title
    });
    return new Promise((resolve) => {
      resolve (
        comp.save()
      )
    });
  }
}

export default Company;
