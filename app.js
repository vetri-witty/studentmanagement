const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(__dirname));

app.set('view engine', 'ejs');
app.set("views","./views");

let connection=require('./config/database');

app.get('/',function(req,res){
    console.log("Hi login");
    res.render(__dirname + '/views/login.ejs');
})

app.post('/login', function(req,res){
    var email=req.body.email;
    var password=req.body.password;
    if(email && password){
       connection.query('select email from users where email = ? AND password=?',[email,password],(err,results)=>{
           if(err) throw err;
           if(results.length>0){
                console.log("Data submitted");
                connection.query('select * from profileinfo where email = ?',[email],(err,resdata)=>{
                    console.log(resdata);
                    res.render("marksheet",{userData: resdata})
               })
            }
        else{
            res.render("Login",{errormessage:'USER NAME AND PASSWORD DOES NOT MATCH'});
        }
                 
    })
    }   
});
app.use('/signup',function(req,res){
    console.log('validated');
    var name = req.body.name;
    var email = req.body.email;
    var password = req.body.password;
    connection.query('insert into users values(?,?,?)',[name,email,password],(err,results)=>{
        if(err) throw err;
        if(results){
            console.log("Values Inserted");
            res.render("Login");
        }
    })
})
app.post('/signuppage',function(req,res){
    console.log("Sign up page posted");
    res.render("signup");
})
app.listen(3000,()=>{
    console.log("server is running at the port 3000");
})












// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`)
// })