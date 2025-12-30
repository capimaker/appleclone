# MacBook Pro 3D Experience

A mini Apple keynote in the browser: glide through a hero video, pin-and-scroll story beats, and a fully orbitable MacBook Pro that you can recolor, resize, and watch come alive with video textures on its screen.

## Tech that powers the illusion
- React 19 + Vite: lean SPA setup with fast HMR and SWC-based React plugin.
- Three.js via `@react-three/fiber` + `@react-three/drei`: 3D canvas, HDRI environment lights, presentation controls, and GLTF-based MacBook models.
- GSAP + ScrollTrigger: pinned sections, synchronized rotations, and smooth scroll choreography.
- Tailwind CSS v4: utility-first styling, custom font stack, gradients, and layout tokens.
- Zustand: lightweight global state for color, scale, and the active screen video.

## Dependencies installed
- Runtime: `react`, `react-dom`, `three`, `@react-three/fiber`, `@react-three/drei`, `gsap`, `@gsap/react`, `clsx`, `zustand`, `react-responsive`, `@tailwindcss/vite`, `tailwindcss`.
- Tooling: `vite`, `@vitejs/plugin-react-swc`.
- Linting/Types: `eslint`, `@eslint/js`, `eslint-plugin-react-refresh`, `eslint-plugin-react-hooks`, `globals`, `@types/react`, `@types/react-dom`.

## What you can do
- Spin and zoom the laptop with on-canvas controls; toggle between 14" and 16" sizes with a smooth fade/slide transition.
- Swap shell finishes on the fly and keep the lighting accurate with studio-style lightformers.
- Watch the screen update with feature videos as you scroll through the AI/Performance callouts.
- Enjoy adaptive layouts and toned-down motion for tablets and phones.

## Run it locally
Prereqs: Node 18+ and npm.

```bash
npm install
npm run dev
```

Open the printed local URL. Use the color dots and size chips under the canvas; drag to orbit the MacBook; scroll to trigger the cinematic sections.

## Scripts
- `npm run dev` — start the Vite dev server.
- `npm run build` — output a production build to `dist/`.
- `npm run preview` — serve the production build locally.
- `npm run lint` — run ESLint.
