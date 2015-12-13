// Requires \\
var express = require('express');
var bodyParser = require('body-parser');

// Create Express App Object \\
var app = express();

// Application Configuration \\
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

// Routes \\
app.get('/customers/:id', function(req, res){
	var customerId = parseInt(req.params.id)
	var data = {}
	for(var i=0; i<customers.length;i++){
		if(customers[i].id===customerId){
			data = customers[i]
			break
		}
	}
	res.json(data)
})

app.get('/customers', function(req,res){
	res.json(customers)
	// res.json(500,{error:'An error has occurred!'})
})

// Creating Server and Listening for Connections \\
var port = 3000
app.listen(port, function(){
  console.log('Server running on port ' + port);
})

var customers = [{id: 1,
				joined: '2008-03-10', 
				name: 'Daniel Goldstein', 
				city: 'Denver', 
				orderTotal: 5604.943,
				orders: [
					{
					id:0,
					product: 'AngularJS consulting services',
					total: 5604.943
					}
				]
				},
				{id: 2,
				joined: '2008-03-10', 
				name: 'Steve Freeman', 
				city: 'Cranford', 
				orderTotal: 666.6666,
				orders: [
					{
					id:1,
					product: 'India Pale Ale',
					total: 666.6666 
					}
				]
				},
				{id:3,
				joined: '2000-12-02', 
				name: 'Mick Jagger', 
				city: 'NYC', 
				orderTotal: 56.32,
				orders: [
					{
					id:2,
					product: 'TV',
					total: 50.00 
					},
					{
					id:3,
					product: 'Diamonds',
					total: 6.32 
					}
				]	
				},
				{id:4,
				joined: '2000-12-02',
				name: 'Pat Doucher', 
				city: 'Boulder', 
				orderTotal: 420,
				orders: [
					{
					id:4,
					product: 'Ipad',
					total: 50.00 
					},
					{
					id:5,
					product: 'Iphone',
					total: 6.32 
					}
				]
				}
				]
