import React from 'react'

const BottomBanner = ({ game }) => {
  return (
    <section className="bottom-banner">
      {game?.image && (
        <img className="bottom-banner-img" src={game.image} alt={game.title} />
      )}
      <div className="bottom-banner-bg">
        <div className="banner-char banner-char-1" />
        <div className="banner-char banner-char-2" />
        <div className="banner-char banner-char-3" />
      </div>
      <div className="bottom-banner-text">
        <h2>{game?.title || 'FORTNITE GONE WILD'}</h2>
        <p>{game ? `${game.genre} / ${game.platform}` : 'June 25 - July 9'}</p>
      </div>
    </section>
  )
}

export default BottomBanner
