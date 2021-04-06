var express = require('express');
var router = express.Router();
const MongoClient = require('mongodb').MongoClient;

// let db;
// MongoClient.connect(
//   'mongodb+srv://taira:Guitenn1126@youbase-cluster.pigam.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
//   { useNewUrlParser: true, useUnifiedTopology: true },
//   function (err, client) {
//     if (err) throw err
//     console.log("Connected successfully to DB");
//     db = client.db("central_batter_2020")
//     client.close();
//   }
// )

// router.get('/', function (req, res, next) {
//   try {
//       db.collection("steal_ranking").find().toArray(function (err, docs) {
//         res.status(200).json(docs)
//         client.close();
//       });
    
//   }catch(e) {
//     next(e)
//   }
// });

router.get('/average', function (req, res, next) {
  try {
    const uri = "mongodb+srv://taira:Guitenn1126@youbase-cluster.pigam.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    client.connect(err => {
      client.db("central_batter_2020").collection("average_ranking").find().toArray(function (err, docs) {
        res.status(200).json(docs)
        client.close();
      });
    })

  }catch(e) {
    next(e)
  }
});

router.get('/homerun', function (req, res, next) {
  try {
    const uri = "mongodb+srv://taira:Guitenn1126@youbase-cluster.pigam.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    client.connect(err => {
      client.db("central_batter_2020").collection("homerun_ranking").find().toArray(function (err, docs) {
        res.status(200).json(docs)
        client.close();
      });
    })
    
  }catch(e) {
    next(e)
  }
});

router.get('/rbi', function (req, res, next) {
  try {
    const uri = "mongodb+srv://taira:Guitenn1126@youbase-cluster.pigam.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    client.connect(err => {
      client.db("central_batter_2020").collection("rbi_ranking").find().toArray(function (err, docs) {
        res.status(200).json(docs)
        client.close();
      });
    })
    
  }catch(e) {
    next(e)
  }
});

router.get('/steal', function (req, res, next) {
  try {
    const uri = "mongodb+srv://taira:Guitenn1126@youbase-cluster.pigam.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    client.connect(err => {
      client.db("central_batter_2020").collection("steal_ranking").find().toArray(function (err, docs) {
        res.status(200).json(docs)
        client.close();
      });
    })
    
  }catch(e) {
    next(e)
  }
});


module.exports = router;