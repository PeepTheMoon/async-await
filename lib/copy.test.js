const fs = require('fs').promises;
const { copy } = require('./copy');

describe('copy function', () => {
  beforeAll(() => {
    return fs.writeFile('./myFile.txt', 'Yo, this tune slaps');
  });

  afterAll(() => {
    return Promise.all([
      fs.unlink('./myFile.txt'),
      fs.unlink('./myFile-copy.txt')
    ]);
  });
  
  it('copies a file to a new destination', async() => {
    const copiedFile = await copy('./myFile.txt', './myFile-copy.txt');

    const readCopy = await fs.readFile('./myFile-copy.txt', { encoding: 'utf8' });

    expect(copiedFile).toEqual(readCopy);
  });

});
