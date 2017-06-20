module.exports = {
	stats: {
		errorDetails: true
	},
	entry: './src/jsx/app.jsx',
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
	}
};
