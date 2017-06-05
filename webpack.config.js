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
			Greeter: './Greeter.jsx',
			GreeterMessage: './GreeterMessage.jsx',
			GreeterForm: './GreeterForm.jsx',
		},
		extensions: ['','.js', '.jsx']
	},
	module: {
	loaders: [
		{
			loader: 'babel-loader',
			query: {
				presets: ['react', 'es2015']
			},
			test: /\.jsx?$/,
			exclude: /(node_modules|bower_components)/
		}
	]
	}
};
