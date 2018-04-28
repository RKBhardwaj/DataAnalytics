const mongoose = require('mongoose');
const Promise = require('promise');
const modelObj = mongoose.model('visualization');

class Visualization {
  static getAllVisualization() {
    return new Promise((resolve) => {
      resolve (
        modelObj.find({})
      )
    });
  }

  static getVisualization(vizid) {
    return new Promise((resolve) => {
      resolve (
        modelObj.find({ _id: vizid })
      )
    });
  }

  static saveVisualization(visObj) {
    const vis = new modelObj({
      title: visObj.title
    });
    return new Promise((resolve) => {
      resolve (
        vis.save()
      )
    });
  }
}

export default Visualization;
