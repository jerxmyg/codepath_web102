import { useState, useEffect } from 'react'
import { Link } from "react-router-dom"


const Character = ({ image, tvShows, videoGames, films, name}) => {
  const URL = `/character/${name}`
  return(
    <div className="character">
      <div className="character-visual">
        <div className="name">
          <Link to={URL} className="linkButton">{name}</Link>
        </div>

        <img src={image} width="200px" alt={name}/>
      </div>
      <div className="section">
        <h2 className="section-title">TV Shows</h2>
        <ul>
          {tvShows.map(show => <li>{show}</li>)}
        </ul>
      </div>
      <div className="section">
        <h2 className="section-title">Video Games</h2>
        <ul>
          {videoGames.map(game => <li>{game}</li>)}
        </ul>
      </div>
      <div className='section'>
        <h2 className="section-title">Films</h2>
        <ul>
          {films.map(film => <li>{film}</li>)}
        </ul>
      </div>
    </div>
  )
}

export default Character;
