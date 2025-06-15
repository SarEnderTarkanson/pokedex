export function getPokemonId(url: string): number {
  return parseInt(url.split("/").at(-2)!, 10);
}

export function getPokemonArtwork(id: number | string): string {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
}

export function formatWeight(weight?: number): string {
  if (!weight) {
    return "--";
  }
  return (weight / 10).toString().replace(".", ",") + " kg";
}
export function formatHeight(size?: number): string {
  if (!size) {
    return "--";
  }
  return (size / 10).toString().replace(".", ",") + " m";
}

export const basePokemonStats = [
  {
    base_stat: 45,
    effort: 0,
    stat: {
      name: "hp",
      url: "https://pokeapi.co/api/v2/stat/1/",
    },
  },
  {
    base_stat: 49,
    effort: 0,
    stat: {
      name: "attack",
      url: "https://pokeapi.co/api/v2/stat/2/",
    },
  },
  {
    base_stat: 49,
    effort: 0,
    stat: {
      name: "defense",
      url: "https://pokeapi.co/api/v2/stat/3/",
    },
  },
  {
    base_stat: 65,
    stat: {
      name: "special-attack",
    },
  },
  {
    base_stat: 65,
    effort: 0,
    stat: {
      name: "special-defense",
      url: "https://pokeapi.co/api/v2/stat/5/",
    },
  },
  {
    base_stat: 1,
    stat: {
      name: "speed",
    },
  },
];
