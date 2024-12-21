import React from 'react'

const Joke = (props) => {
  return (
    <>
    <p className='setup'>Setup : {props.setup}</p>
    <p>Punchline : {props.Punchline}</p>
    <hr />
    </>
  )
}

export default Joke