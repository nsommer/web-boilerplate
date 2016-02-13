Dead simple boilerplate for HTML5 websites
==========================================
*Web Boilerplate* is my dead simple skeleton for new static HTML5 websites. Optimized for the use of [Sass](http://sass-lang.com) and [CoffeeScript](http://coffeescript.org). Don't write the same Gruntfile over and over again.

- HTML5 based
- Containg commonly useful templates for files like `404.html`, `robots.txt` and `favicon.ico`
- Targeted at the very latest browser versions (Chrome, Safari, Firefox, IE11/Edge)
- Useful `grunt.js` tasks for **Sass**, **CoffeeScript** or serving the website.
- Includes **normalize.css** and **jQuery**.

*Web Boilerplate* was inspired by [HTML5 Boilerplate](https://github.com/h5bp/html5-boilerplate). It makes it easier to start with the CSS and JavaScript preprocessors [Sass](http://sass-lang.com) and [CoffeeScript](http://coffeescript.org).

## Customization
Installation (depends on nodejs, bower, sass, grunt):

```bash
npm install
bower install
```

### Grunt tasks

| Task | Description |
|------|-------------|
| `grunt build` | Builds the css and js files, including minified versions and source maps. |
| `grunt build-css` | Builds the css file, including a minified version and source maps. |
| `grunt build-js` | Builds the js file, including a minified version and source maps. |
| `grunt watch` | Watches for file changes and rebuilds. |
| `grunt watch:sass` | Watches for Sass file changes and rebuilds. |
| `grunt watch:coffee` | Watches for CoffeeScript file changes and rebuilds. |
| `grunt connect` | Starts an HTTP server at port *8000*. |

### Including additional vendor code
*Web Boilerplate* comes with **normalize.css** and **jQuery** by default. If you need to add additional vendor libraries that you want to include into your css or js bundle, simply do this:

- Download the library using bower `bower install <library name>`.
- If it's CSS/Sass: Just use the `import` function to include it into your `sass/application.scss`.
- If it's JavaScript: Put the filename (including the path to the file) into the `concat:bundle:src` array of the `Gruntfile.js`.

## License
MIT license rocks.
