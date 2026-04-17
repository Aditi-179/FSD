const express = require("express") 
const morgan = require("morgan") 
 
const app = express() 
const PORT = 3000; 
 
app.use(morgan("dev")) 
app.use(express.urlencoded({ extended: true })) 
app.use(express.static("public")) 
 
app.post("/submit-form", (req, res) => { 
    const { studentName, branch, year } = req.body; 
    res.send(` 
        <h1>Submission Received</h1> 
        <p>Student Name: ${studentName}</p> 
        <p>Branch: ${branch}</p> 
        <p>Year: ${year}</p> 
<a href="/">Go Back</a> 
`) 
}) 
app.get('/', (req, res) => { 
res.send("Welcome to the Student Inforomation Portal") 
}) 
app.listen(PORT, () => { 
console.log(`Server running at http://localhost:${PORT}`) 
}) 
