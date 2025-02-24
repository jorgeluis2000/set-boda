module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                targets: {
                    node: 'current'
                }
            }
        ],
        '@babel/preset-typescript'
    ],
    plugins: [
        [
            'module-resolver',
            {
                alias: {
                    '@myapp-app': './src/app',
                    '@myapp-config': './src/config',
                    '@myapp-utils': './src/utils'
                }
            }
        ]
    ],
    ignore: ['**/*.space.ts']
};