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

//listening server
app.listen(port, () => console.log(`server started on port:${port}...`));
