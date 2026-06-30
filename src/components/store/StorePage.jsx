import React, { useEffect, useMemo, useState } from 'react'
import HeroCarousel from './HeroCarousel'
import FeaturedSection from './FeaturedSection'
import TopReleases from './TopReleases'
import BottomBanner from './BottomBanner'

const GAMES_API_URL = 'https://www.freetogame.com/api/games'

const normalizeGame = (game) => ({
  id: game.id,
  title: game.title,
  image: game.thumbnail,
  thumbnail: game.thumbnail,
  description: game.short_description,
  shortDescription: game.short_description,
  gameUrl: game.game_url,
  genre: game.genre,
  platform: game.platform,
  publisher: game.publisher,
  developer: game.developer,
  releaseDate: game.release_date,
  price: 'Free',
})

const StorePage = () => {
  const [games, setGames] = useState([])
  const [status, setStatus] = useState('loading')
  const [error, setError] = useState('')

  useEffect(() => {
    const controller = new AbortController()

    const fetchGames = async () => {
      try {
        setStatus('loading')
        const response = await fetch(GAMES_API_URL, { signal: controller.signal })

        if (!response.ok) {
          throw new Error('Could not fetch games right now.')
        }

        const data = await response.json()
        setGames(data.map(normalizeGame))
        setStatus('success')
      } catch (err) {
        if (err.name === 'AbortError') return
        setError(err.message || 'Something went wrong while loading games.')
        setStatus('error')
      }
    }

    fetchGames()

    return () => controller.abort()
  }, [])

  const storeGames = useMemo(() => ({
    hero: games.slice(0, 5),
    featured: games.slice(5, 13),
    releases: games.slice(0, 10),
    banner: games[0],
  }), [games])

  const isLoading = status === 'loading'

  return (
    <div className="store-page">
      <HeroCarousel games={storeGames.hero} isLoading={isLoading} />
      {status === 'error' && (
        <p className="store-fetch-error">{error}</p>
      )}
      <FeaturedSection games={storeGames.featured} isLoading={isLoading} />
      <BottomBanner game={storeGames.banner} />
      <TopReleases games={storeGames.releases} isLoading={isLoading} />
    </div>
  )
}

export default StorePage
