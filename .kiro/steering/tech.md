# Technology Stack

## Core Technologies
- **React**: Component-based UI framework
- **React Three Fiber**: React renderer for Three.js
- **Three.js**: 3D graphics library for WebGL rendering
- **@react-three/drei**: Useful helpers for React Three Fiber
- **@react-three/cannon**: Physics integration (optional)
- **TypeScript**: Type-safe JavaScript development
- **WebGL**: Hardware-accelerated 3D graphics

## Build System
- **Vite**: Fast build tool and dev server (recommended)
- **Create React App**: Alternative React setup
- **npm/yarn/pnpm**: Package management
- **ES6 Modules**: Module system

## Key Dependencies
- **@react-three/fiber**: React renderer for Three.js
- **@react-three/drei**: Collection of useful helpers
- **three**: Core Three.js library
- **@types/three**: TypeScript definitions
- **leva**: React-based GUI controls (replaces dat.gui)

## Common Commands
```bash
# Install dependencies
npm install

# Start development server
npm run dev
# or
npm start

# Build for production
npm run build

# Preview production build
npm run preview

# Run tests
npm test

# Type checking (if using TypeScript)
npm run type-check
```

## Asset Pipeline
- **GLTF/GLB**: Preferred 3D model format
- **useGLTF**: React Three Fiber hook for loading models
- **Texture formats**: PNG, JPG for textures
- **useTexture**: Hook for loading textures
- **HDR**: Environment maps via useEnvironment