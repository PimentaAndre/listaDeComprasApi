'use strict'

const mongoose = require('mongoose');
const Product = mongoose.model('Product');

exports.get = async () => {
    const res = await Product.find({}, 'name price superMarkets');

    return res;
}


exports.getById = async (id) => {
    const res = await Product
        .findById(id);
    return res;
}

// exports.getByTag = async(tag) => {
//     const res = Product
//         .find({
//             tags: tag,
//             active: true
//         }, 'title description price slug tags');
//     return res;
// }

exports.create = async (data) => {
    var product = new Product(data);
    await product.save();
    return product
}

exports.update = async (id, data) => {
    await Product
        .findByIdAndUpdate(id, {
            $set: {
                name: data.name,
                description: data.description,
                price: data.price,
                slug: data.slug
            }
        });
}

exports.delete = async (id) => {
    await Product
        .findOneAndRemove({ _id: id });
}