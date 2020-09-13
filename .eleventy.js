module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("assets");
    eleventyConfig.addPassthroughCopy("images");
    // eleventyConfig.setUseGitIgnore(false);
    // eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.setTemplateFormats([
      "md",
      "css",
      "html",
      "jpg",
      "doc",
      "png",
      "gif",
      "ico",
      "svg",
      "otf",
      "eot",
      "ttf",
      "woff",
      "woff2",
      "njk"
    ]);
  
    return {
      dir: {
        input: "./src",
        output: "_site", // Equivalent to Jekyll's destination property
      },
      passthroughFileCopy: true,
      includes: "_includes",
       
    };
  };
  