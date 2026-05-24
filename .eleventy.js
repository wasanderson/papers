module.exports = function(eleventyConfig) {
  // Copy static assets through to the build output unchanged.
  // Useful for images, PDFs, CSS files, etc.
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("pdfs");

  // Collection of all papers, sorted newest first by date.
  // Used by the home page to list papers.
  eleventyConfig.addCollection("papers", function(collectionApi) {
    return collectionApi.getFilteredByGlob("papers/*.md")
      .sort((a, b) => b.date - a.date);
  });

  // Date formatter for displaying dates in templates.
  // Usage in templates: {{ page.date | readableDate }}
  eleventyConfig.addFilter("readableDate", function(date) {
    if (!date) return "";
    const d = new Date(date);
    return d.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  });

  return {
    dir: {
      input: ".",                // Source files at the repo root
      output: "_site",           // Generated HTML goes here
      includes: "_includes",     // Templates folder
      data: "_data"              // Optional global data folder
    },
    // Markdown files become HTML
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    templateFormats: ["md", "njk", "html"]
  };
};