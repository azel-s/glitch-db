import express from "express";

const PORT = 5000;

const app = express();

app.get("/api", (req, res) => {
    res.json({ "users": ["user_one", "user_two", "user_three"] });
})


app.listen(PORT, console.log(`Server running on ${PORT}`));