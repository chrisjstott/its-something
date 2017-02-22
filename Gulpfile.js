var elixir = require('laravel-elixir');

elixir(function(mix) {
  mix.sass('./src/style.scss', './dist');
  mix.browserify('./src/app.js', './dist');
});
