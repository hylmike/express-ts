const presets = ["@babel/preset-typescript",
  ["@babel/preset-env", { useBuildIns: 'entry', targets: { node: 'current' } }]]
const plugins = [
  "babel-plugin-transform-typescript-metadata",
  ["@babel/plugin-proposal-decorators", { "legacy": true }],
]

module.exports = { presets, plugins };
