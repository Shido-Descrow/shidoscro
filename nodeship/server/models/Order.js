const { default: mongoose } = require("mongoose");

const orderSchema = new mongoose.Schema({
 orderDate: {
  type: Date,
  required: true
 },
 productId: {
  type: String,
  required: true
 },
 merchantId: {
  type: String,
  required: true
 },
 status: {
  type: String,
  required: true
 },
 buyerId: {
  type: String,
  required: true
 },
 agreementId: String
 //delivery deadline
})

const Order = mongoose.model('Order',orderSchema)
module.exports = Order