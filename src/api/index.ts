import { Endpoints } from '~/constants';
import { IAttractionData, IOffer, IOfferData } from '~/models';
import { errorNotification, successNotification } from '~/notifications';

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
      errorNotification('Wystąpił błąd sieciowy');
      throw new Error(response.statusText);
    }

    return (await response.json()) as T;
  } catch (error) {
    const errorMessage = error as string;
    throw new Error(`${errorMessage}`);
  }
}

export async function fetchPost<T>(endpoint: Endpoints, body: T) {
  const URL = `${BASE_URL}/${endpoint}`;

  try {
    const response = await fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
      signal: controller.signal,
    });

    if (!response.ok) {
      errorNotification('Wystąpił błąd sieciowy');
      throw new Error(response.statusText);
    }

    return response;
  } catch (error) {
    const errorMessage = error as string;
    throw new Error(`${errorMessage}`);
  }
}

export async function fetchPut<T>(endpoint: Endpoints, body: T) {
  const URL = `${BASE_URL}/${endpoint}`;

  try {
    const response: Response = await fetch(URL, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
      signal: controller.signal,
    });

    if (!response.ok) {
      errorNotification('Wystąpił błąd sieciowy');
      throw new Error(response.statusText);
    }

    return response;
  } catch (error) {
    const errorMessage = error as string;
    throw new Error(`${errorMessage}`);
  }
}

export async function fetchDelete(endpoint: Endpoints) {
  const URL = `${BASE_URL}/${endpoint}`;

  try {
    const response: Response = await fetch(URL, {
      method: 'DELETE',
      signal: controller.signal,
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    return response;
  } catch (error) {
    const errorMessage = error as string;
    throw new Error(`${errorMessage}`);
  }
}

// Special fetch function to handle created offer and response
export async function fetchAddOfferWithHandlingOfferData(body: IOffer) {
  const URL = `${BASE_URL}/${Endpoints.CREATE_OFFER}`;

  const response = await fetch(URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
    signal: controller.signal,
  });

  if (!response.ok) {
    errorNotification('Wystąpił błąd sieciowy');
    throw new Error(response.statusText);
  }

  const createdOffer = await response.text();
  const createdOfferJSON = JSON.parse(createdOffer) as IOfferData;

  return { response, createdOfferJSON };
}

// Special fetch function to make more than one request
// for add attractions to offer
export async function fetchAddMultipleAttractionsToOffer(
  createdOfferId: number,
  offerAtractions: IAttractionData[]
) {
  const attractionsToAddToOffer = offerAtractions.map(
    (attraction: IAttractionData) => {
      const URL =
        `${Endpoints.UPDATE_ATTRACTION}/${attraction.id}` as Endpoints;
      const body = {
        ...attraction,
        offer: { id: createdOfferId },
      };

      return fetchPut<IAttractionData>(URL, body);
    }
  );

  return Promise.allSettled(attractionsToAddToOffer);

  /* const rejectedResonses = responses.filter(
    (response: PromiseSettledResult<Response>) =>
      response.status !== 'fulfilled'
  );

  if (rejectedResonses.length === 0) {
    successNotification('Dodano atrakcje do oferty');
    return;
  }

  errorNotification(`Nie udało się dodać ${rejectedResonses.length} atrakcji`); */
}
