const validator = require("html-validator");
const fs = require("fs");

const testFolder = "./docs/";

const ignores = [
  "Error: Bad value “true” for attribute “allowfullscreen” on element “iframe”.",
  "Error: The “frameborder” attribute on the “iframe” element is obsolete. Use CSS instead.",
  "Error: The “scrolling” attribute on the “iframe” element is obsolete. Use CSS instead.",
  "Error: Bad value “true” for attribute “allowfullscreen” on element “iframe”.",
  "Error: The “frameborder” attribute on the “iframe” element is obsolete. Use CSS instead.",
  "Error: The “scrolling” attribute on the “iframe” element is obsolete. Use CSS instead.",
  "Warning: Article lacks heading. Consider using “h2”-“h6” elements to add identifying headings to all articles."
];

var options = {
  format: "text",
  ignore: ignores
};

fs.readdir(testFolder, (err, files) => {
  files.forEach(file => {
    if (file.endsWith(".html")) {
      const filePath = testFolder + file;
      fs.readFile(filePath, "utf-8", (err, html) => {
        if (err) throw err;

        options.data = html;

        validator(options)
          .then(data => {
            console.log("====================");
            console.log(file + "\n");
            console.log(data);
          })
          .catch(err => {
            console.log("====================");
            console.log(file + "\n");
            console.error(err);
          });
      });
    }
  });
});
