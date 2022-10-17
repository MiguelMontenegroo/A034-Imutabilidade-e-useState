import React, {useState} from 'react'
import styled, {createGlobalStyle} from 'styled-components'
import PokemonCard from './Components/PokemonCard/PokemonCard';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`
const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`
function App() {
  const [pokemon, setPokemon] = useState({
    name: "Pichu",
    type: "Electric",
    evolved: false,
    weight: 2,
    color: 'yellow',
    image: 'https://archives.bulbagarden.net/media/upload/thumb/b/b9/172Pichu.png/250px-172Pichu.png',
    id: 0
  })
  const [pokemon2, setPokemon2] = useState({
    name: "Pidgey",
    type: "Normal",
    evolved: false,
    weight: 1.8,
    color: 'brown',
    image: 'https://archives.bulbagarden.net/media/upload/archive/5/55/20130810072001%21016Pidgey.png',
    id: 0
  })
  const Evoluir = () => {
    const novoPokemon = {
      ...pokemon,
      name: "Pichu-Spiked",
      image: 'https://archives.bulbagarden.net/media/upload/archive/b/bb/20220924142546%21Spiky-eared_Pichu_DP_1.png'
    }
    setPokemon(novoPokemon)
  }
  // Para fazer seus próximos pokemons, crie novos estados!

  return ( <>
  <GlobalStyles/>
    <FlexContainer>
      {/* Aqui neste componente, passe as props. Lembre-se que também é possivel passar a função de setState via props! */}
      <PokemonCard color={pokemon.color} 
      image={pokemon.image}
      name={pokemon.name}
      type={pokemon.type}
      weight={pokemon.weight} 
      evoluirPokemons={Evoluir}/>
      <PokemonCard color={pokemon2.color}
      image={pokemon2.image}
      name={pokemon2.name}
      type={pokemon2.type}
      weight={pokemon2.weight}/>
      
      
      


      {/* Crie aqui seus próximos pokemons! */}
    </FlexContainer>
  </>
    
  );
}

export default App;
