const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'layout',

  exposes: {
    './Component/Header': './projects/layout/src/app/header/header.component.ts',
    './Component/Menu': './projects/layout/src/app/menu/menu.component.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
