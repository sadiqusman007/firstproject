import React from 'react'
import { AiFillStar } from 'react-icons/ai'

const ClientCard = ({avatar,name,created,desc}) => {
  return (
    <div>
      <div className="client_card">
                            <div className="revcard_topsection">
                                <img src={avatar} alt="" />
                                <div className="text_part">
                                    <h2>{name}</h2>
                                    <div className="star_part">
                                        <p>{created}</p>
                                        <div className="rating">
                                            <AiFillStar color='#FFB800' />
                                            <AiFillStar color='#FFB800' />
                                            <AiFillStar color='#FFB800' />
                                            <AiFillStar color='#FFB800' />
                                            <AiFillStar color='#FFB800' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="revcard_textarea">
                                <p>{desc}</p>
                            </div>
                        </div>
    </div>
  )
}

export default ClientCard
