const express = require("express");
const router = express.Router();
const controller = require("../../controllers/admin/product.controller");
const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/upload");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + file.originalname;
    cb(null, uniqueSuffix);
  },
});
const upload = multer({ storage: storage });
router.get("/", controller.index);
router.patch("/change-multi", controller.changeMulti);
router.patch("/change-status", controller.changeStatus);
router.get("/create", controller.create);
router.post("/createPost", upload.single("image"), controller.createPost);
router.patch("/update/:id", upload.single("image"), controller.updatePatch);
router.get("/detail/:id", controller.update);
router.patch("/delete/:id", controller.delete);
module.exports = router;
