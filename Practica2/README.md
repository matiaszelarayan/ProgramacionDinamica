# Ventajas y desventajas de usar un framework de JavaScript vs JavaScript nativo


### *Ventajas de un framework (como React):*
- Facilita la creación de interfaces dinámicas y reactivas.
- Componentización: el código es más modular y reutilizable.
- Manejo eficiente del DOM (Virtual DOM).
- Ecosistema grande, muchas librerías y soporte.
- Mejor organización y escalabilidad en proyectos grandes.

---
### *Desventajas:*
- Curva de aprendizaje inicial.
- Tamaño del bundle (más pesado que JS nativo).
- Puede ser excesivo para proyectos muy simples.
- Dependencia de actualizaciones y cambios del framework.
---

### *JavaScript nativo:*
- Más liviano, sin dependencias externas.
- Control total sobre el DOM y el flujo del programa.
- Ideal para proyectos pequeños o scripts simples.
---

### *Desventajas de JS nativo:*
- Más código para lograr interfaces complejas.
- Difícil de mantener y escalar en proyectos grandes.
- Menos herramientas para manejo de estado y UI reactiva.
---

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
