const express = require('express');
const path = require('path');
const fileupload = require('express-fileupload');

let initial_path = path.join(__dirname, "public");

const app = express();
app.use(express.static(initial_path));
app.use(fileupload());

app.get('/', (req, res) => {
    res.sendFile(path.join(initial_path, "home.html"));
})

app.get('/editor', (req, res) => {
    res.sendFile(path.join(initial_path, "editor.html"));
})

// upload link
app.post('/upload', (req, res) => {
    let file = req.files.image;
    let date = new Date();
    // image name
    let imagename = date.getDate() + date.getTime() + file.name;
    // image upload path
    let path = 'public/' + imagename;
    res.json(path)

    // create upload
    // file.mv(path, (err, result) => {
    //     if(err){
    //         throw err;
    //     } else{
    //         // our image upload path
    //     }
    // })
})

app.get("/admin", (req, res) => {
    res.sendFile(path.join(initial_path, "dashboard.html"));
})

app.get("/:blog", (req, res) => {
    res.sendFile(path.join(initial_path, "blog.html"));
})

app.get("/:blog/editor", (req, res) => {
    res.sendFile(path.join(initial_path, "editor.html"));  
})

app.use((req, res) => {
    res.json("404");
})

app.listen(process.env.PORT || 3000, () => {
    console.log('listening......');
})

// Your code will be inserted here
