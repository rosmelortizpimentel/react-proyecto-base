import { Route, Routes } from 'react-router-dom';
import { DetailsPage } from '../pages/DetailsPage';
import { MarvelPage } from '../pages/MarvelPage';
export const MarvelRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MarvelPage />} />
      <Route path="/search/:nameCharacter" element={<MarvelPage />} />
      <Route path="/details/:idCharacter" element={<DetailsPage />} />
      {/* <Route path="/*" element={<Navigate to="/" />} /> */}
    </Routes>
  );
};
