import express from "express";

const app = express();

app.get("/hello", (req, rest) => {
    console.log("Hello World");
    res.send("Hello World");
});

app.listen(8080, ( => {
    console.log("Server running on port 8080");
}));