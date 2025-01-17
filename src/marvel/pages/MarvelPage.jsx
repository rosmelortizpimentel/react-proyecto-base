// import { useEffect, useState } from 'react';
import { PrincipalLayout } from '../layout/PrincipalLayout';
import { Banner, Header, Footer, SearchCharacter, CharactersList } from '../components/';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export const MarvelPage = () => {
  const navigate = useNavigate();

  const [searches, setSearches] = useState([]);
  const onNewSearch = (newSearch) => {
    if (searches.includes(newSearch)) return;
    if (newSearch === '') return navigate(`/marvel`);
    setSearches([newSearch, ...searches]);
    navigate(`/marvel/search/${newSearch}`);
  };

  return (
    <>
      <Header />
      <Banner />
      <PrincipalLayout>
        <SearchCharacter
          onNewSearch={(value) => onNewSearch(value)}
          sx={{
            with: '100%',
          }}
        />
        {searches.map((search) => {
          return <CharactersList key={search} query={search} />;
        })}
      </PrincipalLayout>
      <Footer />
    </>
  );
};
