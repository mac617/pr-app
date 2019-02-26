const presets = [
  [
    "@babel/env",
    {
      targets: {
        ie: "9"
      },
      modules: false
    }
  ]
];

const plugins = ["@babel/plugin-transform-runtime"];

module.exports = {
  presets,
  plugins
};
