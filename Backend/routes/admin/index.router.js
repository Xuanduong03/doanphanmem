const system = require("../../config/system");
const productRouter = require("./product.router");
const categoryRouter = require("./category.router");
const permissionRouter = require("./permission.router");
const accountRouter = require("./account.router");
module.exports = (app) => {
  const PATH_ADMIN = system.prefixAdmin;
  app.use(PATH_ADMIN + "/products", productRouter);
  app.use(PATH_ADMIN + "/categorys", categoryRouter);
  app.use(PATH_ADMIN + "/permissions", permissionRouter);
  app.use(PATH_ADMIN + "/accounts", accountRouter);
};
