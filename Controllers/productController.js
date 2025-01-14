import product from "../Data/amazonproducts.js";
let productArr = [...product];

let checkID = (req, res) => {
  let filtered = productArr.filter((p) => p.id == req.params.id);
  if (filtered.length <= 0) {
    res.write(`<p>Product with id: ${req.params.id} not found.</p>`);
    res.send();
    return false;
  } else {
    return filtered;
  }
};

let getWithID = (req, res) => {
  if (checkID(req, res)) {
    res.json(checkID(req, res));
  }
};

let getAllProducts = (req, res) => {
  res.write(`<p>Product Array: ${JSON.stringify(productArr)}</p>`);
  res.send();
};

let postProduct = (req, res) => {
  productArr.push({ ...req.body, id: productArr.length + 1 });
  res.write(`<p>Product added successfully.</p>`);
  res.send();
};

let putProduct = (req, res) => {
  if (checkID(req, res)) {
    productArr[req.params.id - 1] = { ...req.body };
    res.write(`<p>Product updated successfully.</p>`);
    res.send();
  }
};

let patchProduct = (req, res) => {
  if (checkID(req, res)) {
    Object.assign(productArr[req.params.id - 1], req.body);
    res.write(`<p>Product updated successfully.</p>`);
    res.send();
  }
};

let deleteProduct = (req, res) => {
  if (checkID(req, res)) {
    productArr.splice(req.params.id - 1, 1);
    res.write(`<p>Product deleted successfully.</p>`);
    res.send();
  }
};

export {
  getWithID,
  getAllProducts,
  postProduct,
  putProduct,
  patchProduct,
  deleteProduct,
};
