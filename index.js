const express = require('express');
const app = express();

// No need to require ejs when using express
// set() method does it behind the scenes

app.set('view engine', 'ejs');

// When using a view engine, the views' default path is cwd/views/
// This is where we store our HTML templates

// Homepage request
app.get('/', (req, res) => {
	res.render('home.ejs') // render() creates a view
	// Note: you can leave off .ejs due to line 7
	// Note: render default checks cwd/views/
})

// Anything else
app.get('*', (req, res) => {
	res.send('Sorry, unrecognized request :(');
})

// Listening to port 3000
app.listen(3000, () => {
	console.log('LISTENING ON PORT 3000!');
})