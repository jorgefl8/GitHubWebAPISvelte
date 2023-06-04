import cors from "cors";
import { handler } from "./frontend/build/handler.js";
import express from "express";
import { loadBackend } from './backend/module.js';

var app = express();

app.use(cors());

var port = process.env.PORT || 12345;
app.use(express.json());
//BACKEND
loadBackend(app);
//FRONTEND
app.use(handler); 

app.listen(port, () => {
    console.log(`Server escuchando en el puerto ${port}`);
});
