# 🚀 MyMech – Internship Task 2

## 📌 Project Overview

This project is a continuation of Task 1, where a responsive website was created.
In Task 2, the same project is rebuilt using a **templating engine** and a **build system** to follow modern web development practices.

---

## 🎯 Objective

* Recreate Task 1 website using:

  * **Nunjucks (Templating Engine)**
  * **Vite (Bundler)**
* Maintain proper project structure
* Generate final HTML output using templates

---

## 🛠️ Tech Stack Used

* **Nunjucks** → For templating and reusable layouts
* **Vite** → For development and build process
* **HTML, CSS, JavaScript** → Frontend design
* **Vercel** → Deployment

---

## 📂 Project Structure

```
task2/
│── src/
│   ├── templates/
│   │   ├── base.njk
│   │   ├── index.njk
│   │   ├── about.njk
│   │   ├── contact.njk
│   │   └── partials/
│   │       ├── navbar.njk
│   │       └── footer.njk
│   ├── assets/
│   │   ├── css/style.css
│   │   └── images/
│
│── dist/ (generated output)
│── render.js
│── package.json
│── README.md
```

---

## ⚙️ How to Run the Project

### 1️⃣ Install dependencies

```
npm install
```

### 2️⃣ Generate HTML from templates

```
npm run render
```

### 3️⃣ Run development server

```
npm run dev
```

### 4️⃣ Preview final build

```
npm run preview
```

---

## 🌐 Live Demo

👉[Task 2 live demo](https://mymech-task2.vercel.app/)

---

## ✨ Features

* Responsive design for all screen sizes
* Reusable layout using Nunjucks templates
* Sticky footer layout
* Mobile navigation with hamburger menu
* Image carousel on landing page
* Clean UI with modern font and color theme

---


## 📌 Notes

* Task 2 is implemented in a **separate repository** as required
* Final output is generated inside the `dist/` folder
* Project follows structured and modular development approach

---

## 👨‍💻 Author

Swaroop Surya
