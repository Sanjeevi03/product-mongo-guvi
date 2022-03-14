const mongo = require("../db");

module.exports.getData = async (req, res) => {
  const data = await mongo.db.collection("table").find().toArray();
  res.send(data);
};

module.exports.addData = async (req, res) => {
  const data = await mongo.db.collection("table").insertMany(req.body);
  res.send(data);
};

module.exports.between400to800 = async (req, res) => {
  const data = await mongo.db
    .collection("table")
    .find({ product_price: { $gt: 400, $lt: 800 } })
    .toArray();
  res.send(data);
};

module.exports.notbetween400to600 = async (req, res) => {
  const data = await mongo.db
    .collection("table")
    .find({ product_price: { $not: { $gt: 400, $lt: 600 } } })
    .toArray();
  res.send(data);
};

module.exports.fourGreaterThan500 = async (req, res) => {
  const data = await mongo.db
    .collection("table")
    .find({ product_price: { $gt: 500 } })
    .toArray();
  res.send(data);
};

module.exports.nameAndMaterial = async (req, res) => {
  const data = await mongo.db
    .collection("table")
    .find({ product_name: product_material })
    .toArray();
  res.send(data);
};

module.exports.tenthProductDetail = async (req, res) => {
  const data = await mongo.db.collection("table").find({ id: "10" }).toArray();
  res.send(data);
};
module.exports.softMaterialProduct = async (req, res) => {
  const data = await mongo.db
    .collection("table")
    .find({ product_material: "Soft" })
    .toArray();
  console.log(data);
  res.send(data);
};

module.exports.samecolorproduct = async (req, res) => {
  const data = await mongo.db
    .collection("table")
    .find({ product_color: "indigo" } && { product_price: "492.00" })
    .toArray();
  console.log(data);
  res.send(data);
};

module.exports.deletesameproductprice = async (req, res) => {
  const data = await mongo.db
    .collection("table")
    .remove({ product_price: product_price })
    .toArray();
  console.log(data);
  res.send(data);
};
