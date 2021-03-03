const path = require('path');
const multer = require('multer');

let storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, path.join(__dirname, '../../public/img-db'));
        cb(null, path.join(__dirname, '../../public/img-slider'));
    },
    filename: function(req, file, cb) {
        cb(null, `product_${req.body.title.replace(/ /g,"_")}_${path.extname(file.originalname)}`);
    }
})

let upload = multer({storage: storage});

module.exports = upload;