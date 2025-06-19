# Weather App 🌤️

A modern, responsive weather application built with **React**, powered by the **OpenWeather API**, and styled using **Tailwind CSS v4** with **DaisyUI** components.

> This is my first personal React project, built to practice real-world usage of hooks (`useState`, `useEffect`) and API integration.

---

## 🚀 Features

- **City Search** – Search weather information for any city in the world.
- **Live Weather Data** – Displays temperature, conditions, icons, and more using the OpenWeather API.
- **Tooltip-enhanced UI** – Specific weather data (wind, humidity, local date) is displayed with **DaisyUI-powered tooltips** for clarity.
- **Error Handling** – User-friendly messages when cities aren’t found or APIs fail.
- **Responsive Design** – Optimized layout for both desktop and mobile devices.
- **Gradient UI** – Aesthetic and modern using backdrop blurs and color transitions.

---

## 🛠️ Tech Stack

- **React (Hooks)**
- **JavaScript (ES6+)**
- **Tailwind CSS v4** + **DaisyUI**
- **Vite**
- **OpenWeather API**
- **Luxon** (for accurate timezone/date formatting)
- **FlagsApi** (To get each country's flag)
- **Iconify** (for the Date, Humidity and Wind Speed icons)
- **Surge.sh** (Static web publishing)

---

## 🔗 Live Demo

[weather-gabriel.surge.sh](https://weather-gabriel.surge.sh)

---

## 📦 Getting Started

### 1. Clone the monorepo:

```bash
git clone https://github.com/garze05/react-projects.git
```

### 2. Navigate to the project:

```bash
cd weather-app
```

### 3. Install dependencies:

```bash
npm install
```

### 4. Start the development server:

```bash
npm run dev
```

### 5. Set your API key

Create a `.env` file in the root of the project:

```
VITE_API_KEY=your_openweather_api_key
```

---

## 📁 Project Highlights

- Uses **two-step fetching** to first get city coordinates and then retrieve weather data. This is required to find the weather of a specific city by name.
- Implements **time conversion** using Luxon to reflect accurate _local time_ of the queried city.
- Tooltips are created using the `data-tip` attribute from **DaisyUI** components.
- All UI states are handled (no city, loading, error, valid data) with conditional rendering.

> Note: The reason to use Luxon instead of the native `Date` object in JavaScript is because the OpenWeather API provides timestamps in UTC and a timezone offset in seconds, but JS does not easily support converting these to a city's local time or date.

---

## ✍️ Author

**Gabriel Rodríguez** – [LinkedIn](https://www.linkedin.com/in/gabrielrodriguezovares/)
GitHub: [@garze05](https://github.com/garze05)

---

## 📌 Note

This app is part of my monorepo of beginner and intermediate React projects, built to strengthen my frontend development skills and prepare for real-world projects and technical interviews.

---

_Thanks for checking out my work! Feel free to fork or clone this project and make it your own._ 🚀
