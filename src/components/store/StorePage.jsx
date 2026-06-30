import React, { useEffect, useMemo, useState } from 'react'
import HeroCarousel from './HeroCarousel'
import FeaturedSection from './FeaturedSection'
import TopReleases from './TopReleases'
import BottomBanner from './BottomBanner'

const GAMES_API_URL = 'https://www.freetogame.com/api/games'
const GAME_DETAIL_API_URL = 'https://www.freetogame.com/api/game'
const HIGH_QUALITY_GAME_LIMIT = 13

const normalizeGame = (game) => ({
  id: game.id,
  title: game.title,
  image: game.image || game.thumbnail,
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

const fetchGameDetails = async (game, signal) => {
  const response = await fetch(`${GAME_DETAIL_API_URL}?id=${game.id}`, { signal })

  if (!response.ok) {
    return game
  }

  const details = await response.json()
  const highQualityImage = details.screenshots?.[0]?.image

  return normalizeGame({
    ...game,
    ...details,
    image: highQualityImage || details.thumbnail || game.thumbnail,
  })
}

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
        const priorityGames = data.slice(0, HIGH_QUALITY_GAME_LIMIT)
        const remainingGames = data.slice(HIGH_QUALITY_GAME_LIMIT)
        const highQualityGames = await Promise.all(
          priorityGames.map((game) => fetchGameDetails(game, controller.signal))
        )

        setGames([
          ...highQualityGames,
          ...remainingGames.map(normalizeGame),
        ])
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
