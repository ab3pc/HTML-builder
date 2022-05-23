const path = require('path');
const fs = require('fs');

fs.writeFile(path.join(__dirname, 'project-dist', 'bundle.css'), '', (err) => {});
fs.readdir(path.join(__dirname, 'styles'), { withFileTypes: true }, (error, files) => {
  files.forEach((file) => {
	  if( file.isFile() && path.extname(file.name) === '.css') {
		fs.readFile(path.join(__dirname, 'styles', file.name),  (err, data) => {
			fs.appendFile(path.join(__dirname, 'project-dist', 'bundle.css'), `${data}`, (err) => {});
			})
			return;
	  }
	 else return;

    })
}) 