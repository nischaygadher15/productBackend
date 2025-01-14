import express from "express";
import {
  getAllProducts,
  getWithID,
  postProduct,
  putProduct,
  patchProduct,
  deleteProduct,
} from "../../Controllers/productController.js";

let route = express.Router();

route.get("/:id", getWithID);

route.get("/", getAllProducts);

route.post("/", postProduct);

route.put("/:id", putProduct);

route.patch("/:id", patchProduct);

route.delete("/:id", deleteProduct);

export default route;
