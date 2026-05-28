# Guía de buenas prácticas Frontend - ProviEmplea

## 1. Uso de componentes reutilizables

La aplicación fue dividida en componentes independientes para facilitar el mantenimiento, la reutilización y la escalabilidad. Ejemplo: `Navbar`, `Hero`, `ServiciosSection`, `TalentosSection`, `EstadisticasSection`, `ContactForm`, `FaqSection` y `Footer`.

## 2. Nomenclatura clara

Los componentes utilizan nombres en PascalCase, como `TalentosSection.jsx` y `ContactForm.jsx`. Esto permite identificar rápidamente la función de cada archivo.

## 3. Separación de responsabilidades

Cada componente cumple una función específica. Por ejemplo, `TalentosSection` consume y muestra talentos, mientras que `ContactForm` gestiona la validación del formulario.

## 4. Consumo de API centralizado

La conexión con el backend se centralizó en `src/services/api.js`, evitando repetir la URL base en múltiples componentes.

## 5. Manejo de errores

Los componentes que consumen endpoints consideran mensajes de error en caso de que la API no responda correctamente.

## 6. Accesibilidad básica

Se utilizaron etiquetas `label`, atributos `htmlFor`, `aria-label` y estructura semántica para mejorar la navegación y comprensión de la interfaz.

## 7. Diseño responsive

Se utilizó Bootstrap para adaptar la interfaz a dispositivos móviles y de escritorio.

## 8. Validación de formularios

El formulario de contacto valida campos obligatorios, formato de correo y longitud mínima del mensaje antes de permitir el envío.

## 9. Protección anti robots

Se incorporó un campo honeypot oculto, cuyo objetivo es detectar envíos automatizados realizados por bots.

## 10. Seguridad de datos sensibles

La vista pública de talentos trabaja con el concepto de CV ciego, evitando mostrar datos personales sensibles como correo, teléfono o identificación directa.

## 11. Optimización visual

Se aplicaron estilos reutilizables y clases Bootstrap para reducir código repetido y mejorar la consistencia visual.

## 12. Documentación técnica

El proyecto incluye README y archivos complementarios en la carpeta `docs`, facilitando la comprensión, instalación y evaluación del sistema.