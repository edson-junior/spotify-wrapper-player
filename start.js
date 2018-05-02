const express = require('express');
const path = require('path');
const request = require('request-promise');
const app = express();

// import environmental variables from our variables.env file
require('dotenv').config({ path: 'variables.env' });

// view engine
// @TODO: add example here later on
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// static files
app.use(express.static(path.join(__dirname, 'example')))

// homepage
app.get('/', async (req, res) => {
  const client_id = process.env.CLIENT_ID;
  const client_secret = process.env.CLIENT_SECRET;
  const authOptions = {
    method: 'POST',
    url: 'https://accounts.spotify.com/api/token',
    headers: {
      'Authorization': `Basic ${(new Buffer(client_id + ':' + client_secret).toString('base64'))}`
    },
    form: {
      grant_type: 'client_credentials'
    },
    json: true
  };

  await request(authOptions)
    .then(data => {
      const token = data.access_token;

      res.render('example', { token })
    })
    .catch(err => console.error(err))
});

// port
app.set('port', process.env.PORT || 7777)

const server = app.listen(app.get('port'), () => {
  console.log(`Express running → PORT ${server.address().port}`)
});
