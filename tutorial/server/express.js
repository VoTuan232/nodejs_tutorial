var express = require('express');

var app = express();


app.set('view engine', 'ejs'); //talk express is use template ejs 

/*middleware and static file*/
// app.use('/assets', function(req, res, next) {
// 	console.log(req.url);
// 	next();
// })
app.use('/vd', express.static('assets'));
app.get('/home', function(req, res) {
	// res.send('this is the home page');
	res.sendFile(__dirname + '/index.html');
});
app.get('/contact', function(req, res) {
	console.log(req.query); // contact?name=tuan => rs: {name: 'tuan'}
	res.send('this is the contact page');
});
app.get('/profile/:id', function(req, res) {
	var data = {age: 23, job: 'it', hobbies: ['football', 'eating', 'smile']};
	res.render('profile', {person: req.params.id, data: data});
	// res.send('requested with id: ' + req.params.id);
})
app.listen(3000); // listen port

