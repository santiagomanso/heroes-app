import { heroes } from '../../data/heroes'

export const getHeroesByPublisher = (publisher) => {
  const validPublishers = ['DC Comics', 'Marvel Comics']

  if (!validPublishers) {
    throw new Error(`${publisher} is not a valid Publisher`)
  }

  return heroes.filter((hero) => hero.publisher === publisher)
}
