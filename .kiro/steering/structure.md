# Project Structure

## Recommended Directory Layout
```
/
├── src/                    # Source code
│   ├── App.jsx            # Main React app component
│   ├── main.jsx           # React app entry point
│   ├── components/        # React components
│   │   ├── Scene.jsx      # Main 3D scene component
│   │   ├── UI/            # UI components
│   │   │   ├── Controls.jsx
│   │   │   └── HUD.jsx
│   │   └── Experience.jsx # Main 3D experience wrapper
│   ├── three/             # Three.js specific components
│   │   ├── House.jsx      # House 3D model component
│   │   ├── Camera.jsx     # Camera component
│   │   ├── Lights.jsx     # Lighting setup
│   │   ├── Environment.jsx # Environment and skybox
│   │   └── Materials.jsx  # Custom materials
│   ├── hooks/             # Custom React hooks
│   │   ├── useControls.js # Camera/interaction hooks
│   │   ├── useAssets.js   # Asset loading hooks
│   │   └── useScene.js    # Scene management hooks
│   ├── utils/             # Utility functions
│   │   ├── constants.js   # App constants
│   │   └── helpers.js     # Common utilities
│   ├── styles/            # CSS/styling
│   │   ├── index.css      # Global styles
│   │   └── components/    # Component-specific styles
│   └── assets/            # Local assets (if any)
├── public/                # Static assets
│   ├── models/            # 3D model files (.gltf, .glb)
│   ├── textures/          # Texture images
│   └── index.html         # HTML entry point
├── dist/                  # Build output (generated)
└── package.json           # Project configuration
```

## File Naming Conventions
- Use PascalCase for React components (e.g., `House.jsx`, `Camera.jsx`)
- Use camelCase for hooks, utilities, and variables (e.g., `useControls.js`)
- Use kebab-case for CSS classes and asset files
- Use descriptive names for 3D assets and components

## React Three Fiber Patterns
- Wrap Three.js objects in React components using JSX
- Use hooks for state management and side effects
- Leverage `useFrame` for animation loops
- Use `useThree` to access Three.js context
- Keep UI components separate from 3D components
- Use `Suspense` for loading 3D assets

## Code Organization
- Separate 2D UI components from 3D scene components
- Use custom hooks for complex Three.js logic
- Group related 3D objects in the `/three` directory
- Keep React patterns consistent throughout the codebase
- Use TypeScript interfaces for component props