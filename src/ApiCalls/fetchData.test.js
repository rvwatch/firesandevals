import { fetchData } from './fetchData';

describe('fetchData apiCall', () => {
  it('should fetch house data if response is ok', async () => {
    const mockHouse = [
      {
        url: 'https://www.anapioficeandfire.com/api/houses/81',
        name: "House Corbray of Heart's Home",
        region: '',
        coatOfArms:
          'Three black ravens in flight)',
        words: '',
        titles: ["Lord of Heart's Home", 'King of the Fingers (historical)'],
        seats: ["Heart's Home"],
        currentLord: 'https://www.anapioficeandfire.com/api/characters/681',
        heir: 'https://www.anapioficeandfire.com/api/characters/677',
        overlord: 'https://www.anapioficeandfire.com/api/houses/7',
        founded: '',
        founder: 'https://www.anapioficeandfire.com/api/characters/256',
        diedOut: '',
        ancestralWeapons: ['Lady Forlorn'],
        cadetBranches: [],
        swornMembers: [
          'https://www.anapioficeandfire.com/api/characters/255',
          'https://www.anapioficeandfire.com/api/characters/256',
          'https://www.anapioficeandfire.com/api/characters/447',
          'https://www.anapioficeandfire.com/api/characters/654',
          'https://www.anapioficeandfire.com/api/characters/677',
          'https://www.anapioficeandfire.com/api/characters/681',
          'https://www.anapioficeandfire.com/api/characters/871',
          'https://www.anapioficeandfire.com/api/characters/1182'
        ]
      },
      {
        url: 'https://www.anapioficeandfire.com/api/houses/99',
        name: 'House Dayne of Starfall',
        region: 'Dorne',
        coatOfArms:
          'A white sword and falling star crossed on lilac',
        words: '',
        titles: ['Lord of Starfall', 'King of the Torrentine (historical)'],
        seats: ['Starfall'],
        currentLord: 'https://www.anapioficeandfire.com/api/characters/348',
        heir: '',
        overlord: 'https://www.anapioficeandfire.com/api/houses/285',
        founded: '',
        founder: '',
        diedOut: '',
        ancestralWeapons: ['Dawn'],
        cadetBranches: ['https://www.anapioficeandfire.com/api/houses/98'],
        swornMembers: [
          'https://www.anapioficeandfire.com/api/characters/80',
          'https://www.anapioficeandfire.com/api/characters/142',
          'https://www.anapioficeandfire.com/api/characters/151',
          'https://www.anapioficeandfire.com/api/characters/334',
          'https://www.anapioficeandfire.com/api/characters/348',
          'https://www.anapioficeandfire.com/api/characters/1060',
          'https://www.anapioficeandfire.com/api/characters/2121'
        ]
      }
    ];
    window.fetch = jest.fn().mockImplementation(() => ({
      status: 200,
      json: () =>
        new Promise(resolve => {
          resolve(mockHouse);
        })
    }));

    const expected = mockHouse;
    const response = await fetchData();
    expect(response).toEqual(expected);
  });

  it('should throw an error if rejects is caught', async () => {
    window.fetch = jest.fn().mockImplementation(() => ({
      status: 404,
      json: () =>
        new Promise(rejects => {
          rejects('error');
        })
    }));

    const expected = 'error';
    const response = await fetchData();
    expect(response).toEqual(expected);
  });
});
