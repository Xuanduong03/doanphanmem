const mongoose = require("mongoose");

module.exports.connect = async (req, res) => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Kết nối thành công");
  } catch (error) {
    console.log("Lỗi kết nối");
  }
};
