const memes = document.getElementById('memes');

newMeme();

function newMeme() {
    fetch('https://meme-api.com/gimme')
.then(res => res.json())
.then(data => {
    memes.innerHTML = 
    `
        <h3>Title: ${data.title}</h3>
        <img src="${data.preview[2]}">
        <p>PostLink: <a href="${data.postLink}">${data.postLink}</a></p>
        <p>Author: ${data.author}</p>
        <button class="glow-on-hover" onclick="newMeme()">New Meme</button>
    `
})
}