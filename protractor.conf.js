import {app, start} from './test/environment';

exports.config = {
  onPrepare() {
    browser.ignoreSynchronization = true;
    browser.baseUrl = app.getUrl();
    return start();
  }
};
