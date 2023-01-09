const { src, dest, series, parallel, watch } = require('gulp')
const concat = require('gulp-concat')
const autoprefixers = require('gulp-autoprefixer')
const cleanCSS = require('gulp-clean-css')
const htmlMin = require('gulp-htmlmin')
const image = require('gulp-image')
const uglify = require('gulp-uglify-es').default
const babel = require('gulp-babel')
const notify = require('gulp-notify')
const sourcemaps = require('gulp-sourcemaps')
//const deleteAsync = require('del')
const browserSync = require('browser-sync').create()
/* 
const clean = () => {
    return deleteAsync(['dist'])
} */

const stylesBuild = () => {
    return src('src/styles/**/*.css')
        //.pipe(concat('main.css'))
        .pipe(autoprefixers({
            cascade: false
        }))
        .pipe(cleanCSS({
            level: 2
        }))
        .pipe(dest('dist/styles'))
        .pipe(browserSync.stream())
}

const styles = () => {
    return src('src/styles/**/*.css')
    .pipe(sourcemaps.init())
    .pipe(concat('main.css'))
    .pipe(cleanCSS({
        level: 2
    }))
    .pipe(sourcemaps.write())
    .pipe(dest('dist/styles'))
    .pipe(browserSync.stream())
}

const htmlMinifyBuild = () => {
    return src('src/*.html')
        .pipe(htmlMin({
            collapseWhitespace: true,
        }))
        .pipe(dest('dist'))
        .pipe(browserSync.stream())
}

const htmlMinify = () => {
    return src('src/*.html')
    .pipe(dest('dist'))
    .pipe(browserSync.stream())
}

const scriptsBuild =() => {
    return src('src/*.js')
    .pipe(babel({
        presets: ['@babel/env']
    }))
    //.pipe(concat('app.js'))
    .pipe(uglify({
        toplevel: true
    }).on('error', notify.onError()))
    .pipe(dest('dist'))
    .pipe(browserSync.stream())
}

const scripts = () => {
    return src('src/*.js')
    .pipe(sourcemaps.init())
    //.pipe(concat('app.js'))
    .pipe(sourcemaps.write())
    .pipe(dest('dist'))
    .pipe(browserSync.stream())
}

const watchFiles = () => {
    browserSync.init({
        server: {
            baseDir: 'dist'
        }
    })
}

const images = () => {
    return src([
        'src/img/**/*jpg',
        'src/img/**/*png',
        'src/img/*svg',
        'src/img/**/*jpeg',
    ])
    .pipe(image())
    .pipe(dest('dist/img'))
}

const fonts = () => {
    return src([
        'src/fonts/*woff',
        'src/fonts/*woff2',
    ])
    .pipe(image())
    .pipe(dest('dist/fonts'))
}

watch([ 'src/fonts/*woff', 'src/fonts/*woff2'], fonts)
watch('src/*.html', htmlMinify)
watch('src/styles/*.css', styles)
watch('src/*.js', scripts)

//exports.clean = clean
exports.styles = styles
exports.htmlMinify = htmlMinify
exports.scripts = scripts
exports.default = series(fonts, htmlMinify, scripts, styles, images, watchFiles)
exports.build = parallel(fonts, htmlMinifyBuild, scriptsBuild, stylesBuild, images)
