
function addToWatchlist(animeObject){
    let watchlist = JSON.parse(localStorage.getItem("watchlist")) || [];
    watchlist.push(animeObject);
    localStorage.setItem("watchlist", JSON.stringify(watchlist));
}

function removeFromWatchlist(animeId){
    let watchlist = JSON.parse(localStorage.getItem("watchlist")) || [];
    watchlist = watchlist.filter(a=> a.mal_id !== animeId);
    localStorage.setItem("watchlist", JSON.stringify(watchlist));
}

function isInWatchlist(animeId){
    let watchlist = JSON.parse(localStorage.getItem("watchlist")) || [];
    return watchlist.some(a=> a.mal_id === animeId);
}
function toggleWatchlist(button, animeString) {
    const anime = JSON.parse(animeString.replace(/&quot;/g, '"'));
    if(isInWatchlist(anime.mal_id)) {
        removeFromWatchlist(anime.mal_id);
        button.textContent = "Add to Watchlist";
    } else {
        addToWatchlist(anime);
        button.textContent = "Remove from Watchlist";
    }
}

function displayWatchlist(){
    const watchlist = JSON.parse(localStorage.getItem("watchlist")) || [];
    const container = document.getElementById("watchlist-container");

    if(watchlist.length===0){
        container.innerHTML = "<p>Your watchlist is empty.</p>"
        return;
    }
    watchlist.forEach(anime => {
        let synopsis = anime.synopsis;
    if(synopsis && synopsis.length > 450){
        synopsis = synopsis.slice(0, 450) + "...";
    }

    const genres = anime.genres.map(g => g.name).join(", ");

    const card = `
        <div class="anime-card inside-content">
            <h4>${anime.title}</h4>
            <img src="${anime.images.jpg.image_url}" alt="${anime.title}">
            <ul>
                <li>status: ${anime.status}</li>
                <li>episodes: ${anime.episodes}</li>
                <li>genres: ${genres}</li>
                <li>synopsis: ${synopsis}</li>
            </ul>
            <button onclick="toggleWatchlist(this, this.dataset.anime)"
                data-anime="${JSON.stringify(anime).replace(/"/g, '&quot;')}"
                class="btn btn-secondary rounded-pill px-3 watchlist-btn">
                Remove from Watchlist
            </button>
        </div>
    `;
    container.innerHTML += card;
})
}

window.onload = function() {
    if(document.getElementById("watchlist-container")){
        displayWatchlist();
    }
}