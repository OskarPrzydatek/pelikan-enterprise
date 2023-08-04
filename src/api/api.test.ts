import { vi } from 'vitest';

import { Endpoints } from '~/constants';
import { ITransportBody, ITransportData } from '~/models';

import { BASE_URL, fetchDelete, fetchGet, fetchPost, fetchPut } from '.';

describe('api', () => {
  describe('fetchGet', () => {
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

  describe('fetchPost', () => {
    test('ensure make a POST request to the correct URL with data', async () => {
      const endpoint = Endpoints.CREATE_TRANSPORT;
      const body = {
        name: 'New Transport',
        transportType: 'BUS',
        destination: 'description',
      };

      global.fetch = vi.fn().mockImplementation(async (URL, options) => {
        expect(URL).toBe(`${BASE_URL}/${endpoint}`);
        expect(options).toEqual({
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(body),
          signal: expect.anything() as unknown,
        });

        return Promise.resolve({
          ok: true,
          json: () => ({
            id: 1,
            name: 'Example Data',
            transportType: 'BUS',
            destination: 'description',
          }),
        });
      });

      const result = await fetchPost<ITransportBody>(endpoint, body);

      expect(global.fetch).toHaveBeenCalledTimes(1);
      expect(result).toEqual({
        id: 1,
        name: 'Example Data',
        transportType: 'BUS',
        destination: 'description',
      });
    });

    test('should throw an error on unsuccessful response', async () => {
      const endpoint = Endpoints.CREATE_TRANSPORT;
      const body = {
        name: 'New Transport',
        type: 'BUS',
      } as unknown as ITransportBody;
      const errorMessage = 'Error';

      global.fetch = vi.fn().mockImplementationOnce(async () => {
        return Promise.resolve({
          ok: false,
          json: () => ({ message: errorMessage }),
        });
      });

      await expect(
        fetchPost<ITransportBody>(endpoint, body)
      ).rejects.toThrowError(errorMessage);
    });
  });

  describe('fetchPut', () => {
    test('ensure make a PUT request to the correct URL with data', async () => {
      const id = 1;
      const endpoint = `${Endpoints.UPDATE_TRANSPORT}/${id}` as Endpoints;
      const body = {
        id,
        name: 'Updated Transport',
        transportType: 'SHIP',
        destination: 'destination',
      };

      global.fetch = vi.fn().mockImplementation(async (URL, options) => {
        expect(URL).toBe(`${BASE_URL}/${endpoint}`);
        expect(options).toEqual({
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(body),
          signal: expect.anything() as unknown,
        });

        return Promise.resolve({
          ok: true,
          json: () => ({ id: 1, name: 'Example Data' }),
        });
      });

      const result = await fetchPut<ITransportData>(endpoint, body);

      expect(global.fetch).toHaveBeenCalledTimes(1);
      expect(result).toEqual({ id: 1, name: 'Example Data' });
    });

    test('should throw an error on unsuccessful response', async () => {
      const id = 1;
      const endpoint = `${Endpoints.UPDATE_TRANSPORT}/${id}` as Endpoints;
      const body = {
        id,
        name: 'Updated Transport',
        transportType: 'SHIP',
        destination: 'destination',
      };
      const errorMessage = 'Error';

      global.fetch = vi.fn().mockImplementationOnce(async () => {
        return Promise.resolve({
          ok: false,
          json: () => ({ message: errorMessage }),
        });
      });

      await expect(
        fetchPut<ITransportData>(endpoint, body)
      ).rejects.toThrowError(errorMessage);
    });
  });

  describe('fetchDelete', () => {
    test('ensure make a DELETE request to the correct URL', async () => {
      const id = 1;
      const endpoint = `${Endpoints.DELETE_TRANSPORT}/${id}` as Endpoints;

      global.fetch = vi.fn().mockImplementation(async (URL, options) => {
        expect(URL).toBe(`${BASE_URL}/${endpoint}`);
        expect(options).toEqual({
          method: 'DELETE',
          signal: expect.anything() as unknown,
        });

        return Promise.resolve({
          ok: true,
          json: () => ({ id: 1, name: 'Example Data' }),
        });
      });

      const result = await fetchDelete<ITransportData>(endpoint);

      expect(global.fetch).toHaveBeenCalledTimes(1);
      expect(result).toEqual({ id: 1, name: 'Example Data' });
    });

    test('should throw an error on unsuccessful response', async () => {
      const id = 1;
      const endpoint = `${Endpoints.DELETE_TRANSPORT}/${id}` as Endpoints;
      const errorMessage = 'Error';

      global.fetch = vi.fn().mockImplementationOnce(async () => {
        return Promise.resolve({
          ok: false,
          json: () => ({ message: errorMessage }),
        });
      });

      await expect(fetchDelete<ITransportData>(endpoint)).rejects.toThrowError(
        errorMessage
      );
    });
  });
});
