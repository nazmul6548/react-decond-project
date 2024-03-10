import React from 'react'

const Hero = (props) => {
    console.log(props);
  return (
    <div>
        <h1>
           products name : {props.product.name}
        </h1>
        <p>price : {props.product.name}</p>
    </div>
  )
}

export default Hero