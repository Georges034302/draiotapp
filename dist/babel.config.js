"use strict";
exports.__esModule = true;
function default_1(api) {
    api.cache(true);
    return {
        presets: [
            '@babel/preset-env',
            '@babel/preset-react',
            '@babel/preset-typescript',
        ],
        plugins: [
            '@babel/plugin-proposal-private-property-in-object',
            // other plugins
        ]
    };
}
exports["default"] = default_1;
