import React, {useState, useEffect} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [searchData, setSearchData] = useState("");
  const [newPokemon, setNewPokemon] = useState({
    name: "",
    hp: "",
    frontUrl: "",
    backUrl: ""
  });
  const [pokemonData, setPokemonData] = useState(null);

  function handleFormChange(event) {
    setNewPokemon((newPokemon) => {
      return {
        ...newPokemon,
        [event.target.name] : event.target.value
      }
    })
  }

  function handleSubmitForm(event) {
    event.preventDefault();
    fetch("http://localhost:3001/pokemon", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: newPokemon.name,
        hp: newPokemon.hp,
        sprites: {
          front: newPokemon.frontUrl,
          back: newPokemon.backUrl
        }
      })
    })
    .then(res => res.json())
    .then(data => {
      setPokemonData((pokemonData) => {
        return [...pokemonData,
        data]
      })
    })

    setNewPokemon({
      name: "",
      hp: "",
      frontUrl: "",
      backUrl: ""
    });
  }

  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
      .then(res => res.json())
      .then(data => {
        const filteredData = data.filter((pokemon) => {
          if (pokemon.name.toLowerCase().includes(searchData.toLowerCase())) return true;
          return false;
        })
        setPokemonData(filteredData);
      })
  }, [searchData])

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm 
        onFormChange={handleFormChange}
        newPokemon={newPokemon}
        onSubmitForm={handleSubmitForm}
      />
      <br />
      <Search 
        searchData={searchData}
        onSearchChange={setSearchData}
      />
      <br />
      <PokemonCollection 
        pokemonData={pokemonData}
      />
    </Container>
  );
}

export default PokemonPage;
