var bodyParser = require('body-parser');
var 

var data = [{item: 'PHP'}, {item: 'JS'}];
var urlencodeParser = bodyParser.urlencoded({extended: false});
module.exports = function(app) {
	app.get('/todo', function(req, res) {
		res.render('todo', {todos: data});
	});
	app.post('/todo', urlencodeParser, function(req, res) {
		data.push(req.body);
		res.json(data);
	});
	app.delete('/todo/:item1', function(req, res) {
		data = data.filter(function(todo) {
			return todo.item.replace(/ /g, '-') !== req.params.item1;
		});
		res.json(data);
	});
}