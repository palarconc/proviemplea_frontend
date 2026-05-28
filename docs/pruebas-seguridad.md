# Pruebas de seguridad

## Objetivo

Verificar que la landing page de ProviEmplea incorpore medidas básicas de seguridad en el manejo de formularios y visualización de información.

## Medidas implementadas

| Medida | Descripción |
|---|---|
| Validación de nombre | El nombre no puede estar vacío |
| Validación de correo | Se valida formato de correo electrónico |
| Validación de tipo de usuario | Se exige seleccionar una opción |
| Validación de mensaje | El mensaje debe tener al menos 10 caracteres |
| Honeypot anti robots | Campo oculto para detectar bots |
| CV ciego | No se muestran datos personales sensibles de talentos |
| Manejo de errores API | Se muestra mensaje si la API no responde |

## Prueba de formulario vacío

Al enviar el formulario sin datos, el sistema muestra mensajes de error y evita el envío.

## Prueba de correo inválido

Al ingresar un correo sin formato válido, el sistema muestra un mensaje de advertencia.

## Prueba anti robots

El formulario incluye un campo oculto llamado `sitioWeb`. Si este campo es completado, la solicitud se bloquea como posible envío automatizado.

## Conclusión

La solución incorpora validaciones del lado del cliente y medidas básicas para reducir riesgos en el envío de formularios y exposición de datos personales.