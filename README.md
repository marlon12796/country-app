# 🌍 Country App

Aplicación web construida con **Next.js 15+ (App Router)**, **TypeScript**, **Tailwind CSS** y **shadcn/ui**, que permite explorar países, filtrarlos y guardarlos en una lista de favoritos.

---

## ✨ Características

- 🔎 **Explorar países** con datos de [REST Countries API](https://restcountries.com).
- ⚡ **Filtros dinámicos** por región, población y ordenamiento.
- 💖 **Lista de favoritos** persistida en `localStorage` (con Zustand).
- 🎭 **Skeleton loaders** para mejorar la experiencia mientras se cargan datos.
- 🚦 **AbortController** para cancelar peticiones innecesarias.
- 🎨 Estilos con **Tailwind CSS** y componentes accesibles de **shadcn/ui**.
- 🔧 **Biome** para linting, formateo y organización automática de imports.

---

## 🛠️ Stack tecnológico

- [Next.js 13+ (App Router)](https://nextjs.org/)
- [React 18](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Zustand](https://zustand-demo.pmnd.rs/)
- [Biome](https://biomejs.dev/)

---

## 📂 Estructura del proyecto

```bash
.
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── favorites/
│       └── page.tsx
├── components/
│   ├── CountryCard.tsx
│   ├── CountryCardSkeleton.tsx
│   ├── CountryFilters.tsx
│   ├── CountryList.tsx
│   ├── FavoritesList.tsx
│   └── ui/
│       ├── Button.tsx
│       ├── Input.tsx
│       ├── Label.tsx
│       └── Select.tsx
├── lib/
│   ├── api/countries.ts
│   └── store/
│       ├── useCountryFilterStore.ts
│       └── useFavorite.ts
├── hooks/
│   └── useDebounce.ts
├── public/
├── styles/globals.css
├── biome.json
├── next.config.mjs
├── tsconfig.json
├── package.json
└── README.md
```

---

## 🚀 Instalación y uso

### 1. Clonar el repositorio

```bash
git clone https://github.com/marlon12796/country-app.git
cd country-app
```

### 2. Instalar dependencias

```bash
pnpm install
```

### 3. Ejecutar en desarrollo

```bash
pnpm dev
```

La app estará disponible en [http://localhost:3000](http://localhost:3000).

### 4. Build de producción

```bash
pnpm build
pnpm start
```

---

## 🧹 Formateo y linting

Este proyecto usa **Biome** para formateo y organización de imports.

Ejecutar lint:

```bash
pnpm lint
```

Ejecutar fix (arreglar automáticamente):

```bash
pnpm format
```

---

## 📦 Deploy

Despliega fácilmente en **[Vercel](https://vercel.com/)**:

1. Conecta tu cuenta de GitHub y selecciona este repo.
2. Configura el comando de build:
   ```bash
   pnpm build
   ```
3. Configura el comando de inicio:
   ```bash
   pnpm start
   ```

---

## 🔮 Mejoras futuras

- 🌐 Internacionalización (i18n).
- 📊 Filtros adicionales por idioma, capital o área.
- ♾️ Paginación o carga infinita.
- 🧪 Tests unitarios e integración (Jest + React Testing Library).
- 🖼 SEO avanzado: Open Graph, Twitter Cards, imágenes de compartir.

---

## 👨‍💻 Autor

Desarrollado por **[Marlon](https://github.com/marlon12796)** 🚀
