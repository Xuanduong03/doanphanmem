const permissionModel = require("../../models/permissions.model");
module.exports.index = async (req, res) => {
  let find = {
    deleted: false,
  };
  const permissions = await permissionModel.find(find);
  if (permissions.length > 0) {
    res.status(200).json(permissions);
  } else {
    res.status(404).json("Có lỗi");
  }
};
