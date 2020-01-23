module.exports = {
    presets: [
        "@babel/preset-env",                // Responsavel por alterar as funcionalidades que o browser nao entende do JS
        "@babel/preset-react"               // Responsavel por alterar as funcionalidades que o browser nao entende do React
    ],
    plugins: [
        '@babel/plugin-proposal-class-properties'
    ]
}