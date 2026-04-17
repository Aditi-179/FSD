const express = require("express");
const app = express();

// Set EJS
app.set("view engine", "ejs");

// Route to render profile
app.get("/profile", (req, res) => {
    res.render("profile", {
        name: "Joshua",
        branch: "Computer Engineering",
        year: "SE"
    });
});

// Start server
app.listen(3001, () => {
    console.log("Post2 running on http://localhost:3001/profile");
});
