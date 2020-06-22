const fs = require('fs').promises;

const copy = async(src, dst) => {
  const content = await fs.readFile(src, { encoding: 'utf8' });
  await fs.writeFile(dst, content);
  return content;
};

module.exports = { copy };
