const { DateTime } = require('luxon');

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('assets');

  eleventyConfig.addFilter('date', (value, format = 'LLLL d, yyyy') => {
    return DateTime.fromJSDate(value, { zone: 'utc' }).toFormat(format);
  });

  eleventyConfig.addPassthroughCopy('admin');

  eleventyConfig.addPairedShortcode('quote', (content) => {
    return `<div class="quote">${content}</div>`;
  });

  return {
    dir: {
      input: '.',
      includes: '_includes',
      data: '_data',
    },
    passthroughFileCopy: true,
  };
};
