var express = require('express'); // Express web server framework
var request = require('request'); // "Request" library
var axios = require('axios').default;
var querystring = require('querystring');
var cookieParser = require('cookie-parser');

var client_id = 'ef193ca762534b5587de295bbafbbd8d'; // Your client id
var client_secret = 'aca7049910bb46bb88d4870a106da5aa'; // Your secret
var redirect_uri = 'http://localhost:3005/callback';// Or Your redirect uri

// var LocalStorage = require('node-localstorage').LocalStorage,
// localStorage = new LocalStorage('./scratch');

var stateKey = 'spotify_auth_state';
var app = express();

var generateRandomString = function(length) {
    var text = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  
    for (var i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
};
app.use(express.static(__dirname + '/public'))
   .use(cookieParser());

app.get('/login', function(req, res) {
    var state = generateRandomString(16);
    console.log(req.query.uris)
    res.cookie(stateKey, state);
    // your application requests authorization
    var scope = 'playlist-modify-private playlist-modify user-read-private user-read-email user-read-playback-state';
    res.redirect('https://accounts.spotify.com/authorize?' +
      querystring.stringify({
        response_type: 'code',
        client_id: client_id,
        scope: scope,
        redirect_uri: redirect_uri,
        state: state
      }));
  });

  
  app.get('/callback', function(req, res) {

    // your application requests refresh and access tokens
    // after checking the state parameter
  
    var code = req.query.code || null;
    var state = req.query.state || null;
    var storedState = req.cookies ? req.cookies[stateKey] : null;
    if (state === null || state !== storedState) {
      res.redirect('/#' +
        querystring.stringify({
          error: 'state_mismatch'
        }));
    } else {
      res.clearCookie(stateKey);
      var authOptions = {
        url: 'https://accounts.spotify.com/api/token',
        form: {
          code: code,
          redirect_uri: redirect_uri,
          grant_type: 'authorization_code'
        },
        headers: {
          'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
        },
        json: true
      };
  
      request.post(authOptions, function(error, response, body) {
        if (!error && response.statusCode === 200) {
  
          var access_token = body.access_token,
          refresh_token = body.refresh_token;

  
          let user_id = '';
          // use the access token to access the Spotify Web API
          let spotify = axios.create({
            baseURL: 'https://api.spotify.com',
            headers: {
              Accept: 'application/json',
              Authorization: 'Bearer ' + access_token,
              'Content-Type': 'application/json',
          }
          })

          spotify.get('/v1/me').then(res => {
            let userId = res.data.id
            //create playlist
            spotify.post(`/v1/users/${userId}/playlists`, {
              name: "Saamba Playlist"
            }).then(res => {
              let playlistId = res.data.id
              // spotify.post('/v1/playlists/{playlist_id}/tracks', {
              //   uris: localStorage.getItem("uris").substring(2, storage.length-2)
              // })
              
              
            })
            .catch(err => {console.log(err)})
          }).catch(err => {console.log(err)})
          
          // options.url = "https://api.spotify.com/v1/users/" + user_id + "/playlists"
          // options.data = {
          //   "name": "SAAMBA Playlist",
          //   "description": "A playlist made by SAAMBA",
          //   "public": false
          // }

          // we can also pass the token to the browser to make requests from there
          res.redirect('http://localhost:3000/demo/#' +
            querystring.stringify({
              access_token: access_token,
              refresh_token: refresh_token
            }));
        } else {
          res.redirect('/#' +
            querystring.stringify({
              error: 'invalid_token'
            }));
        }
      });
    }
  });

  app.listen(3005);