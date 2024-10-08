import { useEffect, useState } from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  height: 100vh;
  background-color: #282c34;
  color: white;
  background-color: #282c34;
  min-height: 100vh;
  height: 100%;
`;
const Header = styled.header`
  background-color: white;
  height: 60px;
  width: 100%;
`;

const Image = styled.img`
  height: 90%;
`;

const Body = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 20px;
  flex-direction: column;
`;





const Pkmn = ({name}) => {
  return <div>{name}</div>;
};

function App() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=150")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.results);
        setPokemon(data.results);
      });
  }, []);

  return (
    <MainContainer>
      <Header>
        <Image
          src="https://cdn.worldvectorlogo.com/logos/pokemon-23.svg"
          alt="google logo"
        />
      </Header>
      <Body>
        {pokemon.map((pkmn, index) => {
          return<Pkmn key={index} name={pkmn.name} />
        }
        )}
      </Body>
    </MainContainer>
  );
}

export default App;
