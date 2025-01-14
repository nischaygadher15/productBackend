import express from "express";
import "dotenv/config";
import morgan from "morgan";
import userRoute from "./Routes/user/userRoutes.js";
import productRouter from "./Routes/product/productRoutes.js";

//server & port
let port = process.env.PORT || 8080;
let app = express();

//Middleware
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use("/user", userRoute);
app.use("/product", productRouter);
app.get("/", (req, res) => {
  res.send("<h1>Hello World, this is my first Node + Express App.</h1>");
});

//Error handling
app.all("*", (req, res) => {
  res.send("<h2>404 Page not found</h2>");
});

app.use((err, req, res, next) => {
  res.status(err.statusCode).json({
    statusCode: err.statusCode,
    message: err.message,
  });
});

//listening server
app.listen(port, () => console.log(`server started on port:${port}...`));
