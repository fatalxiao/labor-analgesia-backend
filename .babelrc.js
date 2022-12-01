module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                targets: {
                    node: 'current'
                }
            }
        ]
    ],
    plugins: [
        [
            'module-resolver',
            {
                'root': [
                    './src'
                ],
                'extensions': [
                    '.js'
                ]
            }
        ],
        [
            '@babel/plugin-proposal-decorators',
            {
                legacy: true
            }
        ],
    ]
};
