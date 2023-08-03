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

/* export async function fetchPost<T>(endpoint: string, body: T) {}

export async function fetchUpdate<T>(endpoint: string, data: T) {}

export async function fetchDelete<T>(endpoint: string) {} */
