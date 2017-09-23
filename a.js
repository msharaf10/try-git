function sayHi(name){
	console.log('Hi, ' + name);
}
 new-feature
function sayHello(name){
	console.log('Hello, ' + name);
}

app.get('/', function(req, res){
	res.send('hello');
});

app.get('/test', function(req, res){
	res.send('test');
});


 develop
