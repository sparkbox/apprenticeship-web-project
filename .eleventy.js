const helpers = require('handlebars-helpers')()
const handlebars = require('handlebars');
const yaml = require('js-yaml')

module.exports = function(eleventyConfig) {
  eleventyConfig.setLibrary('hbs', handlebars)
  eleventyConfig.addHandlebarsHelper('forEach', helpers.forEach)
  eleventyConfig.addDataExtension('yml', (contents) => yaml.load(contents))
  return {
    // configuration object for directories
    dir: {
      // Eleventy will look here for files to process
      input: 'source/templates/pages',
      // the built files will be placed here
      output: 'dist',
      // tells Eleventy where to look for layouts/partials relative to input
      includes: '../partials',
      layouts: '../layouts',
      data: '../../data',
    },
  };
};
