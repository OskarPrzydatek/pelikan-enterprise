import { vi } from 'vitest';

import { Endpoints } from '~/constants';
import { ITransportData } from '~/models';

import { BASE_URL, fetchGet } from '.';

describe('fetchGet function', () => {
  test('ensure make a GET request to the correct URL', async () => {
    const endpoint = Endpoints.TRANSPORTS_LIST;

    global.fetch = vi.fn().mockImplementation(async () => {
      return Promise.resolve({
        ok: true,
        json: () => ({ id: 1, name: 'Example Data' }),
      });
    });

    const result = await fetchGet<ITransportData[]>(endpoint);

    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(`${BASE_URL}/${endpoint}`, {
      signal: expect.anything() as unknown,
    });
    expect(result).toEqual({
      id: 1,
      name: 'Example Data',
    });
  });

  test('should throw an error on unsuccessful response', async () => {
    const endpoint = 'nonexistent'; // undefined endpoint
    const errorMessage = 'Error';

    global.fetch = vi.fn().mockImplementationOnce(async () => {
      return Promise.resolve({
        ok: false,
        json: () => ({ message: errorMessage }),
      });
    });

    await expect(
      fetchGet<ITransportData[]>(endpoint as Endpoints)
    ).rejects.toThrowError(errorMessage);
  });
});
