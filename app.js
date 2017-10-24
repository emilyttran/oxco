var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine','ejs');

var projects = [
    {title: "Project 1", description: "sdjfasldjf", name: "Sam Bobby", img:"https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwiv_JDm6dXWAhVnj1QKHZfmDg0QjRwIBw&url=http%3A%2F%2Fwww.computerscience.org%2Fcareers%2Fcomputer-programmer%2F&psig=AOvVaw152oQwIHP2slD2EoA1Yytb&ust=1507167278733198"},
    {title: "Project 2", description: "kadsflakfdj", name: "Sim Booky", img:"https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwiv_JDm6dXWAhVnj1QKHZfmDg0QjRwIBw&url=http%3A%2F%2Fwww.computerscience.org%2Fcareers%2Fcomputer-programmer%2F&psig=AOvVaw152oQwIHP2slD2EoA1Yytb&ust=1507167278733198"},
    {title: "Project 3", description: "aksdjflsdjflksf", name: "Som Bolly", img:"https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwiv_JDm6dXWAhVnj1QKHZfmDg0QjRwIBw&url=http%3A%2F%2Fwww.computerscience.org%2Fcareers%2Fcomputer-programmer%2F&psig=AOvVaw152oQwIHP2slD2EoA1Yytb&ust=1507167278733198"}
    ];
    


app.get('/',function(req,res){
    res.render("index", {projects:projects});
});

app.get('/projects',function(req,res){
    res.render("projects",{projects:projects});
});

app.post('/projects',function(req,res){
    var title = req.body.title;
    var img = req.body.img;
    var description = req.body.description;
    
    var newProject = {title:title, description:description,img:img};
    projects.push(newProject);
    res.redirect("/projects");
});

app.get('/projects/new',function(req,res){
    res.render("new");
});

app.get('/profile', function(req,res){
    res.render("profile");
});

app.get('/login', function(req,res){
    res.render("login");
});

app.get('/register', function(req,res){
    res.render("register");
});


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started!");
})