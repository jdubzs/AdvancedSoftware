const express = require("express");
const path = require("path");

const app = express();

// ------------------------------
// CORS FIX (works with Android/Volley)
// ------------------------------
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Content-Type, Authorization, X-Requested-With"
    );
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");

    // Reply immediately to OPTIONS requests (important)
    if (req.method === "OPTIONS") {
        return res.sendStatus(200);
    }

    next();
});

// ------------------------------
// Parse JSON body
// ------------------------------
app.use(express.json());

// ------------------------------
// Serve static files (HTML + JS)
// ------------------------------
app.use(express.static(path.join(__dirname, "views")));

// ------------------------------
// GET /test.html
// ------------------------------
app.get("/test.html", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "test.html"));
});

// ------------------------------
// POST /madlibs -> returns a story
// ------------------------------
app.post("/madlibs", (req, res) => {
    const { w1, w2, w3, w4, w5 } = req.body;

    const story = `
        One day, a ${w3} ${w1} decided to ${w2}
        all the way to ${w4} with ${w5}.
        It was the greatest adventure ever told!
    `;

    res.send(story.trim());
});

// ------------------------------
// Start Server
// ------------------------------
const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log("Server running on port " + port);
});

