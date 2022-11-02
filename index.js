const app = require('express')();
const PORT = 8080;

app.listen(PORT)

app.get('/', (req, res) => {
	res.status(200).send(
	{
		"message": "My name is Ryan",
		"timestamp": Date.now()
	})

});
