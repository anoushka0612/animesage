# 🎌 AnimeSage

AnimeSage is a server-rendered anime discovery web application built with **Node.js, Express, and EJS**, powered by the **Jikan API** (MyAnimeList unofficial API). It helps users quickly find anime recommendations based on genre and episode count, and also discover random anime characters — all through a clean, dark-themed interface.

🌐 **Live Demo:** [https://animesage.onrender.com](https://animesage.onrender.com)

---

## ✨ Features

* 🔍 **Anime Recommendation Search**

  * Filter anime by **genre** and **episode count**
  * Fetches real-time data from the Jikan API

* 🧙 **Random Anime Character Finder**

  * Discover a random anime character with details

* 🔥 **Trending Anime Page**

  * Displays top trending anime

* 🎨 **Dark Theme UI**

  * Clean, responsive layout
  * Independent scrollable sections for better UX

* 🧩 **Reusable Templates**

  * Header and footer reused using EJS partials

---

## 🛠️ Tech Stack

* **Backend:** Node.js, Express
* **Templating Engine:** EJS
* **API:** Jikan API (v4)
* **Styling:** CSS3, Bootstrap 5
* **Version Control:** Git & GitHub
* **Deployment:** Render

---

## 📁 Project Structure

```
anime-sage/
├── public/
│   └── styles/
│       └── style.css
├── views/
│   ├── index.ejs
│   ├── trending.ejs
│   ├── about.ejs
│   └── partials/
│       ├── header.ejs
│       └── footer.ejs
├── index.js
├── package.json
└── README.md
```

---

## 🚀 Getting Started (Local Setup)

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/anime-sage.git
cd anime-sage
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Run the Server

```bash
npm start
```

The app will run on:

```
http://localhost:3000
```

---

## 🌍 Deployment

AnimeSage is deployed as a **Node.js Web Service** on **Render**.

Live URL:
👉 [https://animesage.onrender.com]

---

## 💡 Future Enhancements

* Add pagination for anime lists
* Implement caching to reduce API calls
* Add detailed anime pages using dynamic routes
* Integrate a database (MongoDB)

---

## 👩‍💻 Author

**Anoushka Khemka**
B.Tech Undergraduate | Web Development & DSA Enthusiast

---

## 📜 License
This project is for educational and learning purposes.
This project is for educational and learning purposes.
