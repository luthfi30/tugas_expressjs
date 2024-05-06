const express = require('express');
const app = express();
const path = require('path');
const filmsData = require('./films.json');

const port = 3000;


app.use(express.static(path.join(__dirname, 'public')));


app.get('/api/genre/:genre', (req, res) => {
    const genre = req.params.genre.toLowerCase();
    const genreFilms = filmsData.filter(film => film.genre.toLowerCase() === genre);
    res.json(genreFilms);
});


app.get('/genre/:genre', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'genre.html'));
});


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
