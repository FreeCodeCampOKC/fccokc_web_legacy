const validator = require("html-validator");
const fs = require("fs");

const testFolder = "./docs/";

var options = {
  format: "text"
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
