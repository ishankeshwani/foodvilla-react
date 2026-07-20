# 🍔 FoodVilla

> A Swiggy/Zomato-style food delivery web app built with React ⚛️

FoodVilla lets users browse restaurants, explore menus, and manage a shopping cart — with a smooth, modern UI powered by Redux and Tailwind CSS.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![Redux Toolkit](https://img.shields.io/badge/Redux%20Toolkit-State-764ABC?logo=redux&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?logo=tailwindcss&logoColor=white)
![Parcel](https://img.shields.io/badge/Bundler-Parcel-E7A94F?logo=parcel&logoColor=white)

## 🛠️ Tech Stack

- ⚛️ React 19
- 🧭 React Router DOM
- 🗂️ Redux Toolkit + React Redux
- 🎨 Tailwind CSS
- 📦 Parcel (bundler)
- 🧪 Jest (testing)

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.js           # Logo + nav items
│   ├── Body.js             # Search + restaurant listing
│   ├── RestaurantCard.js    # Restaurant preview card
│   ├── RestaurantsMenu.js   # Restaurant menu page
│   ├── RestCategory.js      # Menu category accordion
│   ├── ItemList.js          # Menu item list
│   ├── Cart.js              # Shopping cart
│   ├── About.js / Contact.js / Error.js
│   ├── Shimmer.js           # Loading skeleton
│   ├── User.js / UserContext.js
├── utils/
│   ├── appStore.js          # Redux store
│   ├── cartSlice.js         # Cart Redux slice
│   ├── mockData.js / mockRestaurants.js
├── App.js
index.html
index.css
tailwind.config.js
```

## ✨ Features

- 🔍 Restaurant listing with search
- 📋 Restaurant menu with categorized items (🟢 veg / 🔴 non-veg indicators, 🏆 bestseller tags, out-of-stock handling)
- 🛒 Cart management via Redux Toolkit
- 🧭 Client-side routing
- 💫 Loading shimmer UI
- ℹ️ About / 📞 Contact / ⚠️ Error pages

## 🚀 Getting Started

### Prerequisites

- 🟩 Node.js and npm

### 📥 Install dependencies

```bash
npm install
```

### ▶️ Run the app

```bash
npm start
```

This starts the Parcel dev server; the app will be available at the URL Parcel prints (default `http://localhost:1234`) 🎉

### 📦 Build for production

```bash
npm run build
```

### 🧪 Run tests

```bash
npm test
```

## 👨‍💻 Author

**Ishan Keshwani**
