var title = document.getElementById('title')
var quote = document.getElementById('quote')
var author = document.getElementById('author')
var bg = document.getElementById("bg")

fetch('https://quotes.rest/qod')
.then(response => response.json())
.then(data => {
    console.log(data['contents']['quotes'])
    bg.src = data['contents']['quotes'][0]['background']
    title.innerHTML = data['contents']['quotes'][0]['title']
    quote.innerHTML = data['contents']['quotes'][0]['quote']
    author.innerHTML = data['contents']['quotes'][0]['author']
})