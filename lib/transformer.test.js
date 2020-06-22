const fs = require('fs').promises;
const { transformer } = require('./transformer');


describe('transform function', () => {
  beforeAll(() => {
    return fs.writeFile('./myFile.txt', 'Yo, this tune slaps');
  });

  afterAll(() => {
    return Promise.all([
      fs.unlink('./myFile.txt')
    ]);
  });

  it('transforms a file`s contents', async() => {
    const transformedData = await transformer('./myFile.txt');

    expect(transformedData).toEqual('SPALS ENUT SIHT ,O');
  });
});
