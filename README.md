# 🎌 AnimeSage

AnimeSage is a server-rendered anime discovery web application built with **Node.js, Express, and EJS**, powered by the **Jikan API** (MyAnimeList unofficial API). Users can search anime by genre and episode count, browse trending anime, discover random characters, and save favourites to a personal watchlist.

🌐 **Live Demo:** [https://animesage.onrender.com](https://animesage.onrender.com)

---

## ✨ Features

- 🔍 **Anime Search** — filter by genre and episode count using Jikan API
- 📋 **Personal Watchlist** — save and remove anime using localStorage, persists across sessions
- 🔥 **Trending Anime** — displays currently trending anime
- 🧙 **Random Character Finder** — discover a random anime character with details
- 🎨 **Dark Theme UI** — clean, responsive layout with independent scrollable sections
- 🧩 **Reusable Templates** — header and footer via EJS partials

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express
- **Templating:** EJS
- **API:** Jikan API (v4)
- **Styling:** CSS3, Bootstrap 5
- **Storage:** localStorage (client-side watchlist)
- **Deployment:** Render

---

## 📁 Project Structure

```
anime-sage/
├── public/
│   ├── styles/
│   │   └── style.css
│   └── watchlist.js
├── views/
│   ├── index.ejs
│   ├── trending.ejs
│   ├── watchlist.ejs
│   ├── about.ejs
│   └── partials/
│       ├── header.ejs
│       └── footer.ejs
├── index.js
├── package.json
└── README.md
```

---

## 🚀 Getting Started

```bash
git clone https://github.com/anoushka0612/animesage.git
cd animesage
npm install
npm start
```

App runs at `http://localhost:3000`

---

## 👩‍💻 Author

**Anoushka Khemka** — B.Tech Electrical Engineering, Heritage Institute of Technology
