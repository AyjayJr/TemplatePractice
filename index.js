const express = require('express');
const path = require('path');
const app = express();

// No need to require ejs when using express
// set() method does it behind the scenes

app.set('view engine', 'ejs'); // Default view path is cwd/views/
app.set('views', path.join(__dirname, '/views')); 
// This sets absolute path to views
// Views folder is where we store our HTML templates

// Homepage request
app.get('/', (req, res) => {
	res.render('home.ejs'); // render() creates a view
	// Note: you can leave off .ejs due to line 8
	// Note: render default checks cwd/views/
})

app.get('/cats', (req, res) => {
	const cats = ['Blue', 'Rocket', 'Monty', 'Stephanie', 'Winston'];
	res.render('cats', { cats });
})

// An example of passing data from routing to template
app.get('/r/:subreddit', (req, res) => {
	const { subreddit } = req.params;
	res.render('subreddit', { subreddit });
})

// Generate and display a random number
app.get('/rand', (req, res) => {
	const num = Math.floor(Math.random() * 10) + 1;
	res.render('random', { num }); // The key and value are both num
})

// Listening to port 3000
app.listen(3000, () => {
	console.log('LISTENING ON PORT 3000!');
})