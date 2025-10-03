import React from "react"
import { price } from "../../../dummydata"

const PriceCard = () => {
  return (
    <>
      {price.map((val,id) => (
        <div className='items shadow' key={id}>
          <h4>{val.name}</h4>
          <h1>
            <span>$</span>
            {val.price}
          </h1>
          <p>{val.desc}</p>
          <button className='outline-btn'>GET STARTED</button>
        </div>
      ))}
    </>
  )
}

export default PriceCard