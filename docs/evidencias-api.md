# Evidencias de consumo de API

## API utilizada

El frontend consume la API REST desarrollada en Laravel para ProviEmplea.

URL base:

```bash
http://localhost:8080/api
```

## Endpoint de talentos
```bash
GET /api/personas
```

Este endpoint permite obtener talentos registrados en formato de CV ciego.

## El componente que consume este endpoint es:
```bash
src/components/TalentosSection.jsx
```

## Uso en el frontend:
```JavaScript
const response = await api.get("/personas");
setTalentos(response.data.data);
```

##Endpoint de estadísticas
```bash
GET /api/admin/estadisticas
```

Este endpoint permite obtener indicadores administrativos de la plataforma.
El componente que consume este endpoint es:
```bash
src/components/EstadisticasSection.jsx
```

## Uso en el frontend:
```JavaScript
const response = await api.get("/admin/estadisticas");
setEstadisticas(response.data.data);
```

## Archivo de configuración API

La conexión se centraliza en:
```bash
src/services/api.js
```

Contenido principal:
```JavaScript
const api = axios.create({
  baseURL: "http://localhost:8080/api",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});
```

## Conclusión

El frontend demuestra consumo real de endpoints mediante Axios, utilizando datos dinámicos provenientes del backend Laravel de ProviEmplea.