# Orbitronica - 3D Orrery Web App  

Orbitronica is a **3D orrery web application** built using **Spacekit.js** and **Three.js** for visualization and customization. It integrates **NASA's API** to fetch real-time **data on comets and celestial objects** and provides an interactive solar system experience.

🔗 **Live Demo**: [Orbitronica](https://nasa-spaceapps-iota.vercel.app)

---

##  Features  

- **3D Solar System Simulation** using **Spacekit.js**  
- **Real-time comet data** from NASA's API  
- **Interactive Controls** (Mouse & Keyboard)  
- **Customizable orbits & camera positioning**  
- **Smooth animations & realistic scaling**  

---

##  Tech Stack  

- **React.js + Vite** (Frontend Framework)  
- **Spacekit.js** (Astronomical Visualization)  
- **Three.js** (3D Graphics Engine)  
- **NASA API** (Celestial Data)  

---

##  Installation & Setup  

1️ **Clone the Repository**  
```bash
git clone https://github.com/yourusername/orbitronica.git
cd orbitronica
```

2️ **Install Dependencies**  
```bash
npm install
```

3️ **Start Development Server**  
```bash
npm run dev
```

---

##  Vite Configuration  

Vite is used for fast development and optimized builds. Ensure your `vite.config.js` has the following setup:

```javascript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
});
```

---

##  Spacekit.js Initialization  

Inside your React component, initialize the 3D simulation with the following code:

```javascript
import { useEffect } from 'react';

const Orbitronica = () => {
  useEffect(() => {
    const viz = new Spacekit.Simulation(document.getElementById("main-container"), {
      basePath: "https://typpo.github.io/spacekit/src",
      unitsPerAu: 100.0,
      jdPerSecond: 1, // Time speed
      startPaused: false,
      enableMouse: true,
      enableKeyboard: true,
      camera: {
        initialPosition: [0, -30, 10],
        enableDrift: false,
      },
    });

    // Add solar system model
    viz.createStars();
    viz.createSkybox(Spacekit.SkyboxPresets.NASA_TYCHO);

  }, []);

  return <div id="main-container" style={{ width: "100vw", height: "100vh" }} />;
};

export default Orbitronica;
```


##  Deployment  

### **1. Build the Project**
```bash
npm run build
```

### **2. Deploy on Vercel**  
```bash
vercel deploy
```

---

##  License  
This project is **open-source** and free to use.

---

Enjoy exploring the cosmos with **Orbitronica! **
