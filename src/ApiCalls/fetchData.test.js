import { fetchData } from './fetchData';
import * as mock from '../MockData/MockData';

describe('fetchData apiCall', () => {
  it('should fetch house data if response is ok', async () => {
    
    window.fetch = jest.fn().mockImplementation(() => ({
      status: 200,
      json: () =>
        new Promise(resolve => {
          resolve(mock.mockHouse);
        })
    }));

    const expected = mock.mockHouse;
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
