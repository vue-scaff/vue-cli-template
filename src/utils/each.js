export default (data, callback) =>
  Object.keys(data).map(key => callback(data[key], key));
