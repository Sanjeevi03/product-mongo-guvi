const express = require("express");
const cors = require("cors");
const mongo = require('./db');
const { addData, getData, between400to800, notbetween400to600, fourGreaterThan500, nameAndMaterial, tenthProductDetail,softMaterialProduct, samecolorproduct, deletesameproductprice } = require("./modules/module");

const app = express();
app.use(express.json());
app.use(cors());

mongo.connect();

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.post('/add',addData);

//1.Find all the information about each products
app.get('/get',getData);

//2.Find the product price which are between 400 to 800
app.get('/range400to800',between400to800)

//3.Find the product price which are not between 400 to 600
app.get('/notrange400to600',notbetween400to600)

//4.List the four product which are grater than 500 in price 
app.get('/greater-than-500',fourGreaterThan500)

//5.Find the product name and product material of each products -- not working
app.get('/name-and-material',nameAndMaterial)

//6.Find the product with a row id of 10
app.get('/:10',tenthProductDetail)

//7.Find only the product name and product material
app.get('/name-and-material',nameAndMaterial)

//8 Find all products which contain the value of soft in product material 


app.get('/soft',softMaterialProduct)
//9 Find products which contain product color indigo  and product price 492.00


app.get('/samecolorproduct',samecolorproduct)


//10 Delete the products which product price value are same


app.get("/deleteproductsameprice",deletesameproductprice)
// app.get()
app.listen(4000, () => {
  console.log("Server Started : 4000");
});


