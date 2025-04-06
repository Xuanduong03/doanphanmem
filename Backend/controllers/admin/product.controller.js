const productModel = require("../../models/products.module");
const categoryModel = require("../../models/categorys.model");
const createTree = require("../../helper/createTree");
const upload = require("../../helper/clouldDinary");
module.exports.index = async (req, res) => {
  let find = {
    deleted: false,
  };

  if (req.query.status) {
    if (req.query.status !== "all") {
      find.status = req.query.status;
    }
  }
  let sort = {};
  if (req.query.sortKey && req.query.sortValue) {
    sort[req.query.sortKey] = req.query.sortValue;
  } else {
    sort.position = "desc";
  }
  const products = await productModel.find(find).sort(sort);
  res.status(200).json(products);
};
module.exports.changeMulti = async (req, res) => {
  let find = {
    deleted: false,
  };
  if (req.query.status) {
    if (req.query.status !== "all") {
      find.status = req.query.status;
    }
  }
  let sort = {};
  if (req.query.sortKey && req.query.sortValue) {
    sort[req.query.sortKey] = req.query.sortValue;
  } else {
    sort.position = "desc";
  }
  const type = req.body.action;
  const data = req.body.selectedProduct;
  switch (type) {
    case "change-position":
      let update = false;
      for (const item of data) {
        const result = await productModel.updateOne(
          { _id: item.id },
          { position: Number(item.position) }
        );
        if (result.modifiedCount > 0) {
          update = true;
        }
      }
      if (!update) {
        res.status(400).json({
          status: "error",
          message: "Không có sản phẩm nào được cập nhật",
        });
        return;
      }
      const products = await productModel.find(find).sort(sort);
      res.status(200).json({
        status: "success",
        message: "Thay đổi vị trí thành công",
        products: products,
      });
      break;
    case "delete-all":
      let deleted = false;
      for (const item of data) {
        const result = await productModel.updateOne(
          { _id: item.id },
          { deleted: true }
        );
        if (result.modifiedCount > 0) {
          deleted = true;
        }
      }

      if (!deleted) {
        res.status(400).json({
          status: "error",
          message: "Không có sản phẩm nào được xóa",
        });
        return;
      }
      const product = await productModel.find(find).sort(sort);
      res.status(200).json({
        status: "success",
        message: "Xóa sản phẩm thành công",
        products: product,
      });
      break;
    case "active":
      let actived = false;
      for (const item of data) {
        const result = await productModel.updateOne(
          { _id: item.id },
          { status: type }
        );
        if (result.modifiedCount > 0) {
          actived = true;
        }
      }

      if (!actived) {
        res.status(400).json({
          status: "error",
          message: "Không có trạng thái sản phẩm nào được thay đổi",
        });
        return;
      }
      const product1 = await productModel.find(find).sort(sort);
      res.status(200).json({
        status: "success",
        message: "Thay đổi trạng thái sản phẩm thành công",
        products: product1,
      });
      break;
    case "inactive":
      let inactived = false;
      for (const item of data) {
        const result = await productModel.updateOne(
          { _id: item.id },
          { status: type }
        );
        if (result.modifiedCount > 0) {
          inactived = true;
        }
      }

      if (!inactived) {
        res.status(400).json({
          status: "error",
          message: "Không có trạng thái sản phẩm nào được thay đổi",
        });
        return;
      }
      const product2 = await productModel.find(find).sort(sort);
      res.status(200).json({
        status: "success",
        message: "Thay đổi trạng thái sản phẩm thành công",
        products: product2,
      });
      break;
  }
};

module.exports.changeStatus = async (req, res) => {
  let find = {
    deleted: false,
  };
  if (req.query.status) {
    if (req.query.status !== "all") {
      find.status = req.query.status;
    }
  }
  let sort = {};
  if (req.query.sortKey && req.query.sortValue) {
    sort[req.query.sortKey] = req.query.sortValue;
  } else {
    sort.position = "desc";
  }
  const id = req.body.productId;
  let status = req.body.status;
  let updated = false;
  status === "active" ? (status = "inactive") : (status = "active");
  const result = await productModel.updateOne({ _id: id }, { status: status });
  if (result.modifiedCount > 0) {
    updated = true;
  }
  if (!updated) {
    res.status(400).json({
      status: "error",
      message: "Không có trạng thái sản phẩm nào được thay đổi",
    });
    return;
  }
  const product = await productModel.find(find).sort(sort);
  res.status(200).json({
    status: "success",
    message: `Đã thay đổi trạng thái sản phẩm ${id}`,
    products: product,
  });
};
module.exports.create = async (req, res) => {
  let find = {
    deleted: false,
  };

  const categorys = await categoryModel.find(find);
  const newCategorys = createTree(categorys);
  res.status(200).json(newCategorys);
};
module.exports.createPost = async (req, res) => {
  const { image } = req.body;
  const countProduct = await productModel.countDocuments({});
  req.body.price = parseInt(req.body.price);
  req.body.discountPercentage = parseInt(req.body.discountPercentage);
  req.body.stock = parseInt(req.body.stock);
  if (!req.body.position) {
    req.body.position = parseInt(countProduct) + 1;
  }
  const base64Data = image.replace(/^data:image\/(png|jpeg|jpg);base64,/, ""); // Xử lý base64
  const buffer = Buffer.from(base64Data, "base64");
  req.body.thumbnail = await upload(buffer);
  const newProduct = new productModel(req.body);
  try {
    await newProduct.save();
    res.status(200).json({
      status: "success",
      message: "Thêm thành công 1 sản phẩm",
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: "Lỗi khi thêm sản phẩm",
    });
  }
};
