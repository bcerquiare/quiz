var express = require("express");
var app = express();

app.use(express.static(__dirname + "/QUIZZ"));

app.get("/home", function(req, res){
    res.sendFile(__dirname + "/html/home.html");
});

app.get("/quizz", function(req, res){
    res.sendFile(__dirname + "/html/quizz.html");
});

app.get("/novaQuestao", function(req, res){
    res.sendFile(__dirname + "/html/novaQuestao.html");
});




app.listen(8080, function(){
    console.log('Servidor Rodadndo');
});