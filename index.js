const PORT = 8000;
//import axios from 'axios'
const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express');

const app = express();

const url = "https://www.theguardian.com/uk"

axios(url)
    .then(response => {
        const html = response.data;
        const $ = cheerio.load(html);
        const articles = [];
        $(".dcr-16c50tn", html).each(function() { 
            const title = $(this).text(); 
            const url = $(this).find("a").attr("href");
            articles.push({title, url})
        })
        console.log(articles)
    }).catch(err => console.log(err))

app.listen(PORT, console.log(`server running on PORT ${PORT}`));