var express = require('express');
var router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const uri = process.env.DATABASE_URL || "mongodb+srv://taira:Guitenn1126@youbase-cluster.pigam.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
let client2

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true })

const main = async () => {
  client2 = await MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
}

main()

router.get('/', function (req, res, next) {
  client.connect(err => {
    client.db("central_batter_2020").collection("player_detail").find().toArray(function (err, docs) {
      res.json(docs)
      client.close();
    });
  })

});

// router.get('/test', async (req, res, next) => {
  
//   let client2;
//   console.log('hihi')
//   try {
//     console.log('hi!')
//     client2 = await MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
//     const db = client2.db('central_batter_2020')
//     const collection = db.collection('player_detail')
//     const data = await collection.find().toArray()
//     res.json(data)
//   }
//   catch (err) {
//     console.log(err);
//     res.status(500).send();
//   }
// })

router.get('/test2', async (req, res, next) => {
  try {
    const db = client2.db('central_batter_2020')
    const collection = db.collection('player_detail')
    const data = await collection.find().toArray()
    res.json(data)
  }
  catch (err) {
    console.log(err);
    res.status(500).send();
  }
})



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

router.get('/test', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  res.send('あああ')
});




module.exports = router;
