const request = require('request'); // "Request" library
const client_id = 'client_id'; // Your client id
const client_secret = 'client_secret'; // Your secret

// your application requests authorization
const authOptions = {
  url: 'https://accounts.spotify.com/api/token',
  headers: {
    'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
  },
  form: {
    grant_type: 'client_credentials'
  },
  json: true
};

request.post(authOptions, (error, response, body) => {
  if (!error && response.statusCode === 200) {

    // use the access token to access the Spotify Web API
    const token = body.access_token;
    const options = {
      url: 'https://api.spotify.com/v1/users/edsondjr',
      headers: {
        'Authorization': 'Bearer ' + token
      },
      json: true
    };

    request.get(options, (error, response, body) => {
      // @TODO figure out a way of passing the tocken to html page
      console.log(token);
    });
  }
});
