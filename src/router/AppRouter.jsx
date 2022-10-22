import { Route, Routes } from 'react-router-dom';
import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { MarvelRoutes } from '../marvel/routes/MarvelRoutes';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/marvel/*" element={<MarvelRoutes />} />
      <Route path="*" element={<AuthRoutes />} />
    </Routes>
  );
};
