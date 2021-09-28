require('dotenv').config()
var Twit = require('twit')
var cors = require('cors')
const express = require("express")
const PORT = 5000;

const app = express();

var client = new Twit({
    consumer_key: process.env.TWITTER_API_KEY,
    consumer_secret: process.env.TWITTER_API_SECRET,
    access_token: process.env.TWITTER_ACCESS_TOKEN,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
  });

  app.get("/api", (req,res) => {
    client.get('users/show', { screen_name: req.query.user , tweet_mode: 'extended'},  function (err, data, response) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      res.send({tweet: data.status.full_text})
    })
    
  })
  
  app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });