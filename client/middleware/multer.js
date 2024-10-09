const multer = require('multer');

// Define storage options for multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // Directory where images will be saved
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname); // Add timestamp to filename
    }
});

// Create multer instance
const upload = multer({ storage: storage });

module.exports = upload;
