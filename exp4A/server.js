const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan("dev"));
app.use(express.json());

const PORT=3000;

app.get("/",(req,res)=>{
    res.send("Hello! Welcome to FSD Exp 4A of Express+nodeJS")
})

app.get("/about", (req, res) => {
    res.send("Name: John Doe\nRoll No: 23\nCourse: Computer Engineering");
});


app.get("/contact", (req, res) => {
    res.send("Email: johndoe@gmail.com");
});

app.post("/register", (req, res) => {
    res.status(201).send("Student Registered Successfully");
});

app.put("/update", (req, res) => {
    res.status(200).send("Student Updated Successfully");
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});