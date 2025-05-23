const { DateTime } = require('luxon');

module.exports = function (eleventyConfig) {
  // ✅ Copy static assets
  eleventyConfig.addPassthroughCopy('assets');

  // ✅ Copy Decap CMS admin folder
  eleventyConfig.addPassthroughCopy('admin');

  // ✅ Custom date filter for Nunjucks
  eleventyConfig.addFilter('date', (value, format = 'LLLL d, yyyy') => {
    return DateTime.fromJSDate(value, { zone: 'utc' }).toFormat(format);
  });

  // ✅ Custom shortcode for script-style quotes
  eleventyConfig.addPairedShortcode('quote', (content) => {
    return `<div class="quote">${content}</div>`;
  });

  // ✅ Directory structure config
  return {
    dir: {
      input: '.',
      includes: '_includes',
      data: '_data',
    },
    passthroughFileCopy: true,
  };
};
