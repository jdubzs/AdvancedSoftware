const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const path=require('path')

var myvalue="dog";

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.engine('html', require('ejs').renderFile);

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/one", (req, res) => {res.render('./one.html')})
app.post("/two", function(req, res){ 
	var animal=req.param("myvalue");
	console.log(animal)
	res.render("two.html", {animal:animal});
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

