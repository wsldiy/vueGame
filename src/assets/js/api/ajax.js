import axios from 'axios';
import qs from 'qs';

var instance = axios.create({
  baseURL: 'http://wawatest.daniuyx.com/wawa/api/',
  timeout: 20000,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
});

const ajax = (url, params) => {
  return new Promise((resolve, reject) => {
    instance({
      url: url,
      method: 'post',
      data: qs.stringify(params)
    }).then(res => {
      if (JSON.parse(decryptByDES(res.data)).state === 'ok') {
        resolve(res);
      } else {
        throw res;
      }
    }).catch(err => {
      console.error(err);
      reject(err);
    })
  })
};

export default ajax;
