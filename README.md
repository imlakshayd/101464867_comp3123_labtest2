# Weather App

A React application that displays real-time weather data for any city using the OpenWeatherMap API.

## Features
- Search for weather by city name.
- Displays temperature, weather condition, humidity, wind speed, and "feels like" temperature.
- Dynamic background and premium UI design.
- Responsive layout.

## Tech Stack
- **Frontend**: React (Create React App)
- **Styling**: CSS3 (Custom styles)
- **API**: OpenWeatherMap
- **HTTP Client**: Axios

## Setup Instructions

1.  **Clone the repository**:
    ```bash
    git clone <repository-url>
    cd 101464867_comp3123_labtest2
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Run the application**:
    ```bash
    npm start
    ```
    The app will open at `http://localhost:3001`.

## API Configuration
The app uses the OpenWeatherMap API. The API key is currently configured in `src/services/weatherService.js`.

## Screenshots
*(Add screenshots here)*

## Deployment to Vercel

1.  **Push to GitHub**: Ensure your project is pushed to your GitHub repository.
2.  **Sign Up/Login**: Go to [Vercel](https://vercel.com) and sign up using your GitHub account.
3.  **Add New Project**:
    - Click **"Add New..."** -> **"Project"**.
    - Import your `101464867_comp3123_labtest2` repository.
4.  **Configure**:
    - Vercel will automatically detect `Create React App`.
    - Leave the build settings as default.
    - Click **"Deploy"**.
5.  **Done**: Once finished, Vercel will give you a live URL (e.g., `https://your-project.vercel.app`).
