ajax.send({
	method: 'GET',
	url: 'https://jsonplaceholder.typicode.com/posts',
	success: function(res){
		let response = JSON.parse(res);
		console.log(response);
	},
	error: function(err){
		console.log(err)
	}
})