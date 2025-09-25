# Introducción a TypeScript

Este proyecto es una introducción práctica a TypeScript, diseñado como parte del curso de Angular. Proporciona una base sólida para comprender los conceptos fundamentales de TypeScript antes de adentrarse en el desarrollo con Angular.

## Tecnologías Utilizadas

- TypeScript v5.7.2
- Vite v6.2.0 (como bundler y servidor de desarrollo)

## Estructura del Proyecto

```
01-typescript-intro/
├── src/
│   ├── topics/          # Ejemplos y ejercicios por temas
│   │   └── 1-basic-types.ts
│   ├── main.ts         # Punto de entrada principal
│   └── style.css       # Estilos globales
├── public/             # Archivos estáticos
└── package.json        # Dependencias y scripts
```

## Scripts Disponibles

- `npm run dev`: Inicia el servidor de desarrollo con Vite
- `npm run build`: Compila el proyecto para producción
- `npm run preview`: Previsualiza la versión de producción

## Requisitos Previos

- Node.js (versión LTS recomendada)
- npm (incluido con Node.js)

## Instalación

1. Clona el repositorio
2. Navega al directorio del proyecto:
   ```bash
   cd 01-typescript-intro
   ```
3. Instala las dependencias:
   ```bash
   npm install
   ```

## Temas Cubiertos

1. Tipos Básicos en TypeScript
   - Variables y tipos de datos
   - Inferencia de tipos
   - Arrays y objetos

## Uso

Para comenzar a trabajar con los ejemplos:

1. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```
2. Abre tu navegador en `http://localhost:5173`
3. Explora los diferentes archivos en la carpeta `src/topics/` para ver los ejemplos

## Referencias

- [Documentación oficial de TypeScript](https://www.typescriptlang.org/docs/)
- [Guía de Vite](https://vitejs.dev/guide/)
