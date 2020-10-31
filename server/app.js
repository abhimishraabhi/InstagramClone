var express=require('express');
var PORT=5000;
var app=express();
var mongoose=require('mongoose');
const {MONGOURI}=require('./keys');




mongoose.connect(MONGOURI,{
    useNewUrlParser: true,useUnifiedTopology: true 
});



mongoose.connection.on('connected',()=>{
    console.log('connected to mongodb')
})


mongoose.connection.on('error',(err)=>{
    console.log('error in connecting',err)
})

require('./models/user')
require('./models/post')

app.use(express.json());

app.use(require('./routes/auth'))
app.use(require('./routes/post'))
app.use(require('./routes/user'))



//jga4HazLMZnxYsmx

// app.get('/',function(req,res)
// {
//     res.send('hello world its node js');
// })

app.listen(PORT);
console.log('running on '+PORT)