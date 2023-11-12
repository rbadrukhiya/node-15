var express = require('express');
var router = express.Router();
var register = require('../models/register')
var jwt = require('jsonwebtoken');



/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

// method 1

// router.post('/', async function (req, res, next) {
//   var email = req.body.email

//   var token = jwt.sign({email }, 'hello');
//   var obj ={
//     email : email,
//     token:token
//   }
// console.log(token);
//   try {
//     data = await register.create(obj)
//     res.status(201).json({
//       status: 'success',
//       data,

//     })
//   }
//   catch (error) {
//     console.log(error);
//   }
// });



// router.post('/get', async function (req, res, next) {
  
//   console.log(req.body);

//   var data = await register.find({email:req.body.email})
//   var [data] = data

//   var auth = jwt.verify(req.body.email, 'hello');
//   console.log(data);

//     if(data.token == undefined)
//     {
//         console.log('register please');
//     } 
//     else
//     {
//     var auth = jwt.verify(data.token , 'hello')
//             console.log(auth);

//             if(auth == req.body.email)
//             {
//               console.log('register');
//             }
//             else
//             {
//               console.log('login');
//             }
//     }
// });




// method 2


router.post('/adddata', async function (req, res, next) {
 
  try {
    data = await register.create(req.body)
    var id = data._id
    var token = jwt.sign({id }, 'hello');
    res.status(201).json({
      status: 'success',
      data,
      token
    })
  }
  catch (error) {
    console.log(error);
  }
});


router.post('/getdata', async function (req, res, next) {
  
  console.log(req.headers.api_key);
  var token = req.headers.api_key

 var auth =  jwt.verify(token, 'hello') 
console.log(auth , 'auth');
var id = auth.id

data = await register.find({_id : id})
console.log(data);
});


module.exports = router;
