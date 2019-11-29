// server.js
const express = require('express');
// upload images to DB
//const multer = require('multer-gridfs-storage');
//const upload = multer({dest:'uploads/'});
//
const app = express();
const bodyParser = require('body-parser');
const PORT = 4000;
const cors = require('cors');
const mongoose = require('mongoose');
const mongoDB = "mongodb+srv://jamesomalley:Lecanvey1@cluster0-16fgy.mongodb.net/test?retryWrites=true&w=majority"
mongoose.connect(mongoDB, {useNewUrlParser:true});
const Schema = mongoose.Schema;
const homeSchema = new Schema({
  rentsale:String,
  area:String,
  address:String,
  eircode:String,
  poster:String,
  name: String,
  email: String,
  number: String,
  cost: String,

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

app.get('/api/homes/search/:address/:criteria', (req,res)=>{
  console.log(req.params.address);
  console.log(req.params.criteria);
if(req.params.criteria == 'address')
  {
  HomeModel.find({ 'address': req.params.address},
(error,data) =>{
  res.json(data);
})
  }
})
//upload.single('houseImage')
app.post('/api/homes',  (req,res) =>{
//   console.log(req.file); // uploading image
// console.log('post Sucessfull');
// console.log(req.body)
// console.log(req.body.rentsale);
// console.log(req.body.address);
// console.log(req.body.eircode);
// console.log(req.body.name);
// console.log(req.body.email);
// console.log(req.body.number);
// console.log(req.body.cost);

HomeModel.create({
  rentsale:req.body.rentsale,
  area: req.body.area,
  address: req.body.address,
  eircode: req.body.eircode,
  name: req.body.name,
  email: req.body.email,
  number: req.body.number,
  cost: req.body.cost,
});
//adapted from:https://stackoverflow.com/questions/26066785/proper-way-to-set-response-status-and-json-content-in-a-rest-api-made-with-nodej
//send back proper response??
if(err)
{
  res.status(500).json({ Status: "server error"});
}
res.status(200).json({ Status: "user created"});
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

app.delete('/api/homes/:id', (req,res) =>{
  console.log(req.params.id);
  HomeModel.deleteOne({_id:req.params.id},(error,data)=>{
    if(error)
      res.json(error);  
    res.json(data);
  })
})

app.listen(PORT, function () {
  console.log('Server is running on Port: ', PORT);
});