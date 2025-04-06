module.exports.generate = (length) => {
  let result = "";
  const String =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  for (let i = 0; i < length; i++) {
    result += String.charAt(Math.floor(Math.random() * String.length));
  }

  return result;
};
module.exports.generateOtp = (length) => {
  let result = "";
  const String = "0123456789";
  for (let i = 0; i < length; i++) {
    result += String.charAt(Math.floor(Math.random() * String.length));
  }

  return result;
};
