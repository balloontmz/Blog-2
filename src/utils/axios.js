import axios from 'axios';
import { message } from '../utils/tools';
import baseApi from './baseApi'
// import history from '../history';

axios.defaults.timeout = 5 * 10000;

axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.put['Content-Type'] = 'application/json';

axios.defaults.baseURL = baseApi;

// config request interceptors
let cancelFlag = true;
axios.interceptors.request.use(
  req => {
    // You can do something
    return req;
  },
  err => Promise.reject(err)
);

// config response interceptors
axios.interceptors.response.use(
  res => res.data,
  err => {
    message(err)
    return Promise.reject(err);
  }
);

// GET
export function GET(url, params) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, { params })
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
}

// POST
export function POST(url, params, config) {
  return new Promise((resolve, reject) => {
    axios
      .post(url, params, config)
      .then(
        res => {
          resolve(res);
        },
        err => {
          reject(err);
        }
      )
      .catch(err => {
        reject(err);
      });
  });
}

// PUT
export function PUT(url, params) {
  return new Promise((resolve, reject) => {
    axios
      .put(url, params)
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
}

// DELETE
export function DELETE(url, params) {
  return new Promise((resolve, reject) => {
    axios
      .delete(url, { data: params })
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
}
