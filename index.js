const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors"); // Import cors

const app = express();

// Enable CORS for all routes
app.use(cors());

mongoose.connect('mongodb+srv://mavchi1212:shilesh1212@cluster0.hripu.mongodb.net/sample', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connected successfully"))
    .catch(err => console.error("MongoDB connection error:", err));

const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String
});

const User = mongoose.model("User", userSchema);

// Using async/await to handle the find query
app.get("/user", async (req, res) => {
    try {
        const users = await User.find({});
        res.json(users);  // Send users as JSON
    } catch (err) {
        res.status(500).send(err);  // Handle errors
    }
});
app.get('/api', (req, res) => {
    res.send('API is working!');
});


app.listen(3001, () => {
    console.log("Server is running on port 3001");
});
