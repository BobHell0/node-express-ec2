import express from 'express'

const app = express()

app.listen(5001, () => console.log('API running on port 5001'));

app.get('/', (req, res) => {
    return res.json('My API running :D');
});

app.get('/chicken', (req, res) => {
	return res.download("./chkn.jpeg", (err) => {
		if (err) {
			res.send({
				error : err,
				msg   : "Problem downloading the file"
			})
		}
	});
})