import {API} from "../../assets/api/api";
import {CharacterType, ResponseType} from "../../assets/api/rick-and-morty-api";
import {Header} from "../../components/Header/Header";
import {PageWrapper} from "../../components/PageWrapper/PageWrapper";
import {Card} from "../../components/Card/Card";

export const getServerSideProps = async () => {
  const episodes = await API.rickAndMorty.getCharacters()
  if(!episodes){
    return {
      notFound:true
    }
  }

  return {
    props: {
      episodes
    }
  }
}

type PropsType = {
  episodes: ResponseType<CharacterType>
}
const Episodes = ({episodes}: PropsType) => {

  const episodesList = episodes.results.map(ep => (
    <Card key={ep.id} name={ep.name} />
    // <div key={ep.id}>{ep.status}</div>
  ))
  return (
    <PageWrapper>
      <Header/>
      <div>{episodesList}</div>
    </PageWrapper>
  );
};

export default Episodes;