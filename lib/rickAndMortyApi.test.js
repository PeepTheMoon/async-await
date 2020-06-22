const { getCharacter } = require('./rickAndMortyApi');

describe('api functions', () => {
  it('returns a character with GET', async() => {
    const character = await getCharacter(1);

    expect(character).toEqual({
      name: character.name,
      status: character.status,
      species: character.species
    });
  });
});
