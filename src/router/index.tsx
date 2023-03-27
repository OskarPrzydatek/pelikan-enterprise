import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { Body } from '~/Body';
import { Create, Edit, List } from '~/pages';

export enum Paths {
  CREATE_OFFER = 'create-offer',
  LIST_OFFER = 'list-offer',
  EDIT_OFFER = 'edit-offer/:id',

  CREATE_ATTRACTION = 'create-attraction',
  LIST_ATTRACTION = 'list-attraction',
  EDIT_ATTRACTION = 'edit-attraction/:id',

  CREATE_HOTEL = 'create-hotel',
  LIST_HOTEL = 'list-hotel',
  EDIT_HOTEL = 'edit-hotel/:id',

  CREATE_HASH_TAG = 'create-hashtag',
  LIST_HASH_TAG = 'list-hashtag',
  EDIT_HASH_TAG = 'edit-hashtag/:id',

  CREATE_TRANSPORT = 'create-transport',
  LIST_TRANSPORT = 'list-transport',
  EDIT_TRANSPORT = 'edit-transport/:id',

  PAGE = ':page',
  NOT_FOUND = '*',
}

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Body />}>
          {/* Offer Routes */}
          <Route
            index
            element={<Create title="Dodaj Ofertę" />}
            path={Paths.CREATE_OFFER}
          />
          <Route element={<List title="Lista Ofert" />} path={Paths.LIST_OFFER}>
            <Route element={<List title="Lista Ofert" />} path={Paths.PAGE} />
          </Route>
          <Route
            element={<Edit title="Edytuj Ofertę" />}
            path={Paths.EDIT_OFFER}
          />

          {/* Attraction Routes */}
          <Route
            element={<Create title="Dodaj Atrakcję" />}
            path={Paths.CREATE_ATTRACTION}
          />
          <Route
            element={<List title="Lista Atrakcji" />}
            path={Paths.LIST_ATTRACTION}
          >
            <Route
              element={<List title="Lista Atrakcji" />}
              path={Paths.PAGE}
            />
          </Route>
          <Route
            element={<Edit title="Edytuj Atrakcję" />}
            path={Paths.EDIT_ATTRACTION}
          />

          {/* Hotel Routes */}
          <Route
            element={<Create title="Dodaj Hotel" />}
            path={Paths.CREATE_HOTEL}
          />
          <Route
            element={<List title="Lista Hoteli" />}
            path={Paths.LIST_HOTEL}
          >
            <Route element={<List title="Lista Hoteli" />} path={Paths.PAGE} />
          </Route>
          <Route
            element={<Edit title="Edytuj Hotel" />}
            path={Paths.EDIT_HOTEL}
          />

          {/* Hashtag Routes */}
          <Route
            element={<Create title="Dodaj Hashtag" />}
            path={Paths.CREATE_HASH_TAG}
          />
          <Route
            element={<List title="Lista Hashtagów" />}
            path={Paths.LIST_HASH_TAG}
          >
            <Route
              element={<List title="Lista Hashtagów" />}
              path={Paths.PAGE}
            />
          </Route>
          <Route
            element={<Edit title="Edytuj Hashtag" />}
            path={Paths.EDIT_HASH_TAG}
          />

          {/* Transport Routes */}
          <Route
            element={<Create title="Dodaj Transport" />}
            path={Paths.CREATE_TRANSPORT}
          />
          <Route
            element={<List title="Lista Transportów" />}
            path={Paths.LIST_TRANSPORT}
          >
            <Route
              element={<List title="Lista Transportów" />}
              path={Paths.PAGE}
            />
          </Route>
          <Route
            element={<Edit title="Edytuj Transport" />}
            path={Paths.EDIT_TRANSPORT}
          />

          {/* Redirect */}
          <Route
            element={<Navigate replace to={Paths.CREATE_OFFER} />}
            path={Paths.NOT_FOUND}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
