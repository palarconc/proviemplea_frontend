# ProviEmplea Frontend

## Descripción del proyecto

ProviEmplea Frontend es una landing page desarrollada con React y Vite para la plataforma ProviEmplea, una solución digital orientada a la búsqueda inversa de empleo entre empresas y talentos locales de Providencia.

El proyecto permite presentar los servicios principales de la plataforma, visualizar talentos en formato de CV ciego, consultar estadísticas desde una API REST y utilizar un formulario de contacto con validación del lado del cliente.

## Contexto del caso

El proyecto responde al desafío del Departamento de Empleo Providencia, que busca innovar el modelo tradicional de intermediación laboral hacia un modelo de búsqueda inversa, donde las empresas puedan buscar talento de forma proactiva, transparente y sin discriminación arbitraria.

## Tecnologías utilizadas

- React
- Vite
- JavaScript
- Bootstrap
- Axios
- HTML5
- CSS3
- API REST Laravel
- MySQL
- Docker
- Swagger/OpenAPI

## Funcionalidades principales

- Landing page responsive.
- Navegación interactiva por secciones.
- Componente de servicios reutilizable.
- Visualización de talentos desde API.
- Visualización de estadísticas desde API.
- Formulario de contacto con validación.
- Protección básica anti robots mediante campo honeypot.
- Preguntas frecuentes mediante componente acordeón.
- Integración con backend Laravel de ProviEmplea.

## Endpoints consumidos

El frontend consume la API REST desarrollada previamente en Laravel:

```bash
GET http://localhost:8080/api/personas
GET http://localhost:8080/api/admin/estadisticas
```

## Instalación del proyecto

### Clonar el repositorio:
```bash
git clone URL_DEL_REPOSITORIO
```

## Entrar a la carpeta del proyecto:
```bash
cd proviemplea_frontend
```

##Instalar dependencias:
```bash
npm install
```
## Ejecutar el servidor de desarrollo:
```bash
npm run dev
```

## Abrir en navegador:

http://localhost:5173

##Conexión con backend

Para que el frontend muestre talentos y estadísticas, el backend debe estar activo en:

http://localhost:8080/api

El backend se levanta mediante Docker Compose desde el proyecto Laravel:
```bash
docker compose up -d
```

## Estructura del proyecto

src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── ServiciosSection.jsx
│   ├── TalentosSection.jsx
│   ├── EstadisticasSection.jsx
│   ├── FaqSection.jsx
│   ├── ContactForm.jsx
│   └── Footer.jsx
├── services/
│   └── api.js
├── App.jsx
├── main.jsx
└── index.css

## Buenas prácticas aplicadas
* Separación del proyecto por componentes.
* Uso de componentes reutilizables.
* Consumo de API centralizado en services/api.js.
* Validación de formulario.
* Uso de etiquetas semánticas HTML.
* Navegación accesible.
* Diseño responsive con Bootstrap.
* Uso de estados y efectos de React.
* Manejo básico de errores al consumir endpoints.
* Documentación técnica del proyecto.

## Seguridad aplicada
* Validación de campos obligatorios.
* Validación de formato de correo electrónico.
* Campo honeypot oculto para reducir envíos automatizados.
* No exposición de datos personales sensibles en la vista pública de talentos.
* Consumo de perfiles bajo el concepto de CV ciego.


## Autoría

Proyecto desarrollado para la Evaluación Sumativa U3 de Desarrollo Frontend.