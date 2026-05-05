const express = require("express");
const axios = require("axios");

const app = express();

app.get("/hello", (req,res) =>{
    res.send("Hello World!")
})

app.get("/user/:handle", async (req,res) =>{
    const handle = req.params.handle;
    
    try {
        const response = await axios.get(
            `https://codeforces.com/api/user.info?handles=${handle}`
        );

        const user= response.data.result[0];

        res.json({
            handle:user.handle,
            rating:user.rating,
            rank:user.rank,
            maxRating:user.maxRating,
        });
    }
    catch (error){
        res.status(500).json({
            error: "failed to fetch user data",
        });
    }
});

app.listen(3000, () =>{
    console.log("server running on port 3000")
})