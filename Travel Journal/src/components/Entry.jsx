import React from 'react'

function Entry(props) {
  return (
    <article>
        <img className='main-image' src={props.img.src} alt={props.img.alt} />
        <div className='details'>
            <div className='details-headings'>
            <img className='marker-icon' src="/src/assets/marker.svg" alt="marker-icon" />
            <h2 className='country-name'>{props.country}</h2>
            <a className='google-maps-links' href={props.googleMapsLinks}>View on Google Maps</a>
            </div>
            <div className='details-contents'>
                <h1 className='contents-heading'>{props.title}</h1>
                <h2 className='date'>{props.dates}</h2>
                <p className='text-paragarph'>{props.text}</p>
            </div>
        </div>
    </article>
  )
}

export default Entry