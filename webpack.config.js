module.exports = {
	stats: {
		errorDetails: true
	},
	entry: './src/jsx/app.jsx',
	output: {
		path: __dirname,
		filename:'./main.js'
	},
	resolve: {
		root: __dirname,
		alias: {
			Main: './Main.jsx',
		},
		extensions: ['','.js', '.jsx']
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
