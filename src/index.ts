require("dotenv").config();
import signup  from './Routes/signup';
import login from './Routes/login';
import express from 'express';
import dbConnect from "./db/connectMongo";
import update from './Routes/update';



const app = express(); 
const port = process.env.PORT;
const DB_STRING = process.env.DB_CONNECTION_STRING;
app.use(express.json());
dbConnect(`${DB_STRING}`);
app.use("/login",login);
app.use("/signup",signup);
app.use("/update",update)
   
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});