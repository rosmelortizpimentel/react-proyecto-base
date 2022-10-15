import { Route, Routes } from 'react-router-dom';
import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { MarvelRoutes } from '../marvel/routes/MarvelRoutes';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/auth/*" element={<AuthRoutes />} />
      <Route path="*" element={<MarvelRoutes />} />
    </Routes>
  );
};
