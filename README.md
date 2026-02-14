# 🖥️ macOS Portfolio Clone

<div align="center">

![macOS Portfolio](https://img.shields.io/badge/macOS-Portfolio-blue?style=for-the-badge&logo=apple)
![React](https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react)
![SCSS](https://img.shields.io/badge/SCSS-CC6699?style=for-the-badge&logo=sass&logoColor=white)
![Spotify](https://img.shields.io/badge/Spotify-API-1DB954?style=for-the-badge&logo=spotify)

**A fully interactive macOS-inspired portfolio website built with React**

[🚀 Live Demo](#) | [📖 Documentation](#features) | [🐛 Report Bug](https://github.com/arun980798/mac-os-clone/issues) | [✨ Request Feature](https://github.com/arun980798/mac-os-clone/issues)

</div>

---

## 📸 Preview

<!-- Add your screenshots here -->
```
Coming Soon: Project Screenshots & Demo GIF
```

---

## ✨ Features

### 🎯 Core Functionality
- **🪟 Draggable Windows** - Fully interactive, moveable application windows using `react-rnd`
- **📱 Resizable Components** - Resize windows just like real macOS
- **🎵 Spotify Integration** - Live music player with full playback controls
  - Play, pause, skip tracks
  - View currently playing song
  - Control volume and playback
- **📂 Dynamic Project Showcase** - Browse through projects in an intuitive interface
- **📄 Resume Viewer** - Built-in resume display system
- **ℹ️ About Me Section** - Personal information and bio
- **🎨 Smooth Animations** - Polished SCSS animations throughout

### 🛠️ Technical Highlights
- **Component-based Architecture** - Reusable React components
- **Props Management** - Efficient data flow between components
- **Syntax Highlighting** - Code snippets with proper formatting
- **Modern Styling** - SCSS for maintainable styles
- **API Integration** - Real-time Spotify API connection

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:
- **Node.js** (v14 or higher)
- **npm** or **yarn**
- **Git**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/arun980798/mac-os-clone.git
   ```

2. **Navigate to the project directory**
   ```bash
   cd mac-os-clone/portfoleo
   ```

3. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

4. **Set up Spotify API credentials**
   
   Create a `.env` file in the root directory:
   ```env
   REACT_APP_SPOTIFY_CLIENT_ID=your_client_id_here
   REACT_APP_SPOTIFY_CLIENT_SECRET=your_client_secret_here
   REACT_APP_SPOTIFY_REDIRECT_URI=http://localhost:3000/callback
   ```

   Get your credentials from [Spotify Developer Dashboard](https://developer.spotify.com/dashboard)

5. **Start the development server**
   ```bash
   npm start
   # or
   yarn start
   ```

6. **Open your browser**
   
   Navigate to `http://localhost:3000`

---

## 🏗️ Project Structure

```
portfoleo/
├── public/
│   ├── index.html
│   └── assets/
├── src/
│   ├── components/
│   │   ├── Desktop/
│   │   ├── Window/
│   │   ├── Dock/
│   │   ├── MenuBar/
│   │   ├── Spotify/
│   │   ├── Projects/
│   │   ├── Resume/
│   │   └── About/
│   ├── styles/
│   │   ├── _variables.scss
│   │   ├── _mixins.scss
│   │   └── main.scss
│   ├── utils/
│   ├── App.js
│   └── index.js
├── .env
├── package.json
└── README.md
```

---

## 🎨 Tech Stack

### Frontend
- **React** - UI library for building components
- **SCSS** - Advanced CSS with variables and mixins
- **react-rnd** - Drag and resize functionality

### APIs & Integration
- **Spotify Web API** - Music playback and control
- **Syntax Highlighter** - Code snippet formatting

### Development Tools
- **Create React App** - Project setup
- **ESLint** - Code linting
- **Prettier** - Code formatting

---

## 🎯 Usage

### Opening Applications
Click on any application icon in the dock to open its window.

### Moving Windows
Click and drag the title bar of any window to move it around the desktop.

### Resizing Windows
Drag the corners or edges of windows to resize them.

### Using Spotify Player
1. Click the Spotify icon in the dock
2. Authenticate with your Spotify account
3. Browse and play music directly from the interface
4. Control playback with the built-in controls

### Viewing Projects
Navigate to the Projects window to browse through showcased work.


---

## 🎭 Key Components

### Desktop Component
Main container that manages all open windows and desktop state.

### Window Component
Reusable window wrapper with draggable and resizable functionality.

### Dock Component
macOS-style application launcher at the bottom of the screen.

### Spotify Component
Integrated music player with Spotify Web API.

### Projects Component
Showcase of portfolio projects with filtering and details.

### Resume Component
Professional resume display with sections and timeline.

---

## 📱 Upcoming Features

- [ ] **Enhanced Animations** - More polished window transitions
- [ ] **Terminal Application** - Interactive CLI showcase
- [ ] **Dark/Light Mode Toggle** - Theme switching
- [ ] **Launchpad View** - Grid view of all applications
- [ ] **System Preferences** - Customization options
- [ ] **Mobile Responsive Design** - Touch-optimized interface

---

## 📝 Learning Resources

This project helped me learn:
- **Component Architecture** - Building reusable React components
- **State Management** - Managing complex application state
- **API Integration** - Working with third-party APIs (Spotify)
- **SCSS Best Practices** - Maintainable styling patterns
- **Drag & Drop** - Implementing interactive UI elements
- **Props & Data Flow** - Efficient component communication

---

## 🐛 Known Issues

- Spotify authentication requires active Premium account
- Window stacking order needs improvement
- Mobile responsiveness in progress

See [open issues](https://github.com/arun980798/mac-os-clone/issues) for a full list.

---


## 👤 Author

**Arun Kumar**

- GitHub: [@arun980798](https://github.com/arun980798)
- LinkedIn: [Your LinkedIn Profile](https://www.linkedin.com/in/arun-rajput-592a68373/)

---


## ⭐ Show Your Support

Give a ⭐️ if you like this project!

---

<div align="center">

**Built with ❤️ and React**

</div>
