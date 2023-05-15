import { heroes } from "../data/heroes";

export const getHeroesByPublisher = (publisher) => {
  const validPublshers = ["DC Comics", "Marvel Comics"];

  if (!validPublshers.includes(publisher)) {
    throw new Error(`${publisher} is not a valid publisher`);
  }
  return heroes.filter((heroe) => heroe.publisher === publisher);
};
