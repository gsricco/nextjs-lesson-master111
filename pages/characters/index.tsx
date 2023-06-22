import {API} from "../../assets/api/api";
import {CharacterType, ResponseType} from "../../assets/api/rick-and-morty-api";
import {Header} from "../../components/Header/Header";
import Image from "next/image";
import {PageWrapper} from "../../components/PageWrapper/PageWrapper";
import {CharacterCard} from "../../components/Card/CharacterCard/CharacterCard";

export const getStaticProps = async () => {
  const characters = await API.rickAndMorty.getCharacters()
  return {
    props: {
      characters
    }
  }
}

type PropsType = {
  characters: ResponseType<CharacterType>
}
const Characters = ({characters}: PropsType) => {

  const charactersList = characters.results.map(ch => (
    <CharacterCard key={ch.id} character={ch}/>
    // <div key={ch.id}>{ch.name}</div>
  ))
  return (
    <PageWrapper>
      <Header/>
      {/*<div>{charactersList}</div>*/}
      {charactersList}
    </PageWrapper>
  );
};

export default Characters;