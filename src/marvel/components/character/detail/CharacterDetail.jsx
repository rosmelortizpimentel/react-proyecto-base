import { useParams } from 'react-router-dom';

export const CharacterDetail = () => {
  const { idCharacter } = useParams();

  return <div>Detalle del personaje: {idCharacter}</div>;
};
