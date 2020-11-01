const express = require("express");
const app = express();


const port = 8080;
app.set('view engine', 'hbs');
app.set('views',  __dirname + "/views");

app.use(express.static("public"))

app.get("/", function(req,res){
    res.render("index.hbs");
});



console.log(`app on http://localhost:${port}/`);
app.listen(port);