import gulp from 'gulp';
import { flags } from '@tasks/flags';
import { buildApp } from '@tasks/build/_app';
import { buildAssets } from '@tasks/build/_assets';
import { buildStyles } from '@tasks/build/_styles';
import { buildViews } from '@tasks/build/_views';

/**
 * Task: build
 */
export const build = gulp.parallel(
  buildApp,
  buildAssets,
  buildStyles,
  buildViews
);
build.displayName = 'build';
build.description = 'Build application scripts, copy assets, compile styles and views.';
build.flags = {
  '--target': flags['target'].description,
  '--env': flags['env'].description
};

gulp.task(build);
