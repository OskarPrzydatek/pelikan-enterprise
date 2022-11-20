import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { DashboardPage } from '~/pages';

import { Slugs } from '../slugs.enum';

export const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DashboardPage />} path={Slugs.DASHBOARD} />
        <Route
          element={<Navigate replace to={Slugs.DASHBOARD} />}
          path={Slugs.NOT_FOUND}
        />
      </Routes>
    </BrowserRouter>
  );
};
