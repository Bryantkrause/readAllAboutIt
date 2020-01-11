const axios = require('axios')
const cheerio = require('cheerio')

axios.get('https://www.nytimes.com/section/world')
.then(({data: html}) =>{
    const $ = cheerio.load(html)
$('div.summary').children('h3').children('a')
.each((i, elem) => {
    console.log($(elem).text())
})
})
.catch(e => console.error(e))