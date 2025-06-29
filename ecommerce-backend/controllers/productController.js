const Product = require('../models/Product');

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product)
      return res.status(404).json({ message: 'Product not found' });

    res.json(product);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.createProduct = async (req, res) => {
  try {
    const { name, description, price } = req.body;
    const files = req.files;

    if (!name || !description || !price) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    if (!files || files.length === 0) {
      return res.status(400).json({ message: 'At least one image is required' });
    }

    const images = files.map(file => file.path); 

    const product = new Product({
      name,
      description,
      price,
      images
    });

    await product.save();

    return res.status(201).json({
      message: 'Product created successfully',
      product
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};


exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    if (product.images && product.images.length > 0) {
      product.images.forEach(imagePath => {
        const fullPath = path.join(__dirname, '..', imagePath);
        if (fs.existsSync(fullPath)) {
          fs.unlink(fullPath, err => {
            if (err) {
              console.error(`Failed to delete file: ${imagePath}`, err);
            }
          });
        }
      });
    }

    await product.deleteOne();

    res.json({ message: 'Product deleted successfully' });
  } catch (err) {
    console.error('Delete Error:', err);
    res.status(500).json({ message: 'Server Error' });
  }
};

