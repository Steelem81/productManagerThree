const Product = require('../models/product.model.js');


module.exports.createProduct = (req, res) => {
    Product.create(req.body)
        .then(product => res.json(product))
        .catch(err => res.json(err));
}

module.exports.getAllProducts = (req, res) => {
    Product.find({})
        .then(product => res.json(product))
        .catch(err => res.json(err));
}

module.exports.getOneProduct = (req, res) => {
    Product.findOne({_id: req.params.id})
    .then(product => res.json(product))
    .catch(err => res.json(err))
}

module.exports.updateProduct = (req, res) => {
    Product.findByIdAndUpdate({_id: req.params.id}, req.body, {new:true})
    .then((updatedProduct) => res.json(updatedProduct))
    .catch((err) => res.json(err));
}

module.exports.deleteProduct = (req, res) => {
    Product.deleteOne({_id: req.params.id })
        .then((deletedProduct) => res.json(deletedProduct))
        .catch((err) => console.log(err));
}