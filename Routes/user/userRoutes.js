import express from "express";

let route = express.Router();

route.get("/:id/:name", (req, res) => {
  res.write("<h1>Hello From Express 4.21.2</h1>");
  res.write(`<p>Params: ${JSON.stringify(req.params)}</p>`);
  res.write(`<p>Body: ${JSON.stringify(req.body)}</p>`);
  res.send();
});

route.get("/", (req, res) => {
  res.write("<h1>Hello From Express 4.21.2</h1>");
  res.write(`<p>${JSON.stringify(req.body)}</p>`);
  res.send();
});

route.post("/", (req, res) => {
  res.write("<h1>POST: Hello From Express 4.21.2</h1>");
  res.write(`<p>Body: ${JSON.stringify(req.body)}</p>`);
  res.send();
});

route.put("/", (req, res) => {
  res.write("<h1>Hello From Express 4.21.2</h1>");
  res.write("<p>This is PUT reqquest.</p>");
  res.send();
});

route.patch("/", (req, res) => {
  res.write("<h1>Hello From Express 4.21.2</h1>");
  res.write("<p>This is PATCH reqquest.</p>");
  res.send();
});

route.delete("/", (req, res) => {
  res.write("<h1>Hello From Express 4.21.2</h1>");
  res.write("<p>This is DELETE reqquest.</p>");
  res.send();
});

export default route;
