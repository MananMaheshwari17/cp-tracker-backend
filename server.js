const express = require("express");

const app = express();

app.get("/hello", (req,res) =>{
    res.send("Hello World!")
})

app.get("/user/:handle", (req,res) =>{
    const handle = req.params.handle;
    res.send(`your requested data for ${handle}`)
})

app.listen(3000, () =>{
    console.log("server running on port 3000")
})