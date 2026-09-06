# js-bootstrap (JavaScript DOM and Bootstrap Learning Lab)

**Live Demo:** [https://omarahmed321.github.io/js-bootstrap/](https://omarahmed321.github.io/js-bootstrap/)

A hands-on experimental lab exploring JavaScript DOM manipulation, dynamic class injection, theme toggling, and interactive Bootstrap styling.

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-7952B3?style=flat-square&logo=bootstrap&logoColor=white)
![GitHub Pages](https://img.shields.io/badge/Deployment-GitHub_Pages-222222?style=flat-square&logo=githubpages&logoColor=white)

---

## Table of Contents
- [About](#about)
- [Architecture](#architecture)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Run Locally](#run-locally)
- [Project Structure](#project-structure)

---

## About
This project was created as an early study playground to practice fundamental JavaScript browser interactions and CSS framework behavior. It contains two functional prototypes: a task list with a dark/light mode toggle, and an interactive testing ground for dynamically injecting Bootstrap utility classes into DOM elements at runtime.

---

## Architecture
The repository is split into two standalone static experiments. The primary page (`index.html`) handles dynamic task list additions using string interpolation and toggles root background and text colors. The secondary experiment (`bootstrap learn.html`) takes user-inputted CSS classes, splits them by whitespace via regular expressions, and applies them to targeted elements using `Element.classList.add(...)`.

---

## Features
- **Dynamic Task Creation**: Appends user-defined list items to an unordered list using template literals.
- **Theme Switcher**: Toggles between light and dark visual themes via direct inline style updates.
- **Runtime Class Injection**: Parses space-separated CSS classes from user input and applies them directly to targeted HTML elements.
- **Interactive Bootstrap Playground**: Enables live testing of Bootstrap utility classes on headings, containers, paragraphs, and buttons.
- **Multi-Page Navigation**: Direct hyperlink linking the core task dashboard to the Bootstrap experiment page.

---

## Tech Stack
- **Language**: JavaScript (ES6)
- **Markup**: HTML5
- **Styling**: Bootstrap 5.3 (via CDN)
- **Deployment**: GitHub Pages

---

## Run Locally

### Prerequisites
A modern web browser.

### Installation
Clone the repository:
```bash
git clone https://github.com/omarahmed321/js-bootstrap.git
cd js-bootstrap
```

Open `index.html` directly in your browser:
```bash
# On Linux
xdg-open index.html

# On macOS
open index.html

# On Windows
start index.html
```

Or view the Bootstrap playground directly:
```bash
xdg-open "bootstrap learn.html"
```

---

## Project Structure
```text
js-bootstrap/
├── bootstrap learn.html
├── bootstrap test .js
├── index.html
├── index.js
└── style.css
```
