import Config from 'react-native-config';

// 请求拦截器
const requestInterceptor = (url, options) => {
  url = Config.API_URL + url;
  return {url, options};
};

// 响应拦截器
const responseInterceptor = response => {
  return response;
};

export const request = (api, payload) => {
  let url = api.url;
  let options = {
    headers: {'content-type': 'application/json'},
    method: api.method,
  };
  if (payload) {
    if (payload.body) {
      options = {...options, body: JSON.stringify(payload.body)};
    }
    if (payload.params) {
      let paramsStr = Object.keys(payload.params)
        .map(key => {
          return `${key}=${payload.params[key]}`;
        })
        .join('&');
      if (paramsStr) {
        url = url + '?' + paramsStr;
      }
    }
  }
  const {url: newUrl, options: newOptions} = requestInterceptor(url, options);

  return fetch(newUrl, newOptions)
    .then(response => {
      return response.json();
    })
    .then(response => {
      const modifiedResponse = responseInterceptor(response);
      if (modifiedResponse) {
        console.log('response========================');
        console.log(response);
        console.log(response.code);
        console.log('response========================');
        return modifiedResponse;
      }
      return response;
    })
    .catch(error => {
      console.log('error========================');
      console.log(error);
      console.log('error========================');
      return error;
    });
};
