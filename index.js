import express from 'express';
import axios from 'axios';
import bodyParser from 'body-parser';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", async(req,res) => {
    try{
        const result = await axios.get("https://api.jikan.moe/v4/genres/anime");
        const genres = result.data.data;
        res.render("index.ejs",{genres:genres});
    }
    catch(error){
        console.error("Failed to fetch genres: ",error.message);
        es.status(500).send("Internal Server Error");
    }
})

app.post("/submit", async(req,res) =>{
    try{
        const genreId = req.body.genre_id;
        const episodeLimit =parseInt(req.body.episode);
        const result = await axios.get(`https://api.jikan.moe/v4/anime?genres=${genreId}`);
        let apiData = result.data.data;
        if (episodeLimit === 12) {
            apiData = apiData.filter(anime => anime.episodes <= 12);
        } else if (episodeLimit === 50) {
            apiData = apiData.filter(anime => anime.episodes > 12 && anime.episodes <= 50);
        } else if (episodeLimit === 999) {
            apiData = apiData.filter(anime => anime.episodes > 50);
        } 
        if(apiData && apiData.length>0){
            res.render("index.ejs", { animeList: apiData });
        }
    }
    catch(error){
        console.error("Failed to make a request: ",error.message);
    }
})

app.post("/randomChar", async(req,res)=>{
    try{
        const result = await axios.get(`https://api.jikan.moe/v4/characters`);
        let charList = result.data.data;
        var characterId = Math.floor(Math.random()*charList.length)+1;
        res.render("index.ejs", {character : charList[characterId]});
    }
    catch(error){
        console.error("Failed to make a request: ",error.message);
    }
})

app.get("/trending", async(req,res)=>{
    try{
        const result = await axios.get("https://api.jikan.moe/v4/top/anime");
        let apiData = result.data.data;
        res.render("trending.ejs",{ animeList: apiData});
    }
    catch(error){
        console.error("Failed to make a request: ",error.message);
    }
})
 
app.get("/about",(req,res)=>{
    res.render("about.ejs");
})

app.listen(port, ()=>{
    console.log(`Server is listening to ${port}`);
})
