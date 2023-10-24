module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("bundle.css");
    eleventyConfig.addPassthroughCopy("img");
    eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);
  };