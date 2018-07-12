import 'regenerator-runtime/runtime';
import React from 'react';
import ReactDOM from 'react-dom';
import {I18nextProvider} from 'react-i18next';
import axios from 'axios';
import {wixAxiosConfig} from 'wix-axios-config';
import i18n from './i18n';
import App from './components/App';

const baseURL = window.__BASEURL__;
const locale = window.__LOCALE__;
const staticsBaseUrl = window.__STATICS_BASE_URL__;

wixAxiosConfig(axios, {baseURL});

ReactDOM.render(
  <I18nextProvider i18n={i18n({locale, baseUrl: staticsBaseUrl})}>
    <App/>
  </I18nextProvider>,
  document.getElementById('root')
);
