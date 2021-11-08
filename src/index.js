const path = require('path')
var express     = require("express"),
    app         = express()
app.set("view engine","ejs");
const viewsPath = path.join(__dirname, '../templates/views')
const publicDirectoryPath = path.join(__dirname, '../public')
app.set('views', viewsPath)
app.use(express.static(__dirname + "/public"));
const port = process.env.PORT || 3000 
app.use(express.static(publicDirectoryPath))
app.get('/',(req,res)=>{
    res.render("landing.ejs")
})
app.listen(port, () => {
    console.log('Server is up on port ' + port)
}) 