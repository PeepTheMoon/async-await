const fs = require('fs').promises;

const transformer = async(src) => {
  const fileData = await fs.readFile(src, { encoding: 'utf8' });

  const removeCaps = await fileData.replace(/[A-Z]/g, '');

  const allCaps = await removeCaps.toUpperCase();

  const reverse = await [...allCaps].reverse();

  const newData = await reverse.join('');

  return newData;
};

module.exports = { transformer };
