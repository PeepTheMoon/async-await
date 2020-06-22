const { getCharacter, getManyCharacters } = require('./rickAndMortyApi');

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
    const characters = await getManyCharacters([1, 10, 12]);

    expect(characters).toEqual([
      {
        name: 'Rick Sanchez',
        status: 'Alive',
        species: 'Human'
      }, {
        name: 'Alan Rails',
        status: 'Dead',
        species: 'Human'
      }, {
        name: 'Alexander',
        status: 'Dead',
        species: 'Human'
      }
    ]);
  });

});
