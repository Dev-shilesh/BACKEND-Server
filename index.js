const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors"); // Import cors

const app = express();
const PORT = process.env.PORT || 3000;

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

app.use((req, res) => {
    res.status(404).send('Route not found');
});



app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

