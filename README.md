# Restaurant QR Link Generator (Frontend Mentor Evolution)

This is my solution to the [QR code component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H).

I started this project to complete the layout challenge, but I decided to use it as a playground to practice my React and TypeScript skills. I evolved the static component into a functional application where restaurant owners (or anyone!) can generate a QR code pointing to their specific menu or website.

## Table of Contents

- [Overview](#overview)
  - [The Challenge](#the-challenge)
  - [My Additions](#my-additions)
  - [Links](#links)
- [My Process](#my-process)
  - [Built With](#built-with)
  - [Learning CUBE CSS](#learning-cube-css)
  - [The Logic](#the-logic)
- [What I Learned](#what-i-learned)
- [Continued Development](#continued-development)
- [How to Run](#how-to-run)
- [Author](#author)

## Overview

### The Challenge

The original challenge was simply to build a static QR code component that matches a provided design image.

### My Additions

I wanted to challenge myself to make the component interactive. I turned it into a generator app with the following features:
- **Dynamic Input:** A form that accepts a restaurant name and a URL.
- **API Integration:** I connected the app to a public QR Code API to generate valid QR codes based on the user's input.
- **State Management:** Using React hooks to handle the data flow between the form and the display card.

### Links

- **Repository URL:** [https://github.com/GiandomenicoRiceputi/restaurant-QR-link-generator](https://github.com/GiandomenicoRiceputi/restaurant-QR-link-generator)
- **Live Site URL:** [Add your Vercel/Netlify link here]

## My Process

### Built With

- **React** - To practice component-based architecture.
- **TypeScript** - To learn better type safety and catch errors during development.
- **CUBE CSS** - To explore modern CSS methodologies (Composition, Utility, Block, Exception).
- **Vite** - For a fast development environment.

### Learning CUBE CSS

I have been reading about **Andy Bell's modern CSS principles**, and I tried my best to apply the **CUBE CSS** methodology in this project.

This was a big learning curve for me. Instead of just writing standard CSS, I attempted to:
1.  Use **Composition** layouts (like Flexbox/Grid) to handle the macro geometry of the page.
2.  Use **Utility classes** for single-purpose styles (like spacing and colors).
3.  Keep **Block** styles strictly for the React components (`.card`, `.form`).
4.  Handle **Exceptions** (like error states) using data attributes.

It helped me think more logically about how my CSS cascades, though I am still refining my understanding of it.

### The Logic

I wanted the app to feel responsive to user input:
1.  I built a `Form` component to capture the `restaurantName` and `link`.
2.  When the user submits, I pass that data to a handler function.
3.  The app requests a QR code from `api.qrserver.com` and updates the `Card` component with the new image.

## What I Learned

This project was a great practice ground for:
- **TypeScript with React:** Defining interfaces for my props and understanding how to type event handlers properly.
- **Separation of Concerns:** Trying to keep my form logic separate from the display logic.
- **CSS Architecture:** Moving away from deeply nested CSS and trying to keep styles flat and reusable.

## Continued Development

In the future, I would like to improve:
- **Accessibility:** Ensuring the form and generated images are fully accessible to screen readers.
- **Error Handling:** Adding better visual feedback if the API request fails or if the user types an invalid URL.
- **Download Feature:** Adding a button to let users download the generated QR code image.

## How to Run

To run this project locally:

1.  Clone the repository:
    ```bash
    git clone [https://github.com/GiandomenicoRiceputi/restaurant-QR-link-generator.git](https://github.com/GiandomenicoRiceputi/restaurant-QR-link-generator.git)
    ```
2.  Navigate to the folder:
    ```bash
    cd restaurant-QR-link-generator
    ```
3.  Install dependencies:
    ```bash
    npm install
    ```
4.  Run the development server:
    ```bash
    npm run dev
    ```

## Author

- GitHub - [Giandomenico Riceputi](https://github.com/GiandomenicoRiceputi)
- Frontend Mentor - [@GiandomenicoRiceputi](https://www.frontendmentor.io/profile/GiandomenicoRiceputi)
