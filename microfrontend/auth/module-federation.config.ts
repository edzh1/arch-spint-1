export const mfConfig = {
  name: "auth",
  exposes: {
    './Auth': './src/components/Auth.tsx',
  },
  remotes: {
    'store': 'mesto@http://localhost:3000/mesto.js',
  },
  shared: [
    "react",
    "react-dom", "react-router-dom",
    {"store/store": { singleton: true } },
  ],
};
