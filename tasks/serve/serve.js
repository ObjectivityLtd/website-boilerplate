import gulp from 'gulp';
import { argv, flags, server } from '@root/gulpfile.babel';
import * as config from '@tasks/config';
import watch from '@tasks/watch/watch'

function runServer(done) {
  server.init({
    server: 'build',
    host: argv.host,
    port: argv.port,
    open: argv.open,
    ghostMode: argv.sync,
    codeSync: argv.livereload,
    notify: false
  });

  done();
}

/**
 * Task: serve
 */
const serve = gulp.parallel(
  runServer,
  watch
);
serve.displayName = 'serve';
serve.description = 'Run application server for development.';
serve.flags = {
  '--host': flags.host.description,
  '--port': flags.port.description,
  '--open': flags.open.description,
  '--sync-browser': flags.sync.description,
  '--live-reload': flags.livereload.description
};

gulp.task(serve);

export default serve;
