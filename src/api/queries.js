import { gql } from '@apollo/client'

export const GET_POKEMONS = gql`
  query pokemons {
    pokemons {
      results {
        url
        name
        image
        id
      }
    }
  }
`

export const GET_POKEMON_BY_ID = gql`
  query pokemon($name: String!) {
    pokemon(name: $name) {
      abilities {
        ability {
          url
          name
        }
        is_hidden
        slot
      }
      base_experience
      forms {
        url
        name
      }
      game_indices {
        game_index
        version {
          url
          name
        }
      }
      height
      held_items {
        item {
          url
          name
        }
        version_details {
          rarity
          version {
            url
            name
          }
        }
      }
      id
      is_default
      location_area_encounters
      moves {
        move {
          name
          url
        }
        version_group_details {
          level_learned_at
          move_learn_method {
            url
            name
          }
          version_group {
            url
            name
          }
        }
      }
      name
      order
      species {
        url
        name
      }
      sprites {
        back_default
        back_female
        back_shiny
        back_shiny_female
        front_default
        front_shiny
        front_female
        front_shiny_female
      }
      stats {
        base_stat
        effort
        stat {
          url
          name
        }
      }
      types {
        slot
        type {
          url
          name
        }
      }
      weight
      status
      message
    }
  }
`