let {src,dest,watch} = require('gulp'),
	htmlmin = require('gulp-htmlmin'),
	uglify = require('gulp-uglify'),
	imgmin = require('gulp-imagemin'),
	babel = require('gulp-babel'),
	concat = require('gulp-concat'),
	cssnano = require('gulp-cssnano'),
	rename = require('gulp-rename'),
	sass = require('gulp-sass');
	
	//2
function fncopyIndex(){
	return src('./src/index.html')
	.pipe(dest('./dist'));
}
function fnJs(){
	return src('./src/js/*.js')
	.pipe(babel({
		presets: ['@babel/env']
	}))
	.pipe(uglify())
	.pipe(rename({ suffix : '.min'}))
	.pipe(dest('./dist/js'));
}
function fnCss(){
	return src('./src/sass/*.scss')
	.pipe(sass())
	.pipe(cssnano())
	.pipe(rename({suffix : '.min'}))
	.pipe(dest('./dist/css'));
}
function fnImg(){
	return src('./src/img/*')
	.pipe(imgmin())
	.pipe(dest('./dist/img'));
}
function fnPages(){
	return src('./src/pages/*.html')
	.pipe(htmlmin())
	.pipe(dest('./dist/pages'));
}
function fnWatch(){
	watch('./src/index.html');
	watch('./src/js/*.js');
	watch('./src/sass/*.css');
	watch('./src/pages/*.html');
}

exports.index = fncopyIndex;
exports.js = fnJs;
exports.img = fnImg;
exports.css = fnCss;
exports.pages = fnPages;
exports.default = fnWatch;