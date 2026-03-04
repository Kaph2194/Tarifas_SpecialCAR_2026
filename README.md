# Special Car — Tarifas 2026

Página web moderna para visualizar las tarifas vigentes 2026 para conductores, organizada por empresa/cliente.

## Estructura del proyecto

```
special-car-tarifas/
│
├── index.html              ← Página principal
│
├── css/
│   └── styles.css          ← Estilos (tema oscuro, dorado)
│
├── js/
│   └── app.js              ← Lógica de navegación por tabs
│
└── assets/
    └── logos/              ← Logos de cada empresa (agregar aquí)
        ├── special-car.png         ← Logo principal (header)
        ├── win.png
        ├── bluecare.png
        ├── adom.png
        ├── colomboespañola.png
        ├── efecty.png
        ├── torneos.png
        ├── moya.png
        ├── esri.png
        ├── bancamia.png
        ├── special-club.png
        ├── fixti.png
        ├── san-gabriel.png
        ├── expeditor.png
        └── longport.png
```

## Cómo agregar los logos

1. Abre la carpeta `assets/logos/` en Visual Studio Code
2. Pega cada imagen con el nombre exacto indicado arriba
3. Formatos soportados: `.png`, `.jpg`, `.svg` (ajusta la extensión en el HTML si usas jpg/svg)
4. Si no hay logo disponible para una empresa, la página muestra automáticamente el nombre en texto dorado

## Desplegar en GitHub Pages

1. Crea un repositorio en GitHub (ej: `special-car-tarifas`)
2. Sube todos los archivos con:
   ```bash
   git init
   git add .
   git commit -m "Tarifas 2026"
   git remote add origin https://github.com/TU_USUARIO/special-car-tarifas.git
   git push -u origin main
   ```
3. Ve a **Settings → Pages → Source: main / root**
4. En minutos estará disponible en: `https://TU_USUARIO.github.io/special-car-tarifas/`

## Módulos incluidos

| Módulo | Descripción |
|---|---|
| WIN | Zonas, pasajeros, Bogotá, Medellín, otras ciudades |
| BLUECARE | Tarifas horarias |
| ADOM | Hora normal |
| COLOMBO ESPAÑOLA | Aeropuerto y hora espera |
| EFECTY | Mínimo y km adicional |
| TORNEOS COLOMBIA | Disponibilidad y aeropuerto |
| MOYA | Aeropuerto y trayecto |
| ESRI | Capacidad de pasajeros y zonas Latam |
| BANCAMIA | Destinos y servicios aeropuerto |
| SPECIAL CLUB | Tarifas por cliente |
| FIXTI | Bogotá, alrededores y otras ciudades |
| SAN GABRIEL | Rangos de distancia |
| EXPEDITOR | Aeropuertos |
| LONGPORT | Rutas nocturnas y administrativos |
