# Technology Stack

## Core Technologies
- **React 19.1.1**: Component-based UI framework with latest concurrent features
- **React Three Fiber 9.3.0**: React renderer for Three.js with React 19 support
- **Three.js 0.180.0**: 3D graphics library for WebGL rendering (latest stable)
- **@react-three/drei 10.7.6**: Useful helpers for React Three Fiber
- **@react-three/csg 4.0.0**: Constructive Solid Geometry operations
- **TypeScript**: Type-safe JavaScript development
- **WebGL**: Hardware-accelerated 3D graphics

## Build System
- **Vite 7.1.7**: Fast build tool and dev server with improved performance
- **@vitejs/plugin-react 5.0.3**: React plugin for Vite with React 19 support
- **npm/yarn/pnpm**: Package management
- **ES6 Modules**: Module system

## Key Dependencies
- **@react-three/fiber ^9.3.0**: React renderer for Three.js
- **@react-three/drei ^10.7.6**: Collection of useful helpers and abstractions
- **@react-three/csg ^4.0.0**: Constructive Solid Geometry for complex 3D operations
- **three ^0.180.0**: Core Three.js library
- **@types/react ^19.1.13**: TypeScript definitions for React 19
- **@types/react-dom ^19.1.9**: TypeScript definitions for React DOM 19
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

## Version Compatibility
- **React 19**: Latest stable with improved concurrent features and automatic batching
- **Three.js 0.180**: Latest stable with WebGPU support and performance improvements
- **React Three Fiber 9.x**: Full React 19 compatibility and new features
- **Drei 10.x**: Latest helpers with React 19 support and new components
- **Vite 7.x**: Fastest build performance with improved HMR

## Constructive Solid Geometry (CSG)
- **@react-three/csg**: Enables boolean operations on 3D meshes
- **Union**: Combine multiple geometries into one
- **Subtraction**: Cut holes or remove parts from geometries
- **Intersection**: Keep only overlapping parts of geometries
- **Base, Addition, Subtraction components**: React components for CSG operations
- **Geometry**: Component for creating complex shapes through boolean operations

```jsx
import { Geometry, Base, Addition, Subtraction } from '@react-three/csg'

// Example CSG usage for house construction
<Geometry>
  <Base>
    <boxGeometry args={[4, 3, 4]} />
  </Base>
  <Addition>
    <cylinderGeometry args={[1, 1, 3]} />
  </Addition>
  <Subtraction>
    <boxGeometry args={[1, 2, 0.5]} />
  </Subtraction>
</Geometry>
```

## Asset Pipeline
- **GLTF/GLB**: Preferred 3D model format
- **useGLTF**: React Three Fiber hook for loading models
- **Texture formats**: PNG, JPG for textures
- **useTexture**: Hook for loading textures
- **HDR**: Environment maps via useEnvironment