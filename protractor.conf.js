import {app, start} from './test/environment';
require('wix-eyes-env');

exports.config = {
  onPrepare() {
    browser.ignoreSynchronization = true;
    browser.baseUrl = app.getUrl();
    return start();
  }
};
