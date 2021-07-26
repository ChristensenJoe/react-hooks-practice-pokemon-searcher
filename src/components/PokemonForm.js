import React from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ onFormChange, newPokemon, onSubmitForm }) {
  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={onSubmitForm}
      >
        <Form.Group widths="equal">
          <Form.Input
            fluid label="Name"
            placeholder="Name"
            name="name"
            value={newPokemon.name}
            onChange={onFormChange}
          />
          <Form.Input
            fluid label="hp"
            placeholder="hp"
            name="hp"
            value={newPokemon.hp}
            onChange={onFormChange}
          />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={newPokemon.frontUrl}
            onChange={onFormChange}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={newPokemon.backUrl}
            onChange={onFormChange}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
