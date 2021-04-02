var express = require('express');
var router = express.Router();
const MongoClient = require('mongodb').MongoClient;


router.get('/', function(req, res, next) {
  const uri = "mongodb+srv://taira:Guitenn1126@youbase-cluster.pigam.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  client.connect(err => {
    console.log(req.params.playerCode)
    client.db("central_batter_2020").collection("player_detail").find().toArray(function (err, docs) {
      res.json(docs)
      client.close();
    });
  })

});



router.get('/:playerCode', function(req, res, next) {
  const uri = "mongodb+srv://taira:Guitenn1126@youbase-cluster.pigam.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  const playerCode = Number(req.params.playerCode)

  client.connect(err => {
    client.db("central_batter_2020").collection("player_detail").find({playerCode: playerCode}).toArray(function (err, docs) {
      res.json(docs)
      client.close();
    });
  })

});




module.exports = router;
