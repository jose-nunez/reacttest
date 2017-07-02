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
			ErrorModal: './ErrorModal.jsx',
			appStyles: '../styles/app.scss',
		},
		extensions: ['.js', '.jsx']
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				loader: 'babel-loader',
				query: {
					presets: ['react', 'es2015','stage-0']
				},
				exclude: /(node_modules|bower_components)/
			},
			{
				test: /\.scss$/,
				loaders: ["style-loader","css-loader?sourceMap","sass-loader?sourceMap"]
			}
		],
	},
	devtool:'cheap-module-eval-source-map'
};
