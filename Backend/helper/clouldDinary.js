const cloudinary = require("cloudinary").v2;
const streamifier = require("streamifier");
// Configuration
cloudinary.config({
  cloud_name: "dkjjo3mp3",
  api_key: "178253126415277",
  api_secret: "Qz4fbjHVX-5NTKkDS-f3Xox8xrE", // Click 'View API Keys' above to copy your API secret
});

function uploadImageToCloudinary(buffer) {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      { resource_type: "image" }, // Chỉ định tài nguyên là hình ảnh
      (error, result) => {
        if (error) {
          reject(error); // Nếu có lỗi, reject Promise
        } else {
          resolve(result); // Nếu thành công, resolve Promise với kết quả
        }
      }
    );

    // Tạo một stream từ buffer và pipe vào uploadStream
    streamifier.createReadStream(buffer).pipe(uploadStream);
  });
}

// Sử dụng hàm để tải ảnh lên Cloudinary

const upload = async (buffer) => {
  const result = await uploadImageToCloudinary(buffer); // image là đối tượng chứa buffer ảnh
  return result.url;
};

module.exports = upload;
