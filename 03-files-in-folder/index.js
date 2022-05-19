const path = require('path');
const fs = require('fs');

const secretFolder = path.join(__dirname, 'secret-folder');

(async () => {
  const data = await fs.promises.readdir(secretFolder, { withFileTypes: true });
  data.forEach(async (file) => {
    if (file.isFile()) {
      const stats = await fs.promises.stat(
        path.join(secretFolder, file.name),
        file.name
      );
      console.log(
        `${file.name.split('.')[0]} - ${path
          .extname(file.name)
          .split('')
          .filter((el) => el !== '.')
          .join('')} - ` +
          (stats.size / 1024).toFixed(3) +
          ' kb'
      );
    }
  });
  return data;
})();