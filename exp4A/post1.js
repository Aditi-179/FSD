const express = require("express");
const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// Handle form submission
app.post("/submit", (req, res) => {
    const { name, branch, year } = req.body;

    res.send(`
        <h1>Submitted Data</h1>
        <p>Student Name: ${name}</p>
        <p>Branch: ${branch}</p>
        <p>Year: ${year}</p>
    `);
});

// Start server
app.listen(3000, () => {
    console.log("Post1 running on http://localhost:3000");
});
