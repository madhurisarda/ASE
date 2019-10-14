var mongoose = require('mongoose');

var CustomerSchema = new mongoose.Schema({
  CustID: String,
  CustName: String,
  CustEmail: String,
  /*description: String,
  published_year: String,
  publisher: String,
  updated_date: {type: Date, default: Date.now},*/
});
/**
 * @class Customer
 * @typeof Model<BookSchema>
 */
const Customer = mongoose.model('Customer',CustomerSchema);
module.exports = Customer;
