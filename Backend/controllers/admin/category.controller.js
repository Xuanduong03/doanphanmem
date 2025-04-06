const categoryModel = require("../../models/categorys.model");
module.exports.index = async (req, res) => {
  let find = {
    deleted: false,
    status: "active",
  };
  const categorys = await categoryModel.find(find);
  if (categorys.length > 0) {
    res.status(200).json(categorys);
  } else {
    res.status(404).json("Có lỗi");
  }
};
