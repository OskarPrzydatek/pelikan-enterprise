import { Endpoints } from '~/constants';

export const BASE_URL =
  'https://pelikan-be.agreeableriver-e6153f17.westeurope.azurecontainerapps.io';
const controller = new AbortController();

export async function fetchGet<T>(endpoint: Endpoints): Promise<T> {
  const URL = `${BASE_URL}/${endpoint}`;

  try {
    const response: Response = await fetch(URL, {
      signal: controller.signal,
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    return (await response.json()) as T;
  } catch (error) {
    const errorMessage = error as string;
    controller.abort();
    throw new Error(`${errorMessage}`);
  }
}

export async function fetchPost<T>(endpoint: Endpoints, body: T) {
  const URL = `${BASE_URL}/${endpoint}`;

  try {
    const response: Response = await fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
      signal: controller.signal,
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    return response;
  } catch (error) {
    const errorMessage = error as string;
    controller.abort();
    throw new Error(`${errorMessage}`);
  }
}

export async function fetchPut<T>(endpoint: Endpoints, data: T): Promise<T> {
  const URL = `${BASE_URL}/${endpoint}`;

  try {
    const response: Response = await fetch(URL, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
      signal: controller.signal,
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    return (await response.json()) as T;
  } catch (error) {
    const errorMessage = error as string;
    controller.abort();
    throw new Error(`${errorMessage}`);
  }
}

export async function fetchDelete<T>(endpoint: Endpoints): Promise<T> {
  const URL = `${BASE_URL}/${endpoint}`;

  try {
    const response: Response = await fetch(URL, {
      method: 'DELETE',
      signal: controller.signal,
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    return (await response.json()) as T;
  } catch (error) {
    const errorMessage = error as string;
    controller.abort();
    throw new Error(`${errorMessage}`);
  }
}
