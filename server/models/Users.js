const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  url_image: { type: String, required: true },
  price: { type: Number, required: true },
  discount: { type: Number, required: true },
  category: { type: Number, required: true },
});

const UserModel = mongoose.model('empresas', UserSchema);
module.exports = UserModel;
