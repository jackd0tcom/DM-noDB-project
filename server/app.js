import express from "express";
import morgan from "morgan";
import ViteExpress from "vite-express";
import handlerFunctions from "./controller.js";

const app = express();

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
app.use(express.json());

// Routes here
const { getList, editItem, deleteItem, addItem, totalItems } = handlerFunctions;
app.get("/list", getList);
app.get("/total", totalItems);
app.put("/editList/:id", editItem);
app.delete("/deleteItem/:id", deleteItem);
app.post("/addItem", addItem);

ViteExpress.listen(app, 5050, () => console.log("Itss alliiiveeeee"));
