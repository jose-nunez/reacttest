/*
	INCLUDES ______________________________________________________________________
*/
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var webpack = require('gulp-webpack');
var htmlmin = require('gulp-htmlmin');
/*
	DIRECTORIES ______________________________________________________________________

	ALWAYS FINISH DIRECTORIES WITH SLASH '/'
*/


// var jsx_src = src_dir+'jsx/**/*.jsx';
// var jsx_index = src_dir+'jsx/app.jsx';
// var jsx_build = build_dir+'js/';

var html_src = src_dir+'**/*.html';
var html_build = build_dir;

/*
	TASKS ______________________________________________________________________
*/
var tasks = {
	once: [],
	watch: [],
};

/* JSX ____________________________________________________________________________*/

/*gulp.task('jsx', () =>
	gulp.src(jsx_src)
	.pipe(webpack(require('./webpack.config.js')))
		.pipe(gulp.dest(jsx_build))
	.pipe(rename({suffix:'.min'}))
	.pipe(uglify())
		.pipe(gulp.dest(jsx_build))
);

gulp.task('jsx_w', function(){gulp.watch(jsx_src,['jsx']);});
gulp.task('jsx_watch',['jsx','jsx_w']);
tasks.once.push('jsx');
tasks.watch.push('jsx_w');*/

/* HTML ____________________________________________________________________________*/
gulp.task('html',function(){
	gulp.src(html_src)
		.pipe(htmlmin({collapseWhitespace: true}))
		.pipe(gulp.dest(html_build))
	;
});
gulp.task('html_w',function(){gulp.watch(html_src,['html']);});
gulp.task('html_watch',['html','html_w']);
tasks.once.push('html');
tasks.watch.push('html_w');


/* GENERAL ____________________________________________________________________________*/
gulp.task('once',tasks.once);
gulp.task('watch',tasks.watch);
gulp.task('default',['once','watch']);