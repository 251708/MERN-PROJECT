import express from "express";
import userRoute from './routes/user.js'
const port = 3000;
const app = express();
app.get("/" , (req,res) => {
    res.send("API working with /api/v1");
    
});

app.use("/api/v1/user" ,userRoute);

app.listen(port,() => {
console.log(`Server is working on http://localhost:${port}`);
});