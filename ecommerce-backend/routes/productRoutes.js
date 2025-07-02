const express = require('express');
const router = express.Router();
const upload = require('../middleware/uploadMiddleware');
const auth = require('../middleware/authMiddleware');

const {
  getProducts,
  getProductById,
  createProduct,
  deleteProduct,
  updateProduct
} = require('../controllers/productController');

router.get('/', getProducts);
router.get('/:id', getProductById);
router.post('/', auth, upload.array('images', 5), createProduct);
router.put('/:id', auth, updateProduct);
router.delete('/:id', auth, deleteProduct); 

module.exports = router;
