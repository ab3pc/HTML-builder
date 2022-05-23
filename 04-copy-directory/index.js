const fs = require('fs');
const path = require('path');

const copyDir = async (to) => {
  fs.access(to, async (error) => {
    if (error) copy('files', 'files-copy');
		else {
		   const list =  await fs.promises.readdir(to, { withFileTypes: true });
		  list.forEach(async (file) => {
			fs.promises.rm(path.join(to, file.name), {recursive:true},()=> {});
		  });
		  copy('files', 'files-copy');
		}
	  })
}

const copy = async (from, to) => {

  await fs.promises.mkdir(path.join(__dirname, to), { recursive: true });
  const list =  await fs.promises.readdir(path.join(__dirname, from), { withFileTypes: true });
  list.forEach((file) => {
    fs.promises.copyFile(
      path.join(__dirname, from, file.name),
      path.join(__dirname, to, file.name),
    );
  });
};

copyDir(path.join(__dirname, 'files-copy'));