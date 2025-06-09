/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require("nativewind/preset")], // ✅ <-- Add this line
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}", // if using expo-router
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
