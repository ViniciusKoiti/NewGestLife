module.exports = function(api) {
  api.cache(true);
  return {
    presets: [
      'babel-preset-expo',
      '@babel/preset-typescript'
    ],
    plugins: [
      'react-native-reanimated/plugin',
      ['module:react-native-dotenv', {
        "moduleName": "@env",
        "path": ".env",
        "blocklist": null,
        "allowlist": null,
        "blacklist": null, // Para versões anteriores ao 2.0.0
        "whitelist": null, // Para versões anteriores ao 2.0.0
        "safe": false,
        "allowUndefined": true,
        "verbose": false
      }]
    ]
  };
};
