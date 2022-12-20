const { src, dest, series, watch } = require('gulp')
const concat = require('gulp-concat')
const autoprefixers = require('gulp-autoprefixer')
const cleanCSS = require('gulp-clean-css')
const htmlMin = require('gulp-htmlmin')
const image = require('gulp-image')

const styles = () => {
    return src('styles/src/css/*.css')
        .pipe(concat('home.css'))
        .pipe(autoprefixers({
            cascade: false
        }))
        .pipe(cleanCSS({
            level: 2
        }))
        .pipe(dest('dist'))
}

const htmlMinify = () => {
    return src('*.html')
        .pipe(htmlMin({
            collapseWhitespace: true,
        }))
        .pipe(dest('dist'))
}

const images = () => {
    return src(['img/*jpg', 'img/*png'])
    .pipe(image())
    .pipe(dest('dist/img'))
}

watch('styles/src/**/*.css', styles)
watch('src/**/*.html', htmlMinify)

exports.styles = styles
exports.htmlMinify = htmlMinify
exports.images = images

exports.default = series(styles, htmlMinify, images)
