const mockApiData = require('../data/apiData');
const { getCharacter, getManyCharacters } = require('./rickAndMortyApi');

jest.mock('superagent', () => ({
  get(url) {

    const id = url.split('/').slice(-1);
    return Promise.resolve({
      body: mockApiData[id - 1] 
    });
  }
}));

describe('api functions', () => {
  it('returns a character with GET', async() => {
    const character = await getCharacter(1);

    expect(character).toEqual({
      name: character.name,
      status: character.status,
      species: character.species
    });
  });

  it('returns many characters with GET', async() => {
    const characters = await getManyCharacters([1, 2]);

    expect(characters).toEqual([
      {
        name: 'Rick Sanchez',
        status: 'Alive',
        species: 'Human'
      }, {
        name: 'Johnny Depp',
        status: 'Alive',
        species: 'Human'
      }
    ]);
  });

});
