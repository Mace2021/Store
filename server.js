const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs/promises');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.get('/data', async (req, res) => {
    try {
        const data = await fs.readFile('data.json', 'utf-8');
        res.json(JSON.parse(data));
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.post('/data', async (req, res) => {
    try {
        const newData = req.body;
        await fs.writeFile('data.json', JSON.stringify(newData, null, 2));
        res.json({ success: true });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
