const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static('public')); // Serve static files from the 'public' folder

app.post('/api/greet', (req, res) => {
    const { name } = req.body;
    res.json({ message: `Hello, ${name}!` });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
