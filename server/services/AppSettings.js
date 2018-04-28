const mongoose = require('mongoose');
const SettingsModel = mongoose.model('Settings');

class AppSettings {
  static getAllSettings() {
    return new Promise((resolve) => {
      resolve (
        SettingsModel.find({})
      )
    });
  }

  static getSetting(settingId) {
    return new Promise((resolve) => {
      resolve (
        SettingsModel.find({ _id: settingId })
      )
    });
  }

  static saveSetting(settingObj) {
    const setting = new SettingsModel({
      title: settingObj.title
    });
    return new Promise((resolve) => {
      resolve(
        Setting.save()
      )
    });
  }

  static deleteSetting(settingId) {
    return new Promise((resolve) => {
      resolve(
        SettingsModel.deleteOne({ _id: settingId })
      )
    });
  }
}

export default AppSettings;
