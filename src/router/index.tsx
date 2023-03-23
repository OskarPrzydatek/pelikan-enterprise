import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { Create, Edit, List } from '~/pages';

export enum Slugs {
  CREATE = 'create',
  LIST = 'list',
  EDIT = 'edit',
  OFFER = 'offer',
  ATTRACTION = 'attraction',
  HOTEL = 'hotel',
  HASHTAG = 'hashtag',
  TRANSPORT = 'transport',
  ID = ':id',
  PAGE = ':page',
  NOT_FOUND = '*',
}

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Offer Routes */}
        <Route
          index
          element={<Create title="Dodaj Ofertę" />}
          path={`${Slugs.CREATE}-${Slugs.OFFER}`}
        />
        <Route
          element={<List title="Lista Ofert" />}
          path={`${Slugs.LIST}-${Slugs.OFFER}`}
        >
          <Route element={<List title="Lista Ofert" />} path={Slugs.PAGE} />
        </Route>
        <Route
          element={<Edit title="Edytuj Ofertę" />}
          path={`${Slugs.EDIT}-${Slugs.OFFER}/${Slugs.ID}`}
        />

        {/* Attraction Routes */}
        <Route
          element={<Create title="Dodaj Atrakcję" />}
          path={`${Slugs.CREATE}-${Slugs.ATTRACTION}`}
        />
        <Route
          element={<List title="Lista Atrakcji" />}
          path={`${Slugs.LIST}-${Slugs.ATTRACTION}`}
        >
          <Route element={<List title="Lista Atrakcji" />} path={Slugs.PAGE} />
        </Route>
        <Route
          element={<Edit title="Edytuj Atrakcję" />}
          path={`${Slugs.EDIT}-${Slugs.ATTRACTION}/${Slugs.ID}`}
        />

        {/* Hotel Routes */}
        <Route
          element={<Create title="Dodaj Hotel" />}
          path={`${Slugs.CREATE}-${Slugs.HOTEL}`}
        />
        <Route
          element={<List title="Lista Hoteli" />}
          path={`${Slugs.LIST}-${Slugs.HOTEL}`}
        >
          <Route element={<List title="Lista Hoteli" />} path={Slugs.PAGE} />
        </Route>
        <Route
          element={<Edit title="Edytuj Hotel" />}
          path={`${Slugs.EDIT}-${Slugs.HOTEL}/${Slugs.ID}`}
        />

        {/* Hashtag Routes */}
        <Route
          element={<Create title="Dodaj Hashtag" />}
          path={`${Slugs.CREATE}-${Slugs.HASHTAG}`}
        />
        <Route
          element={<List title="Lista Hashtagów" />}
          path={`${Slugs.LIST}-${Slugs.HASHTAG}`}
        >
          <Route element={<List title="Lista Hashtagów" />} path={Slugs.PAGE} />
        </Route>
        <Route
          element={<Edit title="Edytuj Hashtag" />}
          path={`${Slugs.EDIT}-${Slugs.HASHTAG}/${Slugs.ID}`}
        />

        {/* Transport Routes */}
        <Route
          element={<Create title="Dodaj Transport" />}
          path={`${Slugs.CREATE}-${Slugs.TRANSPORT}`}
        />
        <Route
          element={<List title="Lista Transportów" />}
          path={`${Slugs.LIST}-${Slugs.TRANSPORT}`}
        >
          <Route
            element={<List title="Lista Transportów" />}
            path={Slugs.PAGE}
          />
        </Route>
        <Route
          element={<Edit title="Edytuj Transport" />}
          path={`${Slugs.EDIT}-${Slugs.TRANSPORT}/${Slugs.ID}`}
        />

        {/* Redirect */}
        <Route
          element={<Navigate replace to={`${Slugs.CREATE}-${Slugs.OFFER}`} />}
          path={Slugs.NOT_FOUND}
        />
      </Routes>
    </BrowserRouter>
  );
};
