# Práctica 3: Dinámica de estilos y animaciones

## Análisis y reflexión: JavaScript nativo vs React

### Ventajas de JavaScript nativo
- Permite manipular el DOM directamente, lo que da control total sobre los elementos.
- Es ideal para proyectos pequeños o scripts simples donde no se requiere estructura compleja.
- No depende de librerías externas ni requiere configuración adicional.

### Desventajas de JavaScript nativo
- El código puede volverse difícil de mantener y escalar en proyectos grandes.
- La gestión de estados y actualizaciones dinámicas requiere más líneas de código y lógica manual.
- Las animaciones y transiciones pueden ser menos eficientes si no se optimizan correctamente.

### Ventajas de React
- Facilita la creación de interfaces dinámicas y reactivas mediante componentes y hooks de estado.
- El código es más modular, reutilizable y fácil de mantener.
- El Virtual DOM optimiza las actualizaciones y animaciones, mejorando el rendimiento.
- Gran ecosistema y comunidad, con muchas herramientas y librerías disponibles.

### Desventajas de React
- Curva de aprendizaje inicial, especialmente para quienes vienen de JS nativo.
- Puede ser excesivo para proyectos muy simples.
- Requiere configuración y depende de actualizaciones del framework.

### Experiencia en la práctica
Al implementar las mismas funcionalidades (cambio de estilos, animaciones, ocultamiento/revelado) en ambos enfoques, se observa que React simplifica la gestión de estados y la actualización de la interfaz. En JS nativo, cada cambio requiere manipulación directa del DOM y lógica adicional, mientras que en React basta con modificar el estado y dejar que el framework actualice la vista.

Para proyectos pequeños y simples, JS nativo es suficiente y rápido. Para aplicaciones más complejas y escalables, React ofrece ventajas claras en organización, mantenimiento y rendimiento.
