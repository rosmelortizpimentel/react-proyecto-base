import { Navigate, Route, Routes } from 'react-router-dom';
import { MarvelPage } from '../pages/MarvelPage';
export const MarvelRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MarvelPage />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
