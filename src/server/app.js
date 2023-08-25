import express from "express";
import morgan from "morgan";
import ViteExpress from "vite-express";
import handlerFunctions from "./controller";

const app = express();

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
app.use(express.json());

// Routes here
const { getList } = handlerFunctions;
app.get("/list", getList);

ViteExpress.listen(app, 2319, () =>
  console.log("We got a 2319! Report to http://localhost:2319")
);
