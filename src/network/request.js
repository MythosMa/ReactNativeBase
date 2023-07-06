// 请求拦截器
const requestInterceptor = (url, options) => {
  return options;
};

// 响应拦截器
const responseInterceptor = response => {
  return response;
};

export const request = (url, options) => {
  options = requestInterceptor(url, options);
  return fetch(url, options)
    .then(response => {
      const modifiedResponse = responseInterceptor(response);
      if (modifiedResponse) {
        return modifiedResponse;
      }
      return response;
    })
    .catch(error => {
      return error;
    });
};
