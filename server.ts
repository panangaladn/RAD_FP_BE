import express from 'express';
import adminController from "./controller/adminController";
import bookController from "./controller/bookController";
// import route, {adminController} from "./controller/adminController";
const cors = require("cors");
const app = express();
app.use(cors());
const corsOptions = {
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(express.json());
//app.use(cors());

app.use("/admin",adminController);
app.use("/books", bookController);

app.listen(3003, () => {
    console.log("Server running on port 3003");
});



