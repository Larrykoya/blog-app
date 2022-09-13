const express = require('express');
const app = express();
const port = 5500

app.use(express.static('public'))


app.get("/blogs", (req, res) => {
    res.sendFile(__dirname+ '/blogs.html')
});
app.get("/", (req, res) => {
    res.sendFile(__dirname+'/home.html')
});
app.get("/create", (req, res) => {
    res.sendFile(__dirname+'/create.html')
});
app.get("/contact", (req, res) => {
    res.sendFile(__dirname+'/contact.html')
});
app.get("/story/:id", (req, res) => {
    res.sendFile(__dirname+ `/story${req.params.id}.html`)
}); 

app.listen(port, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log(`listening on port ${port}`)
    }
});