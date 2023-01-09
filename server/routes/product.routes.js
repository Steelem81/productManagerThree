const ProductController = require('../controllers/product.controller');

module.exports = (app) => {
    // app.get('/api/product', ProductController.index);
    app.post('/api/product', ProductController.createProduct);
    app.get('/api/products', ProductController.getAllProducts);
    app.get('/api/products/:id', ProductController.getOneProduct);
    app.put('/api/products/:id', ProductController.updateProduct);
    app.delete('/api/products/:id', ProductController.deleteProduct)
}