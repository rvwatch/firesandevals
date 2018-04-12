import { swornData } from './swornData';
import * as mock from '../MockData/MockData';

describe('swornData apiCall', () => {
  it('should fetch swornMembers data if response is ok', async () => {
    
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
