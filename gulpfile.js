const gulp = require('gulp'),
    babel = require('gulp-babel');

gulp.task('es', () =>
    gulp.src(['./src/**'])
        .pipe(babel({
            presets: [['@babel/env', {modules: 'commonjs'}]]
        }))
        .pipe(gulp.dest('./dist'))
);

gulp.task('package', gulp.series('es'));
