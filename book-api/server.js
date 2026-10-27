const express = require("express");
const logger = require("./middleware/logger");
const bookRoutes = require("./routes/bookRoutes");

const app = express();
const PORT = 3000;

// Built-in middleware
app.use(express.json());

// Custom middleware
app.use(logger);

// Routes
app.use("/books", bookRoutes);

// Root route
app.get("/", (req, res) => {
    res.send("Book API is running");
});

// 404 middleware
app.use((req, res) => {
    res.status(404).json({ message: "Route not found" });
});

// Error-handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);

    res.status(500).json({
        message: "Internal Server Error"
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});