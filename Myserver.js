const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const SECRET_KEY = "mysecretkey123";
const cors = require("cors");
const productController = require("./controllers/productController");
const customerRegController = require("./controllers/customerRegController");
const customerOrderController = require("./controllers/customerOrderContoller");
const adminController = require("./controllers/adminController");
const Customer = require("./models/customerReg");
const Admin = require("./models/admin");

const app = express();
const port = 4000;

mongoose
  .connect("mongodb://localhost:27017/mytestdb")
  .then(() => {
    console.log("connected to database");
  })
  .catch((err) => console.log(err));

app.use(express.json());
app.use(cors());
// Keep login routes before all protected/catalog routes so auth pages always reach them.
app.post("/adminlogin", adminController.loginAdmin);
app.post("/admin-login", adminController.loginAdmin);
app.post("/adminregister", adminController.registerAdmin);
app.post("/admin-register", adminController.registerAdmin);

function verifyToken(req, res, next) {
  const bearerHeader = req.headers["authorization"];
  if (!bearerHeader) {
    return res.status(403).json({ message: "Token Required" });
  }

  const token = bearerHeader.split(" ")[1];
  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Invalid Token" });
    }
    req.user = decoded;
    next();
  });
}

async function verifyCustomerToken(req, res, next) {
  try {
    if (!req.user?.id) {
      return res.status(403).json({ message: "Customer token required" });
    }

    const customer = await Customer.findById(req.user.id).select("_id email name");
    if (!customer) {
      return res.status(403).json({ message: "Customer not found" });
    }

    req.customer = customer;
    next();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

async function verifyAdminToken(req, res, next) {
  try {
    if (!req.user?.email) {
      return res.status(403).json({ message: "Admin token required" });
    }

    const admin = await Admin.findOne({ email: req.user.email }).select("_id email name");
    if (!admin) {
      return res.status(403).json({ message: "Admin not found" });
    }

    req.admin = admin;
    next();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

app.use("/uploads", express.static("uploads"));
app.use("/productimages", express.static("productimages"));
app.get("/verify-user", verifyToken, verifyCustomerToken, (req, res) => {
  res.json({ status: "1", user: req.customer });
});

app.get("/verify-admin", verifyToken, verifyAdminToken, (req, res) => {
  res.json({ status: "1", admin: req.admin });
});
app.get("/products", productController.getAllProducts);
app.post("/products", productController.createProduct);
app.patch("/products/:id", productController.updateProduct);
app.delete("/products/:id", productController.deleteProduct);
app.get("/products/:id", productController.getProductById);
app.post("/register", customerRegController.registerUser);
app.post("/loginuser", customerRegController.loginUser);
app.post("/placeorder", verifyToken, verifyCustomerToken, customerOrderController.createOrder);
app.get("/placeorder", customerOrderController.getAllOrders);
app.patch("/placeorder/:id/status", verifyToken, verifyAdminToken, customerOrderController.updateOrderStatus);
app.patch("/placeorder/:id/cancel", verifyToken, verifyCustomerToken, customerOrderController.cancelOrderByUser);


app.get("/userorders", customerOrderController.getUserOrders);
app.get("/viewOrderByCustID/:id", verifyToken, verifyCustomerToken, customerOrderController.viewOrderByCustID);
app.get("/checkorders", verifyToken, verifyAdminToken, customerOrderController.getCheckOrders);

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});





