const development = {
  publicPath: "/",
  baseRoute: "/"
};

const production = {
  publicPath: "/",
  baseRoute: "/"
};

module.exports = {
  development,
  production
}[process.env.NODE_ENV];
