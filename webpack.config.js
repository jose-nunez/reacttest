var webpack  =require('webpack');

module.exports = {
	stats: {
		errorDetails: true
	},
	entry: [
		'script-loader!jquery/dist/jquery.min.js',
		'script-loader!foundation-sites/dist/js/foundation.min.js',
		'./src/jsx/app.jsx',
	],
	externals:{
		jquery: 'jQuery'
	},
	plugins:[
		new webpack.ProvidePlugin({
			'$':'jquery',
			'jQuery':'jquery',
		}),
	],
	output: {
		path: __dirname,
		filename:'./dist/js/main.js'
	},
	resolve: {
		alias: {
			Main: './Main.jsx',
			Nav: './Nav.jsx',
			Weather: './Weather.jsx',
			WeatherForm: './WeatherForm.jsx',
			WeatherMessage: './WeatherMessage.jsx',
			About: './About.jsx',
			Examples: './Examples.jsx',
			openWeatherMap: './api/openWeatherMap.jsx',
		},
		extensions: ['.js', '.jsx']
	},
	module: {
		loaders: [
			{
				loader: 'babel-loader',
				query: {
					presets: ['react', 'es2015','stage-0']
				},
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/
			}
		]
	},
	devtool:'cheap-module-eval-source-map'
};
