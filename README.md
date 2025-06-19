# Weather App 🌤️

A modern, responsive weather application built with **React**, powered by the **OpenWeather API**, and styled using **Tailwind CSS v4** with **DaisyUI** components.

> This is my first personal React project, built to practice real-world usage of hooks (`useState`, `useEffect`) and API integration.

---

## Features

- **City Search**: Search weather information for any city in the world.
- **Live Weather Data**: Displays temperature, conditions, icons, and more using the OpenWeather API.
- **Tooltip-enhanced UI**: Specific weather data (wind, humidity, local date) is displayed with **DaisyUI tooltips** for clarity.
- **Error Handling**: User-friendly messages when cities aren’t found or APIs fail.
- **Responsive Design**: Optimized layout for both desktop and mobile devices.
- **Gradient UI**: Aesthetic and modern using backdrop blurs and color transitions.

---

## Tech Stack

- **React + Vite**
- **JavaScript**
- **Tailwind CSS v4** + **DaisyUI**
- **OpenWeather API**
- **Luxon Library** (for accurate timezone/date formatting)
- **FlagsApi** (To get each country's flag)
- **Iconify** (for the Date, Humidity and Wind Speed icons)
- **Surge.sh** (Static web publishing)

---

## Live Demo

[weather-gabriel.surge.sh](https://weather-gabriel.surge.sh)

---

## Getting Started

You need a recent version of Node.js to run this application

### 1. Clone this repository:

```bash
git clone https://github.com/garze05/React-Weather-App.git
```

### 2. Install dependencies:

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

And insert your own openweatherapi key from [https://openweathermap.org/](https://openweathermap.org/)
