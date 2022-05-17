import { useMemo } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import queryString from 'query-string'

import { useForm } from '../../hooks/useForm'
import { getHeroesByName } from '../../selectors/getHeroesByName'
import { HeroCard } from '../hero/HeroCard'

export const SearchScreen = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const { q = '' } = queryString.parse(location.search)

  const [formValues, handleInputChange] = useForm({
    searchText: q,
  })

  const { searchText } = formValues

  const heroesFileted = useMemo(() => getHeroesByName(q), [q])

  const handleSearch = (e) => {
    e.preventDefault()
    navigate(`?q=${searchText}`)
  }

  return (
    <>
      <h1>Búsquedas</h1>
      <hr />

      <div className='row'>
        <div className='col-5'>
          <h4>Search a Hero</h4>
          <hr />

          <form onSubmit={handleSearch}>
            <input
              type='text'
              placeholder='Buscar un héroe'
              className='form-control'
              name='searchText'
              autoComplete='off'
              value={searchText}
              onChange={handleInputChange}
            />

            <button className='btn btn-outline-primary mt-1' type='submit'>
              Searh...
            </button>
          </form>
        </div>

        <div className='col-7'>
          <h4>Results</h4>
          <hr />

          {q === '' ? (
            <div className='alert alert-info'>
              {' '}
              search something to beign with{' '}
            </div>
          ) : (
            heroesFileted.length === 0 && (
              <div className='alert alert-danger animate__animated animate__headShake'>
                {' '}
                there are no reuslts with: {q}{' '}
              </div>
            )
          )}

          {heroesFileted.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </>
  )
}
