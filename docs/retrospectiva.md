# Retrospectiva del equipo

## Objetivo

Analizar el proceso de desarrollo del frontend de ProviEmplea, identificando aciertos, dificultades y oportunidades de mejora para una futura iteración.

## Qué funcionó bien

- Se reutilizó el backend desarrollado previamente para ProviEmplea.
- Se logró conectar React con la API Laravel.
- Se implementaron componentes reutilizables.
- Se incorporó diseño responsive con Bootstrap.
- Se aplicó validación básica en el formulario.
- Se documentó la estructura del proyecto.

## Dificultades encontradas

- Al inicio hubo problemas con dependencias no instaladas, como Bootstrap y Axios.
- Fue necesario verificar que Docker estuviera levantando correctamente los contenedores del backend.
- Se identificó conflicto de puerto 3306 con otro contenedor MySQL.
- Se corrigieron errores de configuración en `main.jsx`.

## Acciones correctivas aplicadas

- Se detuvo el contenedor que ocupaba el puerto 3306.
- Se levantó correctamente el backend con Docker Compose.
- Se instalaron dependencias faltantes con npm.
- Se centralizó el consumo de API en `services/api.js`.
- Se probó el consumo de endpoints reales desde el frontend.

## Plan de mejora

| Mejora propuesta | Acción |
|---|---|
| Integrar formulario con backend | Crear endpoint real para solicitudes desde la landing |
| Mejorar CMS | Permitir administrar FAQ y servicios desde API |
| Optimizar imágenes | Usar imágenes locales comprimidas en formato WebP |
| Mejorar accesibilidad | Ejecutar pruebas con Lighthouse y navegación por teclado |
| Mejorar seguridad | Agregar validación del lado servidor para el formulario |
| Despliegue | Publicar frontend en Vercel o Netlify |

## Conclusión

El desarrollo permitió integrar frontend y backend de manera funcional, demostrando consumo de endpoints, uso de componentes, validación, documentación y mejora continua. Para una próxima iteración se recomienda profundizar la administración de contenido y la integración completa del formulario con el backend.