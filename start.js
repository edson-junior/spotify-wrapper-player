const express = require('express');
const path = require('path');
const fetch = require('node-fetch');
const app = express();

// import environmental variables from our variables.env file
require('dotenv').config({ path: 'variables.env' });

// view engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// static files
app.use(express.static(path.join(__dirname, 'dist')))

// homepage
app.get('/', async (req, res) => {
  const client_id = process.env.CLIENT_ID;
  const client_secret = process.env.CLIENT_SECRET;

  await fetch('https://accounts.spotify.com/api/token', {
    body: 'grant_type=client_credentials',
    method: 'POST',
    headers: {
      'Authorization': `Basic ${(new Buffer(client_id + ':' + client_secret).toString('base64'))}`,
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept':'application/json; charset=utf-8'
    }
  })
    .then(data => data.json())
    .then(data => res.render('index', { token: data.access_token }))
    .catch(error => console.error(error));
});

// port
app.set('port', process.env.PORT || 7777)

const server = app.listen(app.get('port'), () => {
  console.log(`Express running → PORT ${server.address().port}`)
});
