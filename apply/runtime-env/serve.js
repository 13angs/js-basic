const express = require('express');

const app = express();

// serve the static files in public folder
app.use(express.static('public'));

app.listen(3000, () => {
	console.log('Running the app on port 3000');
})
