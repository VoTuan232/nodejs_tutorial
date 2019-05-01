function callFunction(fun) {
	fun();
}

// normal function: gọi ở bất cứ vị trí nào
// say();
function say() {
	console.log("say Hi");
}
say();

//function expression
// sayBye(); //lỗi
var sayBye = function () {
	console.log('say Bye');
}
// sayBye();

//funciton declare được gọi trước hoặc sau khi khai báo hàm còn function express thì gọi 
//sau khi khai báo hàm

callFunction(sayBye);
// callFunction(say);