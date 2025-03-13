export const mfConfig = {
  name: "feed",
  exposes: {
    './Feed': './src/components/Feed.tsx',
  },
  remotes: {
    'store': 'mesto@http://localhost:3000/mesto.js'
  },
  shared: ["react", "react-dom", "react-router-dom", {
    "store/store": { singleton: true },
  }],
};
