const express = require('express');
const path = require('path');
const app = express();

app.get('/', async(req, res) => {
	res.sendFile(path.join(__dirname, '/index.html'));
})

app.get('/estilo.css', async (req, res) => {
  res.sendFile(path.join(__dirname, '/estilo.css'));
});

app.get('/:foto', async (req, res) => {
  res.sendFile(path.join(__dirname, '/assets/' + req.params.foto));
});


app.listen(8080, function() {
	console.log('api rodando em http://localhost:8080');
})

