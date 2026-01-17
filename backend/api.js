const express = require("express");
// CORS setup
const cors = require("cors");
const app = express();

// Enable CORS for Next JS
app.use(cors({
    origin: "http://localhost:3000"
}));

app.get("/api", (req, res) => {
    res.json({"users": ["userOne", "userTwo","userThree", "userFour"]});
});

// Run this development server in port 
const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server running on ${port}`));