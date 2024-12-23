
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;


app.use(express.static(__dirname));
app.use(express.json());


app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});


app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});