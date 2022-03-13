module.exports = {
  outputDir: './docs',
  publicPath: process.env.NODE__ENV === 'production' ? '/vuetify-gantt-chart' : '',
  transpileDependencies: [
    'vuetify'
  ]
}
