import { getRepository } from "typeorm";
import { Pokemon } from "../entity/Pokemon";

export class PokemonService {
  static create(
    name: string,
    ammount: number,
    type: string,
    price: number,
    img: string
  ) {
    const pokemonRepository = getRepository(Pokemon);
    const pokemon = pokemonRepository.create({
      name,
      ammount,
      type,
      price,
      img,
    });
    pokemonRepository.save(pokemon);
    return pokemon;
  }

  static async findAll() {
    const pokemonRepository = getRepository(Pokemon);
    const pokemons = await pokemonRepository.find({});

    return pokemons;
  }

  static async findOne(id: any) {
    const pokemonRepository = getRepository(Pokemon);
    const pokemon = await pokemonRepository.findOne(id);
    console.log(pokemon, `um ${pokemon.name} encontrado`);
    return pokemon;
  }

  static async update(id: any, name: string) {
    const pokemonRepository = getRepository(Pokemon);
    const pokemon = await pokemonRepository.findOne(id);
    const pokemonUpdated = pokemonRepository.merge(pokemon, {
      name,
    });
    await pokemonRepository.save(pokemonUpdated);
    console.log(`evoluído para ${pokemonUpdated.name}`);
    return pokemonUpdated;
  }

  static async delete(id: any) {
    const pokemonRepository = getRepository(Pokemon);
    const pokemon = await pokemonRepository.findOne(id);
    const pokemonDeleted = await pokemonRepository.softRemove(pokemon);
    console.log(pokemonDeleted, `${pokemon.name} excluído com sucesso`);
  }
}
