var fs = require('fs');

//đồng bộ
// var readfile = fs.readFileSync('text.txt', 'utf8');
// fs.writeFileSync('writeMe.txt', readfile);
// console.log(readfile);


//bất đồng bộ
fs.readFile('text.txt', 'utf8', function(err, data) {
	// console.log(data);
	if (err) { console.log(err) }
	else {
		fs.writeFile("write.txt", data, (err) => {
		  if (err) console.log(err);
		  console.log("Successfully Written to File.");
		});
	}
});
// console.log('test');
