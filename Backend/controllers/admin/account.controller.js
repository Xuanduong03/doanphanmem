const accountModel = require("../../models/accounts.model");
const permissionModel = require("../../models/permissions.model");
module.exports.index = async (req, res) => {
  let find = {
    deleted: false,
    status: "active",
  };
  const accounts = await accountModel.find(find);
  for (const account of accounts) {
    const data = await permissionModel.findOne({ _id: account.role_id });
    account.role = data;
  }
  console.log(accounts);
  if (accounts.length > 0) {
    res.status(200).json(accounts);
  } else {
    res.status(404).json("Có lỗi");
  }
};
