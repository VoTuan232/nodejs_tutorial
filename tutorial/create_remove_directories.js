var fs = require('fs')

// fs.unlink('write.txt', (err) => {
//   if (err) {
//     console.error(err)
//     return
//   }
// });

// fs.mkdir('write', function() {
// 	fs.readFile('text.txt', 'utf8', function(err, data) {
// 		// console.log(data);
// 		if (err) { console.log(err) }
// 		else {
// 			fs.writeFile("./write/write.txt", data, (err) => {
// 			  if (err) console.log(err);
// 			  console.log("Successfully Written to File.");
// 			});
// 		}
// 	});
// });

//xóa các file trong thư mục sau đó mới xóa đc folder: rmdir
fs.unlink('./write/write.txt', (err) => {
  if (err) {
    console.error(err)
    return
  }
  else {
  	fs.rmdir('write', (err) => {
	  if (err) {
	    console.error(err)
	    return
	  }
	});
  }
});
