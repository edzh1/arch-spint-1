export const mfConfig = {
  name: "mesto",
    exposes: {
        './store': './src/store',
        './styles': './src/index.css',
    },
  remotes: {
    'header': 'header@http://localhost:3001/header.js',
    'auth': 'auth@http://localhost:3002/auth.js',
    'feed': 'feed@http://localhost:3003/feed.js',
    'main_header': 'main_header@http://localhost:3004/main_header.js',
  },
  shared: {
      "react": {
        eager: true
      },
      "react-dom": {
        eager: true
      },
      "react-router-dom": {
        eager: true
      },
      "./src/store": { singleton: true, eager: true },
  },
};
