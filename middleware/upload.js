const multer = require("multer");
const path = require('path');
const imageFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb("Please upload only images.", false);
  }
};

const __basedir = path.dirname(__filename);

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "/assets/uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, `${file.originalname}`);
  },
});
var uploadFile = multer({ storage: storage, fileFilter: imageFilter });
module.exports = uploadFile;