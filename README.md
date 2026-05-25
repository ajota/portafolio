# Portafolio | Anderson Velez — Solutions Architect

Portafolio personal de Anderson Jovany Velez Alvarez, Solutions Architect y desarrollador web. Diseñado para mostrar experiencia, proyectos y publicaciones de forma visual e interactiva.

---

## 🚀 Demo

> Próximamente en producción

---

## 🛠️ Tecnologías

- **HTML5** — Estructura semántica y accesible
- **CSS3** — Estilos, animaciones y media queries
- **JavaScript (Vanilla)** — Lógica e interacciones
- **GSAP 3** — Animaciones avanzadas con ScrollTrigger
- **Playwright** — Testing E2E automatizado

---

## 📁 Estructura del Proyecto

```
portafolio/
├── img/                  # Imágenes y assets visuales
├── Fonts/                # Fuentes tipográficas MADE Future X
├── tests/                # Tests automatizados con Playwright
│   └── example.spec.js
├── screenshots/          # Capturas por dispositivo generadas por tests
├── index.html            # Estructura principal
├── style.css             # Estilos y media queries
├── script.js             # Lógica e interacciones
├── playwright.config.js  # Configuración de Playwright
└── README.md             # Este archivo
```

---

## 📱 Responsive Design

Verificado en los siguientes dispositivos y resoluciones:

| Dispositivo | Resolución |
|---|---|
| iPhone SE | 375px |
| iPhone 14 | 390px |
| Samsung Galaxy | 412px |
| Pixel 7 | 412px |
| iPad Mini | 768px |
| iPad Pro | 1024px |
| Laptop | 1280px |
| Laptop L | 1440px |
| PC Full HD | 1920px |
| PC 4K | 2560px |

---

## ✅ Calidad y Testing

- **22 tests** automatizados con Playwright (unitarios, integración y E2E)
- **Lighthouse scores:**
  - Performance: 72
  - Accessibility: 100
  - Best Practices: 100
  - SEO: 100

---

## 🔧 Instalación y Uso Local

```bash
# 1. Clonar el repositorio
git clone https://github.com/ajota/portafolio.git

# 2. Abrir con Live Server en VS Code
# Click derecho en index.html → Open with Live Server

# 3. Correr los tests
npx playwright test

# 4. Ver reporte de tests
npx playwright test --reporter=html
npx playwright show-report
```

### Requisitos
- [Node.js](https://nodejs.org) v20+
- Extensión [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) en VS Code

---

## 🎨 Secciones

- **Home** — Presentación visual con efecto Einstein animado
- **About Me** — Descripción personal y profesional
- **My Work** — Proyectos y especialidades
- **Topics** — Artículos y publicaciones relevantes

---

## 📄 Licencia

© 2026 Anderson Jovany Velez Alvarez. Todos los derechos reservados.
