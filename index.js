const http = require('http');
const express = require('express');

const HOST = 'localhost';
const PORT = 9999;
const app = express();
const server = http.createServer(app);

// home page
app.get('/', (req, res) => {
	res.send(`
      <h1>Welcome to the Employee API!</h1>
<iframe src="https://giphy.com/embed/3owyoUHuSSqDMEzVRu" width="480" height="360" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/foxhomeent-3owyoUHuSSqDMEzVRu">via GIPHY</a></p>
    `);
});

app.get('/hello', (req, res) => {
	res.send(`
    <h2>Well, hello there dog lover! 😍</h2> 
    <h3>Pick a name: 🐶</h3> 
    <li><a href="/hello/Bella">Bella</a></li>
    <li><a href="/hello/Diamond">Diamond</a></li>
    <li><a href="/hello/Trey">Trey</a></li>
    `);
});

app.get('/hello/:whom', (req, res) => {
	const whom = req.params.whom;
	res.send(`Hello, ${whom}!`);
});
// catch all
app.get('*', (req, res) => {
	res.status(404).send(`
      <h1>Page not found</h1>
    `);
});

server.listen(PORT, HOST, () => {
	console.log(`Running on http://${HOST}:${PORT}/`);
});
