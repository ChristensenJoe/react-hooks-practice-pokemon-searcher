import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ pokemonData }) {
  

  
  return (
    <Card.Group itemsPerRow={6}>
      {pokemonData && pokemonData.map((pokemon) => {
        return (
          <PokemonCard
            name={pokemon.name}
            hp={pokemon.hp}
            sprites={pokemon.sprites}
            id={pokemon.id}
            key={pokemon.id}
          />
        )
      })}
    </Card.Group>
  );
}

export default PokemonCollection;
