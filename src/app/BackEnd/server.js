// server.js

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 4000;
const cors = require('cors');
const mongoose = require('mongoose');

const mongoDB = "mongodb+srv://jamesomalley:Lecanvey1@cluster0-16fgy.mongodb.net/test?retryWrites=true&w=majority"
mongoose.connect(mongoDB, {useNewUrlParser:true});

const Schema = mongoose.Schema;

const homeSchema = new Schema({
  title:String,
  year:String,
  poster:String
});

const HomeModel = mongoose.model('home',homeSchema);

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers",
  "Origin, X-Requested-With, Content-Type, Accept");
  next();
  });

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.send('hello world');
})

app.get('/api/homes', (req,res,next) => {

  console.log("get request")
  HomeModel.find((err,data)=>{
    res.json({homes:data});
  })
})

app.delete('/api/homes/:id', (req,res) =>{
  console.log(req.params.id);

  HomeModel.deleteOne({_id:req.params.id},(error,data)=>{
    if(error)
      res.json(error);
      
    res.json(data);
  })
})

app.get('/api/homes/search/:title/:criteria', (req,res)=>{
  console.log(req.params.title);
  console.log(req.params.criteria);
if(req.params.criteria == 'title')
  {
  HomeModel.find({ 'title': req.params.title},
(error,data) =>{
  res.json(data);
})
  }
})


app.post('/api/homes', (req,res) =>{
console.log('post Sucessfull');
console.log(req.body)
console.log(req.body.title);
console.log(req.body.year);
console.log(req.body.poster);

HomeModel.create({
  title: req.body.title,
  year: req.body.year,
  poster: req.body.poster
});
res.json('data uploaded')


})

app.get('/api/homes/:id',(req,res)=>{
  console.log(req.params.id);

  HomeModel.findById(req.params.id, (err, data)=>{
    res.json(data);
  })
})


app.put('/api/homes/:id', (req, res)=>{
  console.log(req.body);
  console.log("Edit "+req.params.id);

  HomeModel.findByIdAndUpdate(req.params.id,
    req.body, {new:true}, (error, data)=>{
      res.send(data);
    })
})

app.listen(PORT, function () {
  console.log('Server is running on Port: ', PORT);
});