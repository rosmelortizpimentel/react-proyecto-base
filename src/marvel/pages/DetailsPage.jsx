import { useParams } from 'react-router-dom';
import { PrincipalLayout } from '../layout/PrincipalLayout';
import { Banner, Header, Footer, CharacterDetail } from '../components/';

export const DetailsPage = () => {
  const { idCharacter } = useParams();
  return (
    <>
      <Header />
      <Banner />
      <PrincipalLayout>
        <CharacterDetail idCharacter={idCharacter}></CharacterDetail>
      </PrincipalLayout>
      <Footer />
    </>
  );
};
