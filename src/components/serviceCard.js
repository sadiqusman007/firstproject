import React from 'react'

const ServiceCard = ({cardImages, title}) => {
  return (
    <div className="service_card">
      <img src={cardImages} alt="" />
      <div className="overlay">
        <div className="" >
          <h2> {title} </h2>
          <button style={{ margin: 'auto' }}>
            Book Now
          </button>
        </div>
      </div>
    </div>
)
}

export default ServiceCard
