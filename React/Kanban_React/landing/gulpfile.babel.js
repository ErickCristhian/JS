import gulp from 'gulp'
import connect from 'gulp-connect'
import livereload from 'gulp-livereload'
import changed from 'gulp-changed'
import util from 'gulp-util'
import gls from 'gulp-live-server'
import concat from 'gulp-concat'
import plumber from 'gulp-plumber'
import imagemin from 'gulp-imagemin'
import htmlmin from 'gulp-htmlmin'
import uglify from 'gulp-uglify'
import sass from 'gulp-sass'
import babel from 'gulp-babel'
sass.compiler = require('node-sass')

const PATH = {
	htmlSrc: 'src/',
	sassSrc: 'src/styles/',
	imgSrc: 'src/images/',
	jsSrc: 'src/javascript/',

	buildDir: 'build/',
	revDir: 'rev/',
	distDir: 'dist/'
}

const onError = (error) => {
    util.beep()
    util.log(util.colors.red(error))
}

function igniteServer(){
   const server = gls.static('./build/', 8080)
   server.start()
}

function buildHtml(){
    return gulp
        .src(PATH.htmlSrc.concat('**/*.html'))
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest(PATH.buildDir))
        .pipe(livereload())
}
gulp.task('b-html', buildHtml)

function buildCss(){
    return gulp
        .src(PATH.sassSrc.concat('**/*.scss'))
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(plumber({ errorHandler: onError }))
        .pipe(gulp.dest(PATH.buildDir.concat('/css')))
        .pipe(livereload())
}
gulp.task('b-css', buildCss)

function buildJs(){
    return gulp
        .src(PATH.jsSrc.concat('*.js'))
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(uglify())
        .pipe(plumber({ errorHandler: onError }))
        .pipe(changed(PATH.buildDir.concat('/js')))
        .pipe(gulp.dest(PATH.buildDir.concat('/js')))
        .pipe(livereload())
}
gulp.task('b-js', buildJs)

function buildImage(){
    return gulp
        .src(PATH.imgSrc.concat('**/*.+(png|jpg|jpeg|gif|sbg)'))
        .pipe(imagemin())
        .pipe(changed(PATH.buildDir.concat('/images')))
        .pipe(gulp.dest(PATH.buildDir.concat('/images')))
        .pipe(livereload())
}
gulp.task('b-img', buildImage)

function watch(){
    livereload.listen();
    gulp.watch('src/*.html', buildHtml)
	gulp.watch('src/styles/**', buildCss)
	gulp.watch(PATH.jsSrc.concat('**/*.js'), buildJs)
    gulp.watch(PATH.imgSrc.concat('**/*.+(png|jpg|jpeg|gif|svg)'), buildImage)
}

gulp.task('watch', watch)

gulp.task('build', gulp.series(buildHtml, buildCss, buildJs, buildImage))

const ENV = process.env.SERVER_ENV || 'development'

if (ENV === 'development') {
    gulp.task('default', gulp.parallel('build', watch, igniteServer))
}