function sayHi(name){
		console.log('Hi, ' + name);
}
function sayHello(name){
		console.log('Hello, ' + name);
}

app.get('/', function(req, res){
		res.send('hello');
});
