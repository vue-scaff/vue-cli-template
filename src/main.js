// Service Worker
import "./registerServiceWorker";

// Export Useage
export default (
  // App
  App,

  // Subscript Face
  { subscribe },

  // Runner
  next
) => {
  subscribe("util", config => {
    console.log("UTIL MODULE : ", config);
  });

  subscribe("route", config => {
    console.log("ROUTE CONFIGURE : ", config);

    config.mode = "history";
    config.base = process.env.publicPath;
  });

  subscribe("store", (config, model) => {
    config.getters = {
      sidebar: state => state.app.sidebar
    };
    console.log("STORE CONFIGURE : ", config);
  });

  subscribe("component", (config, model) => {
    config.prefix = "x";
  });

  subscribe("filter", (config, model) => {
    model.combination = value => `${value} Vue Scaff 123`;
  });

  subscribe("request", ({ data, headers }) => {
    data.token = "wechat: kazami500";
  });

  subscribe("response", config => {
    config.success = ({ data }) => data;
  });

  subscribe("custom", config => {
    return {
      author: "joenix"
    };
  });

  // Runner
  return next(App);
};
