module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/assets");
    eleventyConfig.addPassthroughCopy("src/images");
    eleventyConfig.addPassthroughCopy("src/admin");
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
    const markdownIt = require('markdown-it');
    const markdownItOptions = {
      html: true,
      breaks: true,
      linkify: true,
    };
    const md = markdownIt(markdownItOptions)
    eleventyConfig.setLibrary('md', md);
    eleventyConfig.addFilter('markdownify', (markdownString) =>
    md.render(markdownString)
  );
  
    return {
      dir: {
        input: "./src",
        output: "_site", // Equivalent to Jekyll's destination property
      },
      
       
    };
  };
  